import 'jquery'
import 'popper.js'
import 'bootstrap'
import objectFitImages from 'object-fit-images'
import Slider from './Slider'
import Filter from './Filter'
import MobileList from './MobileList'
import InputCounter from './InputCounter'
import Cart from './Cart'
import Modal from './Modal'
import Forms from './Forms'
import Photoswipe from './Photoswipe'
import Buyerpannel from './Buyerpannel'
import BackLink from './BackLink'
import Branch from "./Branch";
import AOS from 'aos';
import Scroller from './Scroller'
import ProductCard from './ProductCard'
import 'aos/dist/aos.css';
import ProductPicker from "./ProductPicker"; // You can also use <link> for styles

document.addEventListener('DOMContentLoaded', () => {
  const sliders = new Slider()
  sliders.init()

  const productPicker = new ProductPicker()
  productPicker.init()

  const filter = new Filter();
  filter.init();

  const productCard = new ProductCard();
  productCard.init();

  objectFitImages() // Polyfill: Object-fit (css property)

  // Responsive mobile list
  window.mobileList = new MobileList()
  window.mobileList.init()

  const inputCounter = new InputCounter()
  inputCounter.init()

  const cart = new Cart()
  cart.init()

  const modal = new Modal();
  modal.init()

  const forms = new Forms();
  forms.init()

  const photoswipe = new Photoswipe()
  photoswipe.init()

  const buyerpannel = new Buyerpannel()
  buyerpannel.init()

  const backLink = new BackLink()
  backLink.init();

  const branch = new Branch()
  branch.init()

  const scroller = new Scroller()
  scroller.init()

  AOS.init();

  /** Animation */
  let elements = null;
  let windowHeight = null;

  window.addEventListener('resize', initAnimation());
  window.addEventListener('scroll', function () {
    checkPositionAnimation()
  })

  function initAnimation() {
    elements = document.querySelectorAll('.hidden-animation');
    windowHeight = window.innerHeight;
  }

  function checkPositionAnimation() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden-animation');
      }
    }
  }
});