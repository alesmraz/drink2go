import $ from 'jquery'

export default class Scroller {
  constructor() {}

    init() {
    const elements = [...document.querySelectorAll('.discover--center')]

    if (elements.length) {
      elements.forEach((element) => {
        element.addEventListener('click', (ev) => {
          ev.preventDefault()
          const rect = element.getBoundingClientRect();
            $('html, body').animate({
              scrollTop: rect.top + window.scrollY
            }, 200);
        })
      })
    }
  }


}