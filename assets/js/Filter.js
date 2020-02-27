export default class Filter {
  constructor() {
    this.filterElement = document.querySelector('form#filter')
    this.control = document.querySelector('form#filter .filterControl')
    this.controlChild = document.querySelector('form#filter .filterControlChild')
    this.groupAll = 'all'
  }

  init() {
    if (this.filterElement && this.control && this.controlChild) {
      const controlBtns = [...this.control.querySelectorAll('.filter__button')]
      if (controlBtns) {
        controlBtns.forEach((btn) => {
          btn.addEventListener('click', () => {
            controlBtns.forEach((controlBtn) => controlBtn.classList.remove('filter__button--active'))
            btn.classList.add('filter__button--active')

            const btnGroup = btn.dataset.group

            if (btnGroup === this.groupAll) {
              const allBtn = [...this.controlChild.querySelectorAll(`.filter__button`)]
              if (allBtn) allBtn.forEach((ibtn) => ibtn.classList.add('filter__button--show'))
            } else {
              const btnToShow = [...this.controlChild.querySelectorAll(`.filter__button[data-group="${btnGroup}"]`)]
              const btnToHide = [...this.controlChild.querySelectorAll(`.filter__button:not([data-group="${btnGroup}"])`)]

              if (btnToShow) btnToShow.forEach((ibtn) => ibtn.classList.add('filter__button--show'))
              if (btnToHide) btnToHide.forEach((ibtn) => ibtn.classList.remove('filter__button--show'))
            }
          })
        })
      }
    }
  }
}