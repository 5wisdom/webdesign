$(document).ready(function(){
	setInterval(function(){
		var $f_child = $("#h_slide .slide_frame ul li").first();
		$("#h_slide .slide_frame ul").stop().animate({"margin-left":"-1200px"},500,function(){
			$("#h_slide .slide_frame ul").append($f_child).css("margin-left","0");
		});
	}, 3000);


	setInterval(function(){
		var $f_child = $("#v_slide .slide_frame ul li").first();
		$("#v_slide .slide_frame ul").stop().animate({"margin-top":"-300px"},500,function(){
			$("#v_slide .slide_frame ul").append($f_child).css("margin-top","0");
		});
	},3000);

	setInterval(function(){
		var $cur_index = $("#fade_slide li.active").index();
		$("#fade_slide li").removeClass("active");
		if($cur_index == 2){
			$("#fade_slide li").eq(0).addClass("active");
		}else{
		$("#fade_slide li").eq($cur_index).next().addClass("active");
		}
	},3000);


});