$(document).ready(function(){
    $(".tab_btn li").click(function(){
        var $index = $(this).index(); //클릭한 곳의 인덱스 번호를 저장
        $(".tab_btn li").removeClass("active"); //전체 클래스명 회수
        $(this).addClass("active"); //클릭한 곳에만 클래스명 부여(background: indigo)
        $(".tab_box").removeClass("active"); //모든 탭박스에서 클래스 제거(display: none;)
        $(".tab_box").eq($index).addClass("active"); //클릭한 버튼과 연동된 부분에만 클래스 부여(display: block)

        return false;
    });

});

