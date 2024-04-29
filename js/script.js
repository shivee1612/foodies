// =====================================================
//                     change counter number
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(function () {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  // Call the counter function with appropriate parameters
  counter('count1', 0, 287, 300);
  counter('count2', 0, 878, 200);
  counter('count3', 0, 657, 300);
  counter('count4', 0, 144, 300);
});

// =====================================================
//          change navbar styling on scroll
// =====================================================

const nav = document.querySelector('.navigation-wrap');

window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add('scroll-on');
  } else {
    nav.classList.remove('scroll-on');
  }
};

// =====================================================
//                     nav hide
// =====================================================

let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse');

navbar.forEach(function (a) {
  a.addEventListener('click', function () {
    navCollapse.classList.remove('show');
  });
});
