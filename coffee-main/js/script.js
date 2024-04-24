
/*---------------------------------
戻るボタン
----------------------------------*/
$(function(){
  var topBtn=$('#pageTop');
  topBtn.hide();
  //↑ハイド消える
  //◇ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    } 
  });
  // スムーススクロール
  topBtn.click(function(){
    $('body,html').animate({scrollTop: 0},1000);
    return false;
  });
  
});

