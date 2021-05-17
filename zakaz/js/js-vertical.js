$(document).ready(function(){
    $('.bottom-slrd').click(function(){
    	var gettop = $(".slider-vertical").css("top");
    	var getheight = $(".ver-slider-pic").css("height");
    	getheight = parseInt(getheight.replace('px', ''));
    	gettop = parseInt(gettop.replace('px', ''));
    	var count = $('.ver-slider-pic').length;
    	var rescount = count*104-(3*104);
    	rescount -= rescount*2;
    	var settop = gettop - (90+14);
    	if(rescount<=settop)
    		$(".slider-vertical").css("top",settop+"px");
    })
    $('.top-slrd').click(function(){
    	var gettop = $(".slider-vertical").css("top");
    	var getheight = $(".ver-slider-pic").css("height");
    	getheight = parseInt(getheight.replace('px', ''));
    	gettop = parseInt(gettop.replace('px', ''));
    	if(gettop!=0 && gettop<30){
    		var settop = gettop + (90+14);
    		$(".slider-vertical").css("top",settop+"px");
    	}
    })
    $('.mark-table-title').click(function (event) {
        var iditemhist = $(this).attr('id');
        $("#"+iditemhist+"-show").slideToggle();
        event.stopPropagation();
    });
    $("#minus").click(function(){
        var count = parseInt($(".count-item-block span").html());
        var price = $("#prcena").val();
        count++;
        price = price*count;
        $(".count-item-block span").html(count);
        $(".price-item-block-title span").html(price);
    })
    $("#plus").click(function(){
        var count = parseInt($(".count-item-block span").html());
        var price = $("#prcena").val();
        if(count!=1 && count>1){
            count--;
            price = price*count;
            $(".count-item-block span").html(count);
            $(".price-item-block-title span").html(price);
        }
    })
})
