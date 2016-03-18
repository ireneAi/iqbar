(function(){
	// 播放视频
	var btnPlay = document.getElementById('btnPlay'),
	    videoBox = document.getElementById('videoBox');

	btnPlay.onclick = function(){
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
	var prevBtn = document.getElementById('nextBtn'),
	    nextBtn = document.getElementById('nextBtn'),
	    teachBox = document.getElementById('teachBox');
	prevBtn.onclick = function(){
		startMoveT(teachBox,"-440",'left')
	}

	function startMoveT(id,iTarget){
		clearInterval(timer);
		timer = setInterval(function ()
		{
			doMoveT(id,iTarget)
		}, 100)	
	}
	function doMoveT(id,target,l){
		var cur=Math.round(parseFloat(getStyle(id,l)));
		var iSpeed = (target - cur) / 7;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);		
		id.style.l= (cur+iSpeed)+'px';
	}

	var prevBtn = document.getElementById('main');
		console.log(innerWidth)

}())