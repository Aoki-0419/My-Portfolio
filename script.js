// メイン画像をフェードイン
const fadeIn = function(){

    const target = document.getElementsByClassName('fade-in');
    const position = Math.floor(window.innerHeight * .75);

    for (let i = 0; i < target.length; i++) {

        let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
        let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom);

        if (offsetTop < position) {
            target[i].classList.add('scroll-in');
        }
        
        if(offsetBottom < 0){
            target[i].classList.remove('scroll-in');
        }
    }
}
window.addEventListener('scroll', fadeIn, false);

// ナビゲーションメニュー半透明
//PC版
$(function () {
    $('.header-name a').on('mouseover', function () {
      $(this).animate({
        opacity: 0.5,
      }, 100);
    });

$('.header-name a').on('mouseout', function () {
        $(this).animate({
          opacity: 1.0,
        }, 100);
      });
  });

//スマホ版
$(function () {
  $('#nav-sp a').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });

$('#nav-sp a').on('mouseout', function () {
      $(this).animate({
        opacity: 1.0,
      }, 100);
    });
});

//ナビ閉じる画像
$(function () {
  $('#nav-sp img').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });

$('#nav-sp img').on('mouseout', function () {
      $(this).animate({
        opacity: 1.0,
      }, 100);
    });
});