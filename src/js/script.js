//******************  Mobile Navigation *****************************/

const btnNavEL =document.querySelector(".btn-mobile-nav");
const headerEL =document.querySelector(".header");
const itemEl = document.querySelector('.food-item');


btnNavEL.addEventListener('click',function(){
    headerEL.classList.toggle('nav-open');
})

const allLinks =document.querySelectorAll(".main-nav-link")

    allLinks.forEach(function(linkEl) {
        linkEl.addEventListener('click', function(){
            headerEL.classList.toggle('nav-open')
        })
    })


//******************  Sticky Navigation *****************************/

const obs = new IntersectionObserver(
    function(entries) {
        const ent = entries[0];

        if (ent.isIntersecting === false) {
            document.body.classList.add('sticky');
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove('sticky');
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-80px"
    }
);    

const sectionHeroEl = document.querySelector('.section-hero');

obs.observe(sectionHeroEl);

const slider = function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 4,
        perMove: 1,
        autoplay: true,
        mediaQuery: 'max',
        breakpoints: {
          500: {
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
          1028: {
            perPage: 3,
          },
          1280: {
            perPage: 4,
          },
        }
      } );
      
      splide.mount();
}

slider();
