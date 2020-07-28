export default class InputCounter {
  constructor() {
    this.selector = '.inputCounter'
    this.bottlesInBox = 6
  }

  init () {
    const inputs = [...document.querySelectorAll(this.selector)]

    if (inputs.length) {
      inputs.forEach(input => {
        this.controlInput(input)
      })
    }
  }

  controlInput(input) {
    const plus = input.querySelector('.plus')
    const minus = input.querySelector('.minus')
    const number = input.querySelector('input')
    const type = input.name // bottle, box or pet

    if (plus && minus && number) {
      plus.addEventListener('click', () => {
        number.value++
        this.syncInputs(input, number.value)
      })

      minus.addEventListener('click', () => {
        if (number.value > 0) {
          number.value--
          this.syncInputs(input, number.value)
        }
      })

      number.addEventListener('change', () => {
        this.syncInputs(input, number.value)
      })

    }
  }

  syncInputs(input, numberValue) {
    if (input) {
      const otherInputs = [...input.closest('form').querySelectorAll(`${this.selector} input`)]

      if (otherInputs.length) {
       otherInputs.forEach(foreignInput => {
         if (Number(foreignInput.value) !== Number(numberValue)) {
           foreignInput.value = numberValue
         }
       })
      }
    }
  }


}