$(document).ready(function(){
    
   $("nav").hover(function(){
        $(".sub_bg").slideDown();
   },function(){
        $(".sub_bg").slideUp();
   });

   $(".sub_bg .submenu li").hover(function(){
       var $index = $(this).closest(".submenu").index();
        $(".mainmenu li").removeClass("active");
        $(".mainmenu li").eq($index).addClass("active");
        $(".sub_bg .submenu li").removeClass("active");
        $(this).addClass("active");
   },function(){
         $(".mainmenu li").removeClass("active");
        $(".sub_bg .submenu li").removeClass("active");
   });
 


    setInterval(function(){
        var $index = $(".slides li.active").index();
        $(".slides li").removeClass("active")
        if($index == 2){
            $(".slides li").eq(0).addClass("active")
        }else{
            $(".slides li").eq($index).next().addClass("active");
        }    
    },3000);

    $(".tab_btn li").click(function(){
        var $index = $(this).index();
        $(".tab_btn li").removeClass("active");
        $(this).addClass("active");
        $(".tab_cont > div").removeClass("active");
        $(".tab_cont > div").eq($index).addClass("active");

        return false;
    });

    $(".notice li:eq(0)").click(function(){
        $(".dark").addClass("active");
        $(".popup").addClass("active");
        return false;
    });

    $("button").click(function(){
        $(".dark").removeClass("active");
        $(".popup").removeClass("active");
        return false;
    });

    $("#verMenu .menu nav > ul > li").hover(function(){
        $(this).find("ul").stop().slideDown(); 
    },function(){
        $(this).find("ul").stop().hide(); 
    });
    


});