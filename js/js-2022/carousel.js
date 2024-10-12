  (function ($) {

      $(function () {
          "use strict";
          $('.my_carousel').each(function () {
              var carousel = $(this);
              var list = carousel.find('.item-list');
              var item = carousel.find('.item-list .item');
              var view = Math.round((carousel.parent().outerWidth(true)) / (carousel.find('.item-list .item').outerWidth(true)));
              carousel.append('<div class="nav"></div><div class="prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="100%" height="100%" viewBox="0 0 448 384" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"> <g transform="matrix(1,0,0,1,0.000254861,-31.8416)"> <path d="M420.361,192.229C418.531,191.932 416.679,191.795 414.826,191.819L99.305,191.819L106.185,188.619C112.91,185.436 119.028,181.104 124.265,175.819L212.745,87.339C224.398,76.215 226.356,58.32 217.385,44.939C206.944,30.68 186.921,27.584 172.661,38.025C171.509,38.869 170.414,39.789 169.385,40.779L9.385,200.779C-3.119,213.269 -3.13,233.53 9.36,246.034L169.385,406.059C181.899,418.538 202.16,418.51 214.64,405.996C215.622,405.011 216.539,403.963 217.385,402.859C226.356,389.478 224.398,371.583 212.745,360.459L124.425,271.819C119.73,267.119 114.332,263.178 108.425,260.139L98.825,255.819L413.065,255.819C429.412,256.426 443.754,245.007 446.825,228.939C449.654,211.494 437.806,195.059 420.361,192.229Z" style="fill-rule:nonzero;"/> </g></svg></div><div class="next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="100%" height="100%" viewBox="0 0 448 384" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"> <g transform="matrix(1,0,0,1,0.000254861,-31.8416)"> <g transform="matrix(-1,0,0,-1,447.242,447.242)"> <path d="M420.361,192.229C418.531,191.932 416.679,191.795 414.826,191.819L99.305,191.819L106.185,188.619C112.91,185.436 119.028,181.104 124.265,175.819L212.745,87.339C224.398,76.215 226.356,58.32 217.385,44.939C206.944,30.68 186.921,27.584 172.661,38.025C171.509,38.869 170.414,39.789 169.385,40.779L9.385,200.779C-3.119,213.269 -3.13,233.53 9.36,246.034L169.385,406.059C181.899,418.538 202.16,418.51 214.64,405.996C215.622,405.011 216.539,403.963 217.385,402.859C226.356,389.478 224.398,371.583 212.745,360.459L124.425,271.819C119.73,267.119 114.332,263.178 108.425,260.139L98.825,255.819L413.065,255.819C429.412,256.426 443.754,245.007 446.825,228.939C449.654,211.494 437.806,195.059 420.361,192.229Z" style="fill-rule:nonzero;"/> </g> </g></svg></div>');
             
              console.log(view);
              if (view < 2) {
                  carousel.addClass("single");
              }
          });
      });

      $(document).ready(myfunction);
      $(window).on('resize', myfunction);

 

      function myfunction() {
          $('.my_carousel').each(function () {
              var carousel = $(this);
              var speed = carousel.attr('data-speed');
              var autorun = '';
              var list = carousel.find('.item-list');
              var item = carousel.find('.item-list .item');
              var db = item.not(".clone").length;
              var view = Math.round((carousel.parent().outerWidth(true)) / (carousel.find('.item-list .item').outerWidth(true)));
              var page = Math.ceil(db / view);
              var clone = page * view - db;
              var step = 100 / view;
              var active = 0;
              var nav = 0;
              var full = page * view;
              var max = full - view;

              if (1 < view) {
                  carousel.find('.clone').remove();
                  item.slice(0, clone).clone().appendTo(list).addClass('clone');
              }

              carousel.find('.nav').contents().remove();

              if (1 < page) {
                  for (var i = 0; i < page; i++) {
                      carousel.find('.nav').append('<div></div>');
                  }
              }

              carousel.find('.nav div').first().addClass("active");

              // active navigation 
              var currentpage = 0;
              var pagenav = [];
              for (var i = 0; i < page; i++) {
                  currentpage += 1;
                  for (var j = 0; j < view; j++) {
                      pagenav.push(currentpage);
                  }
              }

              function slide() {
                  // step navigation
                  carousel.find('.nav div').removeClass('active');
                  carousel.find('.nav div').eq(pagenav[active] - 1).addClass("active");

                  if ((0 < active) && (active < max + 1)) {
                      list.addClass(step);
                      list.css({
                          'left': -step * active + '%'
                      });
                      item.removeClass("view");
                      var i;
                      for (i = active; i < active + view; i++) {
                          item.eq(i).addClass("view");
                      }
                  } else {
                      active = 0;
                      list.css({
                          'left': 0 + '%'
                      });
                      carousel.find('.nav div').removeClass('active');
                      carousel.find('.nav div').first().addClass("active");
                  }
              }

              // Autorun
              if (speed) {
                  var run = setInterval(function () {
                      active++;
                      slide();
                  }, speed);
              }

              // Navigation
              function next() {
                  active++;
                  slide();
                  if (speed) {
                      clearInterval(run);
                      run = setInterval(function () {
                          active++;
                          slide();
                      }, speed);
                  }
              }

              function prev() {
                  active--;
                  slide();
                  if (speed) {
                      clearInterval(run);
                      run = setInterval(function () {
                          active++;
                          slide();
                      }, speed);
                  }
              }

              carousel.find('.next').click(function () {
                  next();
              });

              carousel.find('.prev').click(function () {
                  prev();
              });

              carousel.find('.nav div').click(function () {
                  var index = $(this).index();
                  active = view * index;
                  slide();
                  carousel.find('.nav div').removeClass('active');
                  $(this).addClass('active');
                  if (speed) {
                      clearInterval(run);
                      run = setInterval(function () {
                          active++;
                          slide();
                      }, speed);
                  }
              });

              // touch
              var isTouch = ('ontouchstart' in window);
              var direction = 0;
              if (isTouch) {
                  carousel.on('touchstart', function (e) {
                      var touch = e.originalEvent.changedTouches[0];
                      var startX = touch.pageX;
                      var startY = touch.pageY;
                      $(document).on('touchmove', function (e) {
                          touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                          var endX = touch.pageX - startX;
                          var endY = touch.pageY - startY;
                          if (direction == 0) {
                              if (Math.abs(endY) < Math.abs(endX)) {
                                  if (endX > 30) {
                                      $(this).off('touchmove');
                                      prev();
                                  } else if (endX < -30) {
                                      $(this).off('touchmove');
                                      next();
                                  }
                                  return false;
                              }
                          } else {
                              if (Math.abs(endY) > Math.abs(endX)) {
                                  if (endY > 30) {
                                      $(this).off('touchmove');
                                      prev();
                                  } else if (endY < -30) {
                                      $(this).off('touchmove');
                                      next();
                                  }
                                  return false;
                              }
                          }
                      });
                  });
                  $(document).on('touchend', function () {
                      $(this).off('touchmove');
                  });
              }
          });
      }
  })(jQuery);