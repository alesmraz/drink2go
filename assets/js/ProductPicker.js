export default class ProductPicker {
  constructor() {
    this.elementName = '.productPicker'
    this.elementChildsName = '.productPicker__item'
    this.addProductName = '#addProduct'
    this.deleteButtonName = '.deleteButton'
    this.inputNameTemplate = 'nameTemplate'
  }

  init() {
    const items = [...document.querySelectorAll(this.elementName)]

    if (items.length) {
      items.map((productPicker, index) => {
        this.initRow(productPicker, index)
        this.handleAddButton(productPicker)
      })
    }
  }

  initRow(productPicker) {
    const deleteButton = productPicker.querySelector(this.deleteButtonName)
    const productItemsCount = [...productPicker.querySelectorAll(this.elementChildsName)].length

    deleteButton.addEventListener('click', (ev) => {
      ev.preventDefault()
      if (productItemsCount !== 1 && deleteButton) {

        if (productPicker.classList.contains( this.elementChildsName.replace('.', '') )) {
          const realParent = productPicker.closest(this.elementName)

          this.recalcIndexing(realParent, productPicker)
        }
      }
    })

  }

  addRow(productPicker) {
    const firstRow = productPicker.querySelector(`${this.elementChildsName}[data-index="1"]`)
    const lastRow = productPicker.querySelector(`${this.elementChildsName}:last-of-type`)

    if (firstRow) {
      const lastIndex = parseInt(lastRow.dataset.index)
      const newIndex = lastIndex + 1

      if (lastRow) {
        const newRow = this.createNewRow(firstRow, newIndex)

        productPicker.appendChild(newRow)

        const freshRow = productPicker.querySelector(`${this.elementChildsName}[data-index="${newIndex}"]`)

        if (freshRow) {
          this.initRow(freshRow, newIndex)
        } else {
          throw new Error('fresh row not exist!')
        }

      }
    }
  }

  handleAddButton(productPicker) {
    const newButton = productPicker.closest(this.elementName).parentNode.querySelector(this.addProductName)
    newButton.addEventListener('click', (ev) => {
      ev.preventDefault()

      this.addRow(productPicker)
    })
  }

  createNewRow(firstRow, newIndex) {
    const newRow = firstRow.cloneNode(true)

    const allSelects = newRow.querySelectorAll('select')
    const numberInput = newRow.querySelector('input[type="number"]')
    const radios = [...newRow.querySelectorAll('input[type="radio"]')]
    const elements = [...newRow.querySelectorAll('.element-to-update-index')]

    newRow.dataset.index = newIndex
    allSelects.forEach((select) => {
      select.name = this.getInputName(select, newIndex)
      select.selectedIndex = 0
    })

    radios.forEach((radio, index) => {
      if (radio) {
        radio.name = this.getInputName(radio, newIndex)

        const radioLabel = radio.parentNode.querySelector('label')

        if (radioLabel) {
          radioLabel.setAttribute('for', this.getInputName(radioLabel, newIndex, 'nameId'))
          radio.id = this.getInputName(radio, newIndex, 'nameId')

        }

        if (index === 0) {
          radios.forEach(radioSecond => {
            radioSecond.checked = false
          })

          radio.checked = true
        }
      }
    })

    elements.forEach((element) => {
      if (element) {
        element.id = this.getInputName(element, newIndex)
      }
    })

    numberInput.value = 1
    numberInput.name = this.getInputName(numberInput, newIndex)

    return newRow
  }

  recalcIndexing(realParent, productPicker) {
    productPicker.remove()

    setTimeout(() => {
      const childs = [...realParent.querySelectorAll(this.elementChildsName)]

      if (childs.length) {
        childs.forEach((child, index) => {
          const newIndex = index+1

          const allSelects = child.querySelectorAll('select')
          const numberInput = child.querySelector('input[type="number"]')
          const radios = [...child.querySelectorAll('input[type="radio"]')]
          const elements = [...child.querySelectorAll('.element-to-update-index')]


          child.dataset.index = newIndex.toString()
          allSelects.forEach((select) => {
            select.name = this.getInputName(select, newIndex)
          })

          radios.forEach((radio, index) => {
            if (radio) {
              radio.name = this.getInputName(radio, newIndex)

              const radioLabel = radio.parentNode.querySelector('label')

              if (radioLabel) {
                radioLabel.setAttribute('for', this.getInputName(radioLabel, newIndex, 'nameId'))
                radio.id = this.getInputName(radio, newIndex, 'nameId')
              }

            }
          })

          elements.forEach((element) => {
            if (element) {
              element.id = this.getInputName(element, newIndex)
            }
          })

          numberInput.name = this.getInputName(numberInput, newIndex)
        })
      }
    }, 100)
  }

  getInputName(input, requiredIndex, idName) {

    const template = input.dataset[idName ? idName : this.inputNameTemplate]
    let result = template.toString()
    const splitedTemplate = template.toString().split('<')

    if (splitedTemplate.toString().includes('number>')) {
      result = result.replace('<number>', requiredIndex)
    }

    if (splitedTemplate.toString().includes('value>')) {
      const hasDataValue = input.dataset.value
      result = result.replace('<value>', hasDataValue ? hasDataValue.toString() : input.value.toString())
    }

    return result
  }
}