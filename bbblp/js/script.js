
/*=================================================
		inview.js
=================================================*/

	/*-----------------------------------
	ハンバーガ―メニュー
-----------------------------------*/
$(function(){
	// ハンバーガーメニューをクリックした時
	$('.hamburger').on('click', function() {
			// ハンバーガーメニューの共通処理を呼び出す
			hamburger();
	});
	// メニューのリンクをクリックした時
	$('#gnav .sp_menu a').on('click', function() {
			// ハンバーガーメニューの共通処理を呼び出す
			hamburger();
	});
});

function hamburger() {
	// toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
	// 存在しない場合を追加する処理を自動で行ってくれる
	$('.hamburger').toggleClass('active');

	if ($('.hamburger').hasClass('active')) {
			// hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
			$('#gnav').addClass('active');
	} else {
			// hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
			$('#gnav').removeClass('active');
	}
}

	/*-----------------------------------
	Inview（画面に表示されたタイミングで処理を実行）
-----------------------------------*/
	// BBBが選ばれる理由（スライド左）
	$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});
// BBBが選ばれる理由（スライド右）
$(function(){
	$(".inview").on("inview", function (event, isInView) {
			if (isInView) {
					$(this).stop().addClass("is-show");
			}
			
	});
});

	// 受講生の声（ふきだし）
	$('.inview-balloon').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
				// 要素が表示されたらballoonクラスを追加
				$(this).stop().addClass('balloon');
		}
});

	

