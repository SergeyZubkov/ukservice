$(function(){if(!Modernizr.svg){$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png");});};$("form").submit(function(){var th=$(this);$.ajax({type:"POST",url:"mail.php",data:th.serialize()}).done(function(){alert("Thank you!");setTimeout(function(){th.trigger("reset");},1000);});return false;});try{$.browserSelector();if($("html").hasClass("chrome")){$.smoothScroll();}}catch(err){};$("img, a").on("dragstart",function(event){event.preventDefault();});$('.bxslider').bxSlider({auto:true,slideWidth:1170,controls:false,pager:false,captions:true});$('.nav-primary a').smoothScroll({speed:1000});$(window).scroll(function(){if($(window).scrollTop()>400){if(!$('.nav-primary').hasClass('sticky')){$('.nav-primary').css({position:'fixed',top:0,height:0}).animate({height:40},200).addClass('sticky')}}else{$('.nav-primary').css({position:'relative',top:0}).removeClass('sticky')}})
$("form").submit(function(){var formID=$(this).attr('id');var formNm=$('#'+formID);$.ajax({type:"POST",url:'mail.php',data:formNm.serialize(),success:function(data){$(formNm).html(data);},error:function(jqXHR,text,error){$(formNm).html(error);}});return false;})});