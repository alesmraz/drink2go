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
    const checkbox = newRow.querySelector('input[type="checkbox"]')
    const checkboxLabel = checkbox.parentNode.querySelector('label')

    newRow.dataset.index = newIndex
    allSelects.forEach((select) => {
      select.name = this.getInputName(select, newIndex)
      select.selectedIndex = 0
    })

    checkbox.name = this.getInputName(checkbox, newIndex)
    checkbox.checked = false
    checkbox.id = this.getInputName(checkboxLabel, newIndex, 'nameId')
    checkboxLabel.setAttribute('for', this.getInputName(checkboxLabel, newIndex, 'nameId'))

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
          const checkbox = child.querySelector('input[type="checkbox"]')
          const checkboxLabel = checkbox.parentNode.querySelector('label')

          child.dataset.index = newIndex.toString()
          allSelects.forEach((select) => {
            select.name = this.getInputName(select, newIndex)
            select.selectedIndex = 0
          })

          checkbox.name = this.getInputName(checkbox, newIndex)
          checkbox.checked = false
          checkbox.id = this.getInputName(checkboxLabel, newIndex, 'nameId')
          checkboxLabel.setAttribute('for', this.getInputName(checkboxLabel, newIndex, 'nameId'))
        })
      }
    }, 100)


  }

  getInputName(input, requiredIndex, idName) {
    const template = input.dataset[idName ? idName : this.inputNameTemplate]
    return template.replace('<number>', requiredIndex)
  }
}