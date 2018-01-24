// 当HTML结构加载完成以后
$(document).ready(function(){

	// 获取容器
	var section2 = $('.section-2');
	var section3 = $('.section-3');
	var section4 = $('.section-4');
	var section5 = $('.section-5');
	var section6 = $('.section-6');
	var section7 = $('.section-7');
	var section8 = $('.section-8');
	var next = $('#next');
	var isFirst = false;

	// 调用fullpage插件
	$('#fullpage').fullpage({
		navigation: true, // 显示右侧切屏按钮
		verticalCentered: false, // 内容默认顶对其
		afterLoad: function(anchorLink, index){

			// 如果滚动到第二屏
			if(index == 2){
				// 搜索框从右向左运动
				section2.find('.search').animate({
					opacity:1,
					marginLeft:-111
				},700,function(){

					// 从右向左运动的搜索框隐藏
					$(this).hide();

					// 向上运动的搜索框显示 并且向右上方运动
					section2.find('.search-leave').show().animate({
						width:148,
						height:30,
						bottom:449,
						marginLeft:100
					},1000,function(){
						next.fadeIn();
					});

					// 沙发产品图显示 并运动出来
					section2.find('.goods').show().animate({
						height:218
					},1000);

					// 白色文字渐渐显示
					section2.find('.words-2').animate({
						opacity:1
					},1000)

				})
			}

		},
		onLeave: function(index, nextIndex, direction){

			if(nextIndex == 3 && direction == "down" && !isFirst){

				// 沙发从第二屏落到第三屏
				section2.find('.shirt').show().animate({
					bottom: - $(window).height() + 200,
					width:207,
					marginLeft:-250
				},1000,function(){

					// 商品颜色选中
					section3.find('.color-2').animate({
						opacity:1
					},400,function(){

						// 按钮颜色变亮
						section3.find('.button-2').animate({
							opacity:1
						},400,function(){
							next.fadeIn();
						})

					})

				});

				// 白色遮罩显示
				section2.find('.cover').show();

			}

			if(nextIndex == 4 && direction == "down" && !isFirst){

				// 将从第二屏滚动的第三屏的沙发隐藏掉
				section2.find('.shirt').hide();

				// 将第三屏斜着的沙发显示出来 并且运动到第四屏
				section3.find('.italic').show().animate({
					bottom: -$(window).height() + 250,
					marginLeft: -60
				},1000,function(){

					// 沙发隐藏
					$(this).hide();

					// 购物车内部沙发显示
					section4.find('.img-2').show();

					// 购物车跑出页面
					section4.find('.car').animate({
						marginLeft:1000
					},1000,'easeInOutBack',function(){

						// 文字变换
						section4.find('.word-2').animate({
							opacity:1
						},600);

						// 卡片出现
						section4.find('.card').animate({
							opacity:1
						},600,function(){

							// 卡片内的文字显示
							$(this).find('img').animate({
								opacity:1
							},600,function(){
								next.fadeIn();
							})

						})

					});
					
				});

			}

			if(nextIndex == 5 && direction == "down" && !isFirst){

				// 手从下向上运动出来
				section5.find('.hand').animate({
					bottom:0
				},1000,function(){
					// 鼠标变成可点击状态
					section5.find('.mouse-b').show();
				});

				// 沙发从上向下落
				section5.find('.italic').show().animate({
					marginTop:45
				},1000,function(){

					// 银行卡从下往上运动
					section5.find('.order').animate({
						marginTop:-180
					},600,function(){
						next.fadeIn();
					})

				})

			}

			if(nextIndex == 6 && direction == "down"){
				
				// 沙发从第五屏落到第六屏
				section5.find('.italic').animate({
					top:$(window).height()*2 - 620,
					width:100,
					marginLeft:-200
				},1000,function(){

					// 沙发隐藏
					$(this).hide();

				});

				// 第六屏的盒子接住沙发
				section6.find('.box').animate({
					marginLeft:-210
					// 盒子运动到底部
				},1000).animate({
					bottom:30
				},600,function(){
					// 盒子隐藏
					$(this).hide();

					// 背景开始运动
					section6.animate({
						backgroundPositionX:'100%'
					},2500,function(){

						// 送货人出现
						$(this).find('.man').animate({
							height:305,
							bottom:117
						},600).animate({
							left:'50%'
						},600,function(){

							// 显示 请收货
							section6.find('.please').show();

							// 收货人显示
							section6.find('.woman').animate({
								height:294
							},600,function(){
								next.fadeIn();
							})

						})

					});

					// 显示地址
					section6.find('.address').show();

					// 文字从左侧飞出
					section6.find('.word').animate({
						left:'30%',
						opacity:1
					},800,'easeOutExpo')

				})


			}

			if(nextIndex == 7 && direction == "down"){

				// 星星显示
				section7.find('.star').delay(700).animate({
					width:96
				},1000);

				// 好评显示
				section7.find('.good').delay(700).animate({
					opacity:1,
					marginLeft:-280
				},1000,function(){
					next.fadeIn();
				});

			}

			if(nextIndex == 8 && direction == "down"){

				isFirst = true;

				// 鼠标移入第八屏事件
				section8.on('mousemove',function(event){

					// 获取到鼠标的XY轴坐标
					var pageX = event.pageX - 85;
					var pageY = event.pageY + 20;

					// 限制Y轴坐标不能小于手本身的高度
					if(pageY < $(window).height() - 449 ){
						pageY = $(window).height() - 449
					}

					// 将鼠标的坐标 赋值给手的坐标
					section8.find('.hand').css({
						left:pageX,
						top:pageY
					})

				});

				// 当点击再来一次的时候
				section8.find('.again').on('click',function(){

					$.fn.fullpage.moveTo(1);

					$('*').not('.section,#fullpage,body,html').attr('style','');

					isFirst = false;

				});

			}

		},
		afterRender : function(){

			next.on('click',function(){

				$.fn.fullpage.moveSectionDown();

				$(this).fadeOut(200);

			});

		}
	});

});