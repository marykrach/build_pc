const navbar = document.querySelector('.header__nav')
const links = navbar.querySelectorAll('a')

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault() //предотвращает стандартное поведение браузера

    const section = document.querySelector(link.getAttribute('href'));

    if (section) {
      // section.scrollIntoView({
      //   block: "start",
      //   behavior: "smooth"
      // })
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  })
})

// seamless - scroll - polyfill - https://www.npmjs.com/package/... - библиотека, которая реализует кроссбраузерный плавный скролл