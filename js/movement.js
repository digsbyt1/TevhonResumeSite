var count = 0;
var stat = [true,false,false,false,false];
var consume = 0;

$(document).ready(function() 
{
  $("#case2").css({"top": $("#wh").offset().top, "left":$("#wh").offset().left});
  $("#skills").css({"top": $("#mySkills").offset().top, "left":$("#mySkills").offset().left});
  $("#case").css({"top": $('#click').offset().top, "left":$('#click').offset().left.toString()});
   $("#case4").css({"top": $('#proj').offset().top, "left":$('#proj').offset().left});
});

function func(num)
			{
				for(var jay = 0; jay<stat.length;jay++)
				{
					if(stat[jay]==true)
					{
						count = jay;
					}
				}
				if(count == num)
				{}
				else if(count == 0)
				{
					$("#case3").animate({
            				height: '0%',
            				width: '0%',
							opacity:.3,
							top: ($("#about").offset().top),
							left: ($("#about").offset().left)
        					},2000,function(){$("#case3").toggle(); func2(num);});
      					stat[0] =false;
				}
				else if(count == 1)
				{
					//window.document.write( ($("#click").position().top) + " " + ($("#click").position().left));
					$("#case").animate({
            				height: '0%',
            				width: '0%',
							opacity:.3,
							top: $("#click").offset().top.toString(),
							left: ($("#click").offset().left)
        					},2000,function(){$("#case").toggle(); func2(num);});
      					stat[1] =false;
				}
				else if(count == 2)
				{

					$("#case2").animate({
            				height: '0px',
            				width: '0px',
							opacity:.3,
							top: ($("#wh").offset().top),
							left: ($("#wh").offset().left)
        					},2000,function(){$("#case2").toggle();func2(num)});
      					stat[2] = false;
				}
				else if(count ==3)
				{
					$("#skills").animate({
            				height: '0%',
            				width: '0%',
							opacity:.3,
							top: $("#mySkills").offset().top.toString(),
							left: ($("#mySkills").offset().left)
        					},2000,function(){$("#skills").toggle(); func2(num);});
      					stat[3] =false;
				}
				else
				{
					$("#case4").animate({
            				height: '0%',
            				width: '0%',
							opacity:.3,
							top: $("#proj").offset().top.toString(),
							left: ($("#proj").offset().left)
        					},2000,function(){$("#case4").toggle(); func2(num);});
      					stat[4] =false;
				}
				
			}

function func2(val)
			{
				if(val == 0)
				{
						$("#case3").toggle();
    		   			$("#case3").animate({height:'100%',width:'80%',top:'130%',left:'10%',opacity:1},1200);
    		   			stat[0] =true; 
				}
				else if(val==1)
				{
					$("#case").css({"top": $('#click').offset().top.toString(), "left":($('#click').offset().left.toString()-150)});
						$("#case").toggle();
    		   			$("#case").animate({height:'100%',width:'80%',top:'130%',left:'10%',opacity:1},1200);
    		   			stat[1] =true;
      			}
      			else if(val == 2)
      			{
      				$("#case2").css({"top": $('#wh').offset().top.toString(), "left":$('#wh').offset().left.toString()});
      				//window.document.write( $('#case2').position().top.toString() + " " + $('#wh').position().left.toString());
						$("#case2").toggle();
    		   			$("#case2").animate({height:'252%',width:'80%',top:'130%',left:'10%',opacity:1},1200);
    		   			stat[2] =true;
      			}
      			else if(val == 3)
      			{
      				
      				$("#skills").css({"top": $('#mySkills').offset().top.toString(), "left":$('#mySkills').offset().left.toString()});

						$("#skills").toggle();
						//window.document.write($('#skills').offset().left.toString());
    		   			$("#skills").animate({height:'100%',width:'80%',top:'130%',left:'10%',opacity:1},1200);
    		   			stat[3] =true;
      			}
      			else
      			{
      				$("#case4").css({"top": $('#proj').offset().top.toString(), "left":$('#proj').offset().left.toString()});

						$("#case4").toggle();
						//window.document.write($('#skills').offset().left.toString());
    		   			$("#case4").animate({height:'100%',width:'80%',top:'130%',left:'10%',opacity:1},1200);
    		   			stat[4] =true;
      			}
			}