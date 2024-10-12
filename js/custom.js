document.getElementById('hamburger').addEventListener('click', function () {
  document.querySelector('#main-menu ul:first-child').classList.toggle('open');
  this.classList.toggle('open');
});

document.querySelectorAll('#main-menu ul > li.menu-item-has-children').forEach(function (li) {
  let span = document.createElement('span');
  span.className = 'opener';
  span.innerHTML = '<svg width="100%" height="100%" viewBox="0 0 561 321"> <g transform="matrix(1,0,0,1,-200,-119.994)"> <path d="M480,344.181L268.869,131.889C253.113,116.03 227.569,116.03 211.815,131.889C196.061,147.746 196.061,173.459 211.815,189.32L449.447,428.257C457.842,436.708 469.009,440.511 480,439.955C490.993,440.511 502.159,436.708 510.555,428.257L748.186,189.32C763.942,173.46 763.942,147.749 748.186,131.889C732.43,116.029 706.887,116.03 691.135,131.889L480,344.181Z" style="fill-rule:nonzero;"/> </g></svg>';
  li.appendChild(span);
});

document.querySelectorAll('.opener').forEach(function (opener) {
  opener.addEventListener('click', function () {
      this.previousElementSibling.classList.toggle('open');
      this.classList.toggle('open');
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
      document.getElementById('gotop').style.display = 'flex';
  } else {
      document.getElementById('gotop').style.display = 'none';
  }
});

document.getElementById('gotop').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// (function ($) {

//   $('#hamburger').click(function () {
//       $('#main-menu ul:first').toggleClass('open');
//       $(this).toggleClass("open");
//   });
//   $('#main-menu ul > li.menu-item-has-children').append('<span class="opener"><svg width="100%" height="100%"  viewBox="0 0 561 321"> <g transform="matrix(1,0,0,1,-200,-119.994)"> <path d="M480,344.181L268.869,131.889C253.113,116.03 227.569,116.03 211.815,131.889C196.061,147.746 196.061,173.459 211.815,189.32L449.447,428.257C457.842,436.708 469.009,440.511 480,439.955C490.993,440.511 502.159,436.708 510.555,428.257L748.186,189.32C763.942,173.46 763.942,147.749 748.186,131.889C732.43,116.029 706.887,116.03 691.135,131.889L480,344.181Z" style="fill-rule:nonzero;"/> </g></svg></span>');
//   $('.opener').click(function () {
//       $(this).siblings('ul').toggleClass("open");
//       $(this).toggleClass("open");
//   });
  
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 200) {
//       $('#gotop').css('display', 'flex');
//     } else {
//       $('#gotop').css('display', 'none');
//     }
//   });
  
//   $('#gotop').click(function() {
//     $('html, body').animate({ scrollTop: 0 }, 'smooth');
//   });

// })(jQuery);