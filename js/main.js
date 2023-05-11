
// windowsサイズを指定
$(document).ready(function() {
	function updateDimensions() {
		// Windowサイズに関する変数を定義
		let winH = $(window).height();
		let winW = $(window).width();
		let winH_box2_3 = winH - 150;

		$('.box').outerHeight(winH);
		$('.box').outerWidth(winW);
		$('.service_wrap_box2').outerHeight(winH_box2_3);
		$('.service_wrap_box3').outerHeight(winH_box2_3);
		$('.footer_wrap').outerWidth(winW);
		$('.footer_wrap').outerHeight(winH_box2_3);
		$('form').css("padding-left",winW/2);
		$('.menuwrap').outerHeight(winH);

		console.log(winW, "boxのWindowsの幅");
	}
	// 初回ページロード時に実行
	updateDimensions();
	// ウィンドウサイズが変更されたときに実行
	$(window).on('resize', function() {
		updateDimensions();
		console.log($(window).height(), "Windowsの高さ-サイズチェンジ後");
		console.log($(window).width(), "Windowsの幅-サイズチェンジ後");
	});
});

// var t_width = $('.table-access').offset();
// var t_height = $('.table-access').offset();
// console.log(t_width,"tableの幅");
// console.log(t_height,"tableの高さ");




// 2ページ目以降でハンバーガーメニューを表示させる
$(window).on("scroll", function() {
	var scrollPos = $(window).scrollTop();
	var box1Height = $("#box1").height();
	box1Height -= 10;

	if (scrollPos > box1Height) {
		$(".openbtn").fadeIn();
	} else {
		$(".openbtn").fadeOut();
	}
});


// ハンバーガーメニュー
$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $(".menuwrap").toggleClass('menu_remove');

});


// スクロールすると1画面ずつでてくる
$.scrollify({
	section : ".box",
	//スクロールバー表示設定
	scrollbars:"True",
	easing: "swing",
	scrollSpeed: 300,
});


// Service imgへのhover効果
// $(".service_img_content").hover(
// 	function(){
// 		// sibilingsは兄弟要素（同じ階層）を対象にできる
// 		$(this).siblings(".remove_text").css("visibility", "visible");
// 	},
// 	function(){
// 		$(this).siblings(".remove_text").css("visibility", "hidden");
// 	}
// );

// Service imgをクリックしたらリンク先に飛ぶ
$("#service_img1").on("click", function(){
	window.location.href = "JQuery_syntax.html";
});
$("#service_img2").on("click", function(){
	window.location.href =  "example_error.html";
});



// 初回のみLoading表示、以降ページを閉じるまでは表示させない
$(window).on('load',function(){ 
	 // URLが http://example.com/ の場合に実行する内容 
	// 3サイトに関する正規表現を記載
	if(document.URL.match(/JQuery_syntax|example_error|linux_command/)){

		var webStorage = function () {
		if (sessionStorage.getItem('access')) {
			// 2回目以降アクセス時の処理
			$(".splash").addClass('is-active');
			$(".splashbg").addClass('is-active');
			$('body').addClass('appear');
			console.log("ここまで動いてる１")
			// $("body").css("background", "blue");

			var t = $(".splash").hasClass('is-active');
			var u = $(".splashbg").hasClass('is-active');
			var v = $("#container").hasClass('is-active');
			console.log( t, "[2回目以降]splashのクラスにis activeがあるか" );
			console.log( u, "[2回目以降].splashbgのクラスにis activeがあるか" );
			console.log( v, "[2回目以降]#containerにis activeがあるか" );

		} else {
			// 初回アクセス時の処理
			 // sessionStorageにデータを保存
			sessionStorage.setItem('access', 'true');
			let storage_1 = sessionStorage.getItem('access');
			console.log(storage_1,"Sessionstorageへの格納");

			$(".splash").delay(800).fadeOut('slow',function(){
				$('body').addClass('appear');
				let winH = $(window).height();
				console.log("ここまで動いてる２")
				$(".splashbg").css({
			  		//ボーダーの太さにブラウザの高さを代入	
					"border-width":winH,
					"animation-name":"backBoxAnime"
				}); 
				console.log("ここまで動いてる３")
			});

			setTimeout(function () {
				$(".splash-logo").fadeOut('slow');
				// ローディングを数秒後に非表示にする
				$(".splash").addClass('is-active');
				$(".splashbg").addClass('is-active');
				$(".splash-logo").removeClass('is-active');

				var p = $(".splash").hasClass('is-active');
				var s = $(".splashbg").hasClass('is-active');
				var q = $(".splash-logo").hasClass('is-active');
				console.log( p, ".splashのクラスにis activeがあるか" );
				console.log( s, ".splashbgのクラスにis activeがあるか" );
				console.log( q, ".splash-logoのクラスにis activeがあるか" );
			}, 600); // ローディングを表示する時間
		}
	}
	webStorage();
	console.log("ここまで動いてる５")
	}  
});



// $(window).on('load',function(){
// 	//ローディングエリア（splashエリア）を0.8秒でフェードアウトする
//     $("#splash").delay(800).fadeOut('slow',function(){
// 		$('body').addClass('appear');

// 		let winH = $(window).height();
// 		$(".splashbg").css({
// 			//ボーダーの太さにブラウザの高さを代入	
// 			"border-width":winH,
// 			"animation-name":"backBoxAnime"
// 		}); 
//     });
// 	//ロゴを0.6秒でフェードアウトする記述
//     $("#splash-logo").delay(600).fadeOut('slow');
// });



