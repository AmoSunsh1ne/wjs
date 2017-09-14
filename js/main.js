// $(function(){
// 	function resize(){
// 		// 获取屏幕宽度
// 	var windowWidth = $(window).width();
// 	// 判断屏幕大小
// 	var smellWidth = windowWidth < 768;
// 	// 根据大小设置轮播图图片背景
// 	$("#main_ad > .carousel-inner > .item").each(function(index,ele){
// 		var $ele = $(ele);
// 		var imgSrc = smellWidth ? $ele.data('img-xs'): $ele.data('img-lg');
// 		$ele.css('backgroundImage','url("'+imgSrc+'")');
// 	})
// 	}
// 	$(window).on("resize",resize).trigger("resize");
// });


$(function(){
	function resize(){
		var windowWidth = $(window).width();
	var smallWidth = windowWidth < 768;
	$("#main_ad > .carousel-inner > .item").each(function(index,ele){
		var $ele = $(ele);
		var imgSrc = smallWidth ? $ele.data("image-xs") :  $ele.data("image-lg");
		$ele.css('backgroundImage','url("'+imgSrc+'")');
		// 用小图时，尺寸比例进行缩放，小图时使用img
		if (smallWidth) {
			$ele.html('<img src="'+imgSrc+'" alt=""/>');
		}
		else {
			$ele.empty();
		}

	})
	}
	$(window).on("resize",resize).trigger("resize");


	var $ulContainer = $(".nav-tabs");
	var width = 30;
	$ulContainer.children().each(function(index,ele){
		width += ele.clientWidth; 
	})
	if (width > $(window).width()) {
		$ulContainer.css('width',width).parent().css('overflow-x','scroll');
	}



	// 设置a点击注册事件
	var newsTitle = $(".news-title");
	$("#news .nav-pills a").on("click",function(){
		// 获取a元素
		var $this = $(this);
		// 获取data-title元素
		var title = $this.data("title");
		// 把title放到相应位置
		newsTitle.text(title);
	})


	// 轮播图手指滑动
	// 获取轮播图元素
	var $carousels = $(".carousel");
	var offset = 50;
	var startX,endX;
	// 注册滑动事件
	// 触摸开始
	$carousels.on("touchstart",function(ele){
		// 手指触摸开始时记录一下手指所在的坐标X
		startX = ele.originalEvent.touches[0].clientX;
		// console.log(startX);
	})
	$carousels.on("touchmove",function(ele){
		// 手指触摸结束时记录一下手指所在的坐标X
		endX = ele.originalEvent.touches[0].clientX;
		// console.log(endX);
	})
	$carousels.on("touchend",function(ele){
		console.log(ele);
		var distance = Math.abs(startX - endX);
		if (distance > offset) {
			$(this).carousel(startX > endX ? 'next' : 'prev');
		}
	})


})