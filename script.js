//スティッキーヘッダー

var topContent = $("#about"), //#about部分
change = $("#change"), //#change部分
topContent_top = topContent.offset().top; //#contentの位置を取得

var sticky = false;
$(function(){
  $(window).scroll(function() {
    if ($(window).scrollTop() > topContent_top) {　//scroll位置が#contentの上にある場合
      console.log("window:" + $(window).scrollTop());
      console.log("topContent:" + topContent_top);
           if ( sticky === false ){
                change.slideDown();　//#change部分がさがる。
                console.log("下がった");
                sticky = true;
           }
    } else {
           if ( sticky === true ){ //scroll位置が下にある場合
                change.slideUp();//#change部分が降りてくる。
                sticky = false;
           }
    }
  });
});
