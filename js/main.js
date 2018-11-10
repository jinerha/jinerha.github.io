/*滚动事件开始*/
$(window).scroll(function() {
	headerInit()
})
function headerInit(){
	if($(this).scrollTop()>0){
		$('body').addClass('fiexed-header-on');
	}else{
		$('body').removeClass('fiexed-header-on');
	}
}
headerInit();
var swiper = new Swiper('#banner .swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

var swiper = new Swiper('#dif .swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
/*滚动事件结束*/

/* 返回顶部开始 */
$(function(){
  $('#goTop').click(function(){
    $('html').animate({
      'scrollTop': 0
    },1000)
  })
})
/* 返回顶部结束 */

/* 滚动监听开始 */
$('body').scrollspy({ target: '#mynavbar' })
/* 滚动监听结束 */

/* 平滑滚动开始 */
$('.navbar a').click(function(event){
  let target = $(this.hash)
  $('html').animate({
    scrollTop: target.offset().top
  },1000)
})

/* 平滑滚动结束 */
