export default class ProductCard {
  constructor() {

  }

  init() {
    const cards = [...document.querySelectorAll('.productCard, .productDetails')]

    if (cards.length) {
      const initCards = cards.map(card => {
        this.initVariantsForSingleCard(card)
      })
    }

  }

  initVariantsForSingleCard(card) {
    const variants = [...card.querySelectorAll('.variantSelect__item')]
    const select = card.querySelector('select')
    if (variants.length) {

      variants.map((variant, index) => {
        variant.addEventListener('click', () => {
          variants.map(variantInside => variantInside.classList.remove('variantSelect__item--selected'))

          select.options[index].selected = true
          variant.classList.add('variantSelect__item--selected')
        })
      })
    }


  }
}

