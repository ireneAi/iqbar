﻿(function(){
	// 播放视频
	var btnPlay = document.getElementById('btnPlay'),
	    play_video = document.getElementById('play_video'),
	    videoBox = document.getElementById('videoBox');

	play_video.onclick = btnPlay.onclick = function(){
		videoBox.style.display = "block";
	}

	videoBox.onclick = function(){
		videoBox.style.display = "none";
		return false;
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
		playTimer = setInterval(next, 4000)
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
	var playTimer = setInterval(next,4000)

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

	function getStyle(obj, name){
		if(obj.currentStyle){
			return obj.currentStyle[name];
		} else{
			return getComputedStyle(obj, false)[name];
		}
	}
	// 老师切换
	var listtimer,list_index=1,
	    prevBtn = document.getElementById('prevBtn'),
	    nextBtn = document.getElementById('nextBtn'),
	    teachBox = document.getElementById('teachBox'),
	    bigBox = document.getElementById('tebox'),
	    techBoxl =teachBox.getElementsByTagName('img').length;

	teachBox.style.width =  techBoxl * 466 + 'px';

	prevBtn.onclick = function(){
		console.log(list_index)
		list_index--		
		if(list_index <= -1 ){list_index = techBoxl-2 ;}
		startMoveL(-list_index*466)
	}
	nextBtn.onclick = function (){	
		console.log(list_index)		
		if(list_index > techBoxl-2){list_index = 0}	
		startMoveL(-list_index*466)
		list_index ++
	}
	function next_l(){
		startMoveL(-list_index*466)
		list_index ++
		if(list_index > techBoxl-2){list_index = 0}	
	}
	bigBox.onmouseover = function(){
		clearInterval(play_l)
	}

	bigBox.onmouseout = function(){
		play_l = setInterval(next_l,3000)
	}
	var play_l = setInterval(next_l,3000)

	function startMoveL(iTarget){
		clearInterval(listtimer);
		listtimer = setInterval(function ()
		{
			doMoveL(iTarget)
		}, 30)	
	}
	function doMoveL(iTarget)
	{		
		var iSpeed = (iTarget - teachBox.offsetLeft) / 10;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);		
		teachBox.offsetLeft == iTarget ? clearInterval(timer) : teachBox.style.left = teachBox.offsetLeft + iSpeed + "px"
	}



	
	// 需要全屏显示的话
	// var main = document.getElementById('main');		
	// if(innerWidth>1280){
	// 	main.style.webkitTransform = 'scale(' + (innerWidth/1280) +')';
	// 	main.style.mozTransform = 'scale(' + (innerWidth/1280) +')';
	// 	main.style.msTransform = 'scale(' + (innerWidth/1280) +')';
	// 	main.style.Transform = 'scale(' + (innerWidth/1280) +')';
	// 	main.style.marginTop = -main.offsetTop + 'px';
	// }
}())