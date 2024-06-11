
const header_title_span = document.querySelector(".header_title_span");
const pancake_content = document.getElementById("pancake-content")


header_title_span.addEventListener("click", ()=>{
    pancake_content.scrollIntoView({ behavior: "smooth" });

})











const pancakeContainer = document.querySelector('.pancake_content_div')
const leftSlide = document.getElementById('left-slide')
const rightSlide = document.getElementById('right-slide')
const cakeNames = document.querySelectorAll(".left-slide .cake_name");
const goUp = document.querySelector('.goUp')
const goDown = document.querySelector('.goDown')
const slidesLength = rightSlide.querySelectorAll('div').length
const cakesNameLength = cakeNames.length
const sliderHeight = pancakeContainer.clientHeight

console.log(pancakeContainer)

let activeSlideIndex = 0

console.log(activeSlideIndex)

console.log(slidesLength)
console.log(cakesNameLength)
console.log(sliderHeight)
console.log(cakeNames);


/*cakeNames.style.top = `-${(slidesLength -1) * 100}vh`*/

goUp.addEventListener('click', ()=> changeSlide('up'))
goDown.addEventListener('click', ()=> changeSlide('down'))

const changeSlide = (direction) =>{
  console.log(direction);
  const sliderHeight = pancakeContainer.clientHeight;

  if (direction === "up") {
    activeSlideIndex++;
    console.log(activeSlideIndex);
    if (activeSlideIndex > cakesNameLength- 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = cakesNameLength - 1;
    }
  }

  leftSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`
  rightSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
}




/* HEADER  */


// PANCAKE CHANGE



const languages = ['French', 'Italian', 'Spanish', 'German', 'Russian', 'Chinese', 'Vietnamese', 'Dutch', 'Danish', 'Swedish'];
let index = 0;

function changeLanguage() {
    const spanElement = document.querySelector('.header_title_span');

    fadeOut(spanElement, () => {
        spanElement.textContent = getTranslation(languages[index]);
        fadeIn(spanElement);
    });

    index = (index + 1) % languages.length;
}

function getTranslation(language) {
    switch(language) {
        case 'French':
            return 'crêpe';
        case 'Italian':
            return 'frittella';
        case 'Spanish':
            return 'panqueque';
        case 'German':
            return 'Pfannkuchen';
        case 'Russian':
            return 'блин';
        case 'Chinese':
            return '煎饼';
        case 'Vietnamese':
            return 'bánh xèo';
        case 'Dutch':
            return 'pannenkoek';
        case 'Danish':
            return 'pandekage';
        case 'Swedish':
            return 'pannkaka';
        default:
            return '';
    }
}

function fadeOut(element, callback) {
    let opacity = 1;
    const timer = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(timer);
            callback();
        }

        element.style.opacity = opacity;
        opacity -= 0.1;
    }, 50);
}

function fadeIn(element) {
    let opacity = 0;
    const timer = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(timer);
        }

        element.style.opacity = opacity;
        opacity += 0.1;
    }, 50);
}

setInterval(changeLanguage, 3000);
