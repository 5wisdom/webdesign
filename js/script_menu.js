$(document).ready(function(){
    /////메뉴선택자가 점점 올라간다. 선택자 잡을떄 주의!
    //개별 서브메뉴
    $("#menu_01 nav > ul > li").hover(function(){
      $(this).find("ul").stop().slideDown();  
    }, function(){
        $(this).find("ul").stop().slideUp();
    }); //find대신 siblings쓰면 마우스가 갔을때 하위메뉴가 안잡히므로 쓰면안된다! find쓰자

    
    //전체 서브메뉴
    $("#menu_02 nav > ul").hover(function(){
        $(this).find("ul").stop().slideDown();
    },function(){
        $(this).find("ul").stop().slideUp();
    });


    //2단 분리메뉴
    $("#menu_03 nav").hover(function(){
        $(this).find(".sub_bg").stop().slideDown();
    },function(){
        $(this).find(".sub_bg").stop().slideUp();
    });
    
    $("#menu_03 nav .mainmenu li").hover(function(){
        $(this).addClass("active");
    },function(){
        $(this).removeClass("active");
    });

    $("#menu_03 nav .sub_bg li").hover(function(){
        var $index = $(this).closest(".submenu").index();
        console.log($index);
        $("#menu_03 nav .mainmenu li").removeClass("active");
        $("#menu_03 nav .mainmenu li").eq($index).addClass("active");
        $("#menu_03 nav .sub_bg li").removeClass("active");
        $(this).addClass("active");
    },function(){
        $("#menu_03 nav .mainmenu li").removeClass("active");
        $("#menu_03 nav .sub_bg li").removeClass("active");
    });


    //세로방향
    $("#menu_04 nav > ul > li").hover(function(){
        $(this).find("ul").stop().slideDown();
    },function(){
        $(this).find("ul").stop().slideUp();
    });


    //멀티방향
    
    $("#menu_05 nav > ul > li").hover(function(){
        $(this).find("ul").stop().slideDown();
    },function(){
        $(this).find("ul").stop().hide();
    });
});