// breath-start
    $(".breath-start").click(function(){
        $("#start-modal").fadeIn();
		$(this).fadeOut();
    });
    $(".close-modal").click(function(){
        $("#start-modal").fadeOut();
    });
    
// START
    $(".start-btn").click(function(){
        window.location = "JQuery_syntax.html";
    });

// ×をクリックしたら、Startボタンを表示する
$(".fa").click(function(){
	$(".breath-start").fadeIn();
});

// ×をクリックしたら、Startボタンを表示する
$(".fa-2").click(function(){
	$(".example-modal-wrapper").fadeOut();
});


// もし、chechボックスがクリックされていたら、
// 該当のval()を、[表示]配列ボックスに追加
// chechボックスがはずされたら、該当のval()を、
// [表示]配列ボックスから削除

// checkboxでチェックしたvalを入れる配列を用意
let display_val =[]; 

$('input[type=checkbox]').change(function() {
    // もし、checkboxがチェックされたら
    if($(this).prop('checked')){
		console.log($(this).val(), "Checkつけたとき");
        // 配列の中にvalの値を入れる
        display_val.push($(this).val());
        console.log(display_val);
	}else{
        // checkboxを外した時
		console.log($(this).val(), "Checkはずしたとき");
        // 配列内に該当するがあれば（0以上）なら配列から削除
        var idx = $.inArray($(this).val(), display_val);
        if(idx >= 0){
            display_val.splice(idx, 1);
        }
        console.log(display_val);
	} 
});

// 構文のcheckboxで、一つでもチェックが付いたらボタンを有効化
$(".btn_mark").prop("disabled", true);
// チェックボックスの状態が変わったら（クリックされたら）
$("input[type='checkbox']").on('change', function () {
    // チェックされているチェックボックスの数
    if($(".chk:checked").length > 0) {
      // ボタン有効
        $(".btn_mark").prop("disabled", false);
        $(".btn_mark").addClass('btn-checked');  
        $(".btn_mark").removeClass("example-btn");
    }else{
      // ボタン無効
        $(".btn_mark").prop("disabled", true);
        $(".btn_mark").removeClass('btn-checked');  
        $(".btn_mark").addClass("example-btn");
    }
});


// 配列に格納されているのと同じclassを持っていたら表示させる
// example-modalを消す

$(".example-btn").click(function(){
    // display_valとおなじclassを持っていたら、
    $.each(display_val, function(index, value) {
        // activeをつける
        $('.' + value).addClass('active');
        console.log("activeつけたよ");
        // removeを消す
        $('.' + value).removeClass('remove');
        console.log("remove消したよ");
    });

    // デフォルトで表示させるもの
    // 説明文
    $(".example_explanation").removeClass('remove');
    console.log("remove消したよ 説明文");
    // Continueボタン
    $(".continue-btn").removeClass('remove');
    console.log("remove消したよ 続きボタン");

    // example-modalを消す
    $(".example-modal-wrapper").fadeOut(400);


	// 配列の中身が3以上だったらゆっくり現れる、
	// それ以下だったらデフォルト表示させる
	let example_nu = display_val.length;
	console.log(example_nu, "配列の個数");

	if(example_nu >=3){
		$(".example_wrap").scroll(function (){
			$('.fadein').each(function(){
				var position = $(this).offset().top;         
				var scroll = $(".example_wrap").scrollTop();
				var windowHeight = $(".example_wrap").height();
				if (scroll > position - windowHeight + 200){
				$(this).addClass('fi_active');
					console.log(example_nu, "配列の個数");
				}
			});
		});
	}else{
		$.each(display_val, function(index, value) {
			// fadeinを消す＝デフォルトで表示させるようにする
			$('.' + value).removeClass('fadein');
			console.log("fadein消したよ");
			console.log(example_nu, "配列の個数");
		});
	}
	$(".example_explanation").addClass('active_under');
});



// エラー例
$(".error-example").click(function(){
	var $answer = $(this).find(".error-answer");
	if($answer.hasClass("open")){
		$answer.removeClass("open");
		$answer.slideUp();
		$(this).find("span").text("+");
	}else{
		$answer.addClass("open");
		$answer.slideDown();
		$(this).find("span").text("－");   
	};
});


// よくあるエラーページの検索
$(document).ready(function () {
	function updateHighlights() {
		const keyword = $("#search").val().toLowerCase();

		if (!keyword) {
			$(".error-question, .error-answer").removeClass("highlight");
			return;
		}

		$(".error-example").each(function () {
			const questionElement = $(this).find(".error-question");
			const questionText = questionElement.text().toLowerCase();
			const answerElement = $(this).find(".error-answer");
			const answerText = answerElement.text().toLowerCase();

			if (questionText.includes(keyword)) {
				questionElement.addClass("highlight");
			} else {
				questionElement.removeClass("highlight");
			}

			if (answerText.includes(keyword)) {
				questionElement.addClass("highlight");
			} else {
				questionElement.removeClass("highlight");
			}
		});
	}
});

// Linuxの検索
$(document).ready(function () {
	function updateHighlights() {
		const keyword = $("#l-search").val().toLowerCase();

		if (!keyword) {
			$(".command, .mean").removeClass("highlight");
			return;
		}
		$(".command, .mean, example").each(function () {
			if ($(this).text().includes(keyword)) {
				$(this).addClass("highlight");
			} else {
				$(this).removeClass("highlight");
			}
		});
	}


	$("form").on("submit", function (event) {
		// リロードを回避してからupdateHighlightsを動作させる
		event.preventDefault();
		updateHighlights();
	});
	$("#l-search").on("input", function () {
		updateHighlights();
	});
});