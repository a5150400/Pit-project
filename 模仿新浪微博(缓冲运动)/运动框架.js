
function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}


function startMove(obj, json,fun)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var istop = true;
		for (var attr in json) {

			//获取当前值
			//利用iCur存储当前属性的值;
			var iCur=0;

			if(attr=='opacity')
			{
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				iCur=parseInt(getStyle(obj, attr));
			}


			//算速度

			var iSpeed=(json[attr]-iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

			//检测停止
			if (iCur!=json[attr]) {

					 istop = false;

			}

			console.log(istop);
				if(attr=='opacity'){
					obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
					obj.style.opacity=(iCur+iSpeed)/100;
				}
				else
				{
					obj.style[attr]=iCur+iSpeed+'px';
				}


		}

		if (istop) {
			clearInterval(obj.timer);

			if (fun){
				fun();

			}

		}
	}, 30)

}


function elasTic(target,obj,attr) {

	setInterval(function () {

		 ispeed+=target/50-obj[attr]/50;
		 ispeed *= 0.95;
	 		div1.style.left  = div1.offsetLeft + ispeed+"px";
	 

 },30)
}
