function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
(Animation = function(control,id){		
		var manifest = [
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		
	];
		return manifest;	
});

(slide1 = function(slideContainer){
	
	
	var btn	
		
	btn = getCJSElement("BLUE_BUTTON",{x:125,y:405,width:130,height:28,compId:"ID_s1_btn01",callback:slidebtnHandler1,id:"1"});
	//btn.setSelected(true);
	slideContainer.btn_1 = btn;	
	slideContainer.addChild(btn);
	var imgelement = getCJSElement("IMAGE",{src:"media_3.1.1.7A.png",x:"0",y:"0",width:"680",height:"490"});
	slideContainer.image_1=imgelement;
	slideContainer.addChild(imgelement);
	
	btn = getCJSElement("BLUE_BUTTON",{x:280,y:405,width:130,height:28,compId:"ID_s1_btn02",callback:slidebtnHandler1,id:"2"});
	slideContainer.btn_2 = btn;
	slideContainer.addChild(btn);
	imgelement = getCJSElement("IMAGE",{src:"media_3.1.1.7B.png",x:"0",y:"0",width:"680",height:"490"});
	slideContainer.image_2=imgelement;	
	slideContainer.addChild(imgelement);
	
	btn = getCJSElement("BLUE_BUTTON",{x:435,y:405,width:130,height:28,compId:"ID_s1_btn03",callback:slidebtnHandler1,id:"3"});
	slideContainer.btn_3 = btn;
	slideContainer.addChild(btn);
	 imgelement = getCJSElement("IMAGE",{src:"media_3.1.1.7C.png",x:"0",y:"0",width:"680",height:"490"});
	slideContainer.image_3=imgelement;	
	slideContainer.addChild(imgelement);
	//slidebtnHandler1(1)
	
	function slidebtnHandler1(id)
	{
	if(domElement!=null)
	{
		$("#domElement").remove();
		slideContainer.removeChild(domElement)
		}		
	var htmlElmt = document.createElement("div");
	htmlElmt.style.cssText = "top:0px;left:0px;position:absolute;";
	htmlElmt.id = "domElement";
	htmlElmt.innerHTML = "<img id = 'myImage' src = 'wave.gif?rand="+Math.random()*1000+"'>";
	//htmlElmt.style.transform = "rotatey(" + 45 + "deg)";
	document.body.appendChild(htmlElmt);
		var domElement = new createjs.DOMElement(htmlElmt);	
		slideContainer.addChild(domElement)				
		domElement.x=210	
		domElement.y=150	
		domElement.scaleY = -1;
		slideContainer.btn_1.setSelected(false);	
		slideContainer.btn_2.setSelected(false);	
		slideContainer.btn_3.setSelected(false);			
		slideContainer["btn_"+id].setSelected(true);
		slideContainer["image_"+id].visible=true;
		if(id==1)
		{			
		slideContainer.image_2.visible=false;	
		slideContainer.image_3.visible=false;		
		}
		if(id==2)
		{			
		slideContainer.image_1.visible=false;	
		slideContainer.image_3.visible=false;
		}	
		if(id==3)
		{			
		slideContainer.image_1.visible=false;	
		slideContainer.image_2.visible=false;
		}
		update = true;
	}
	
	
});

(slide2 = function(slideContainer){
	var c=document.getElementById("canvas");
	c.height=490;
	//subType="ANIMATION" movieClipId="anim01" totalFrames="90"
	var activity = getActivityElement({div:"slide_2",subType:"ANIMATION", movieClipId:"anim03", totalFrames:"86"})
	slideContainer.activity_1 = activity;
	activity.x = 100;
	activity.y = 50;
	slideContainer.addChild(activity);
	activity = getActivityElement({div:"slide_2",subType:"ANIMATION", movieClipId:"anim02", totalFrames:"87"})
	slideContainer.activity_2 = activity;
	activity.x = 100;
	activity.y = 50;
	slideContainer.addChild(activity);
	activity = getActivityElement({div:"slide_2",subType:"ANIMATION", movieClipId:"anim01", totalFrames:"86"})
	slideContainer.activity_3 = activity;
	activity.x = 100;
	activity.y = 50;
	slideContainer.addChild(activity);
	
			
	btn = getCJSElement("BLUE_BUTTON",{x:125,y:405,width:130,height:28,compId:"ID_s2_btn01",callback:btnHandler,id:"1"});
	//btn.setSelected(true);
	slideContainer.btn_1 = btn;	
	slideContainer.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:280,y:405,width:130,height:28,compId:"ID_s2_btn02",callback:btnHandler,id:"2"});
	slideContainer.btn_2 = btn;
	slideContainer.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:435,y:405,width:130,height:28,compId:"ID_s2_btn03",callback:btnHandler,id:"3"});
	slideContainer.btn_3 = btn;
	slideContainer.addChild(btn);


	
	function btnHandler(id)
	{					
		slideContainer.btn_1.setSelected(false);	
		slideContainer.btn_2.setSelected(false);	
		slideContainer.btn_3.setSelected(false);			
		slideContainer["btn_"+id].setSelected(true);
		slideContainer.getStage().update();
		slideContainer.activity_1.visible = false;
		slideContainer.activity_2.visible = false;
		slideContainer.activity_3.visible = false;		
		slideContainer["activity_"+id].visible = true;
		slideContainer.activity_1.anims.gotoAndStop(1);
		slideContainer.activity_2.anims.gotoAndStop(1);
		slideContainer.activity_3.anims.gotoAndStop(1);
		slideContainer.activity_1.anims.stop();
		slideContainer.activity_2.anims.stop();
		slideContainer.activity_3.anims.stop();
		slideContainer["activity_"+id].anims.gotoAndPlay(2);

		slideContainer["activity_"+id].playClick();
		slideContainer.getStage().update();
		update = true;
	}
	
	//btnHandler(1);
	
});

(slideViewDidLoad = function(slideContainer,id){
	
	if(id == 1)
	{	
		slide1(slideContainer);		
	}	
	if(id == 2)
	{	
		loadImages([{src:"../../../common/scripts/templates_ext_dev.js", id:"ext"}],function(){			
		slide2(slideContainer);
		});
	}
	
});




