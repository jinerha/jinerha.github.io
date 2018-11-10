/*滚动事件开始*/
$(function(){
  var swiper = new Swiper('#banner .swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '#banner .swiper-pagination',
      clickable: true,
    }
  });

  var swiper2 = new Swiper('#dif .swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '#dif .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  /*滚动事件结束*/

  /* 滚动监听开始 */
  $('body').scrollspy({ target: '#bs-example-navbar-collapse-1' })
  /* 滚动监听结束 */

  /* 平滑滚动开始 */
  $('.navbar a').click(function(event){
    let target = $(this.hash)
    $('html,body').animate({
      scrollTop: target.offset().top
    },1000)
  })
  /* 平滑滚动结束 */

  /* 返回顶部开始 */
  $('#goTop').click(function(event){
    $('#no-js').animate({
      'scrollTop': 0
    },1000)
  })
  /* 返回顶部结束 */
})

