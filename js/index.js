$(function(){
	$(".xxk-li").mouseover(function(){
		var index=$(this).index();
		$(".xxk-li ul").eq(index).css({display:"block"});
		$(".xxk-li").eq(index).addClass("xxks")
	});
	$(".xxk-li").mouseout(function(){
		var index=$(this).index();
		$(".xxk-li ul").eq(index).css({display:"none"});
		$(".xxk-li").eq(index).removeClass("xxks")
	});
	
	
	$(".navigate").mouseover(function(){
		
		$(".navigates").css({display:"block"});
	});
	$(".navigate").mouseout(function(){
		
		$(".navigates").css({display:"none"});
	});


	// choose tab
	var $div_li =$("div.choose ul li");
        $div_li.click(function(){
            $(this).addClass("active")            
                   .siblings().removeClass("active"); 
            var index =  $div_li.index(this);  
            $("div.tab_box > div")       
                    .eq(index).show()   
                    .siblings().hide(); 
        })
})

