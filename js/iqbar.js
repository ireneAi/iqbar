(function(){
	// 播放视频
	var btnPlay = document.getElementById('btnPlay'),
	play_video = document.getElementById('play_video'),
	videoBox = document.getElementById('videoBox'),
	closebtn = document.getElementById('close'),
	// bewecom四个按钮
	bp1 = document.getElementById('play1'),
	bp2 = document.getElementById('play2'),
	bp3 = document.getElementById('play3'),
	bp4 = document.getElementById('play4'),
	// video视频，保存视频路径
	video = document.getElementById('example_video_1'),
	videosrc = video.src;

	bp1.onclick = 
	bp2.onclick = 	
	bp3.onclick = 
	bp4.onclick =	
	play_video.onclick = 
	btnPlay.onclick = video_f;

	// 显示视频 function
	function video_f(){
		videoBox.style.display = "block";
		// 重设视频路径
		video.src = videosrc;
	}

	// 关闭视频 视频URL取消
	closebtn.onclick = function(){
		videoBox.style.display = "none";
		// 路径设置为空
		video.src="";
	}
	// banner 轮播
	var i,index=0,timer,
	Btn_parent = document.getElementById('Banner_btn'),
	Btn_list = Btn_parent.getElementsByTagName('li'),
	banner_list = document.getElementById('Banner_list').getElementsByTagName('img');

	for (i=0,len=Btn_list.length; i < len ; i++) {
		Btn_list[i].index = i;
		Btn_list[i].onclick=function(){
			index = this.index;
			cutover()
			returnValue = false;
		}
	};
	Btn_parent.onmouseover = function ()
	{
		clearInterval(playTimer)
	};
	
	Btn_parent.onmouseout = function ()
	{
		playTimer = setInterval(next, 3000);
		video.pause()
	};
	function cutover(){
		for (var i = 0; i < Btn_list.length; i++) {
			Btn_list[i].className = '';
			startMove(banner_list[i],'0')
			banner_list[i].style.filter='alpha(opacity:'+0+')';
			banner_list[i].style.opacity=0;		
			banner_list[i].style.zIndex = 0;	
			banner_list[i].style.display="none";
		};
		Btn_list[index].className = 'on';		
		banner_list[index].style.display = 'block';
		startMove(banner_list[index],'100')
		banner_list[index].style.zIndex = 10;
	}
	cutover()
	function next(){
		index++;
		index >= banner_list.length && (index =0);
		cutover()
	}
	var playTimer = setInterval(next,3000)

	function startMove(id,iTarget){
		clearInterval(timer);
		timer = setInterval(function ()
		{
			doMove(id,iTarget)
		}, 100)	
	}
	function doMove(id,target){
		var cur=Math.round(parseFloat(getStyle(id,"opacity"))*100);
		var iSpeed = (target - cur) / 7;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);		
		id.style.filter='alpha(opacity:'+(cur+iSpeed)+')';
		id.style.opacity=(cur+iSpeed)/100;
	}

	function getStyle(obj, name) {
		if (obj.currentStyle) {
			return obj.currentStyle[name];
		} else {
			return getComputedStyle(obj, null)[name];
		}
	}
	// learn_btn hover效果
	var study_box = document.getElementById('study_main'),
	learn_btn = study_box.getElementsByTagName('button');
	for(var i=0;i<learn_btn.length;i++){
		learn_btn[i].onmouseover = function(){
			this.parentNode.className += " active"

		}
		learn_btn[i].onmouseout = function(){
			this.parentNode.className = "study_list"
		}
	}

	// 老师切换
	var listtimer,play_l,list_index=1,
	prevBtn = document.getElementById('prevBtn'),
	nextBtn = document.getElementById('nextBtn'),
	teachBox = document.getElementById('teachBox'),
	bigBox = document.getElementById('tebox'),
	techBoxl =teachBox.getElementsByTagName('img').length;

	teachBox.style.width =  techBoxl * 466 + 'px';

	prevBtn.onclick = function(){	
		list_index--
		if(list_index < 0 ){list_index = techBoxl-2 ;}
		setMove(teachBox,-list_index*466)
		clearInterval(play_l)
	}
	nextBtn.onclick = function (){	
		clearInterval(play_l)	
		console.log(list_index)
		list_index ++;
		if(list_index > techBoxl-2){list_index = 0}	
			setMove(teachBox,-list_index*466)

	}
	function next_l(){		
		list_index ++
		if(list_index > techBoxl-2){list_index = 0}	
			setMove(teachBox,-list_index*466)
	}
	bigBox.onmouseover = function(){
		clearInterval(play_l)
	}
	bigBox.onmouseout = function(){
		play_l = setInterval(next_l,3000)		
	}
	var play_l = setInterval(next_l,3000);

	function setMove(ele,itarget){
		clearInterval(listtimer);
		listtimer = setInterval(function(){			
			var speed = (itarget - ele.offsetLeft)/5;
			speed= speed>0 ? Math.ceil(speed) : Math.floor(speed);
			if (ele.offsetLeft == itarget){
				clearInterval(listtimer);
			}else{
				ele.style.left = ele.offsetLeft + speed +'px';
			}
		},30)
	}

	// top事件
	var topbtn = document.getElementById('top');
	window.onscroll = function(){
		var scrTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(scrTop>=300)	{
			topbtn.style.display = "block";	
		}
		if(scrTop<=300)	{
			topbtn.style.display = "none";	
		}
	}	
	topbtn.onclick = function(){
		var scrTop= document.body.scrollTop || document.documentElement.scrollTop;
		var Ttmer = setInterval(function(){			
			scrTop -= 20
			document.body.scrollTop = document.documentElement.scrollTop = scrTop;					
			if(scrTop<=0){clearInterval(Ttmer)}
		},5)
	}

	// 根据屏幕宽度获取背景图与banner图
	// banner图片集合 banner_list

	var footer = document.querySelector("footer");
	var becom_main = document.querySelector(".becom_main");
	var Complete = document.querySelector(".Complete");
	var list_teach = document.querySelector(".list_teach");
	var inner = innerWidth;
	function resize(){
		if(innerWidth<=1280){
			img_load(1280)		
		}
		if(innerWidth<=1440 && innerWidth>1280){		
			img_load(1440)	
		}
		if(innerWidth<=1680 && innerWidth>1440){
			img_load(1680)	
		}
		if(innerWidth<=1920 && innerWidth>1680){
			img_load(1920)	
		}
		if(innerWidth<=2440 && innerWidth>1920){
			img_load(2440)	
		}

	}
	resize()
	window.onresize = function (){
		if(inner >= innerWidth){
			return false
		}else{
			resize()
			inner = innerWidth;
		}
	}
	function img_load(width){
		banner_list[0].src = "images/" + width + "/banner1.png";
		banner_list[1].src = "images/" + width + "/banner2.png";
		banner_list[2].src = "images/" + width + "/banner3.png";
		becom_main.style.background = "url(images/" + width + "/be_come.png)  no-repeat center top";
		Complete.style.background = 'url(images/' + width + '/complete.png) no-repeat  center top';
		footer.style.background = '#ececec url(images/' + width + '/footer_background.png) no-repeat  center bottom';		
		if(innerWidth>1570){
			list_teach.style.background = '#ececec url(images/2440/list_teach.png) no-repeat  center top';
		}
	}

	//需要全屏显示的话
	// var main = document.getElementById('main');		
	// if(innerWidth>1280){
	// 	main.style.webkitTransform = 'scale(' + (innerWidth/1280) +')';
	// 	main.style.mozTransform = 'scale(' + (innerWidth/1280) +')';
	// 	main.style.msTransform = 'scale(' + (innerWidth/1280) +')';
	// 	main.style.Transform = 'scale(' + (innerWidth/1280) +')';
	// 	main.style.marginTop = -main.offsetTop + 'px';
	// }
	
}())