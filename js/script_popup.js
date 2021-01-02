$(document).ready(function(){
	$(".notice li").eq(0).click(function(){
		$(".dark").addClass("active");
		$(".popup").addClass("active");

		return false;
	});
	//a태그는 무조건 return flase 써주기
	$(".popup button").click(function(){
		$(".dark").removeClass("active");
		$(".popup").removeClass("active");
	});

});

//윈도우 이벤트는 document 빠져나와서 한다
function pop_open(){
	window.open("popup.html","윈도우팝업","width=500, height=300, top=40, left=40");

}







