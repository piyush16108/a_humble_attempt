var font_size = 10;
var min_font_size = 10;
var initial_font_size = 50;
var foot_factor = 0.6;
$(document).ready(function(){
			//alert("Buttons change");
			$("#nav-placeholder").load("https://piyush16108.github.io/lets_try/nav.html");
			$(".increaseFont, h5").css("font-size", initial_font_size);
			$("#fixedFooter").css("font-size", initial_font_size*foot_factor);
			var handle = $( "#custom-handle" );
    			$( "#slider" ).slider({
      				create: function() {
        				handle.text( $( this ).slider( "value" ) );
      				},
	  
	  			min: min_font_size,
	  			value: parseInt($(".increaseFont, h5").css("font-size")),
				
      				slide: function( event, ui ) {
        				handle.text(ui.value);
					font_size = $(this).slider("value");
					$(".increaseFont, h5").css("font-size", font_size);
					$("#fixedFooter").css("font-size", font_size*foot_factor);
					//console.log("//");
      				}
   			 });
	
			$("#slider").mouseup(function(){
				console.log("increaseFont!!!");
				$(".increaseFont, h5").css("font-size",$("#slider").slider("option", "value"));
				$("#fixedFooter").css("font-size", ($("#slider").slider("option", "value"))*foot_factor);
			});
	
			var stickNavBar = false;
			var showFooter = false;
			var goToURL = "https://vedabase.io/en/library/";
			
			$("#nav-placeholder").on("click", "#goFindVerse", function(){
				alert("#goFindVerse clicked!!!");
				var book = $("#book").val();
				var level1Val = $("#level1").val();
				var level2Val = $("#level2").val();
				var level3Val = $("#level3").val();
				goToURL += (book + "/" + level1Val + "/" + level2Val + "/" + level3Val);
				window.open(goToURL,"_self");
			});
			
			$("#nav-placeholder").on("click", "#hideNavBar", function(){
				if(stickNavBar){
					$("#navBar").removeClass("sticky-top");
					stickNavBar = false;
					$("#hideNavBar").text("Keep Header");
				}
				
				else if(!stickNavBar){
					$("#navBar").addClass("sticky-top");
					stickNavBar = true;
					$("#hideNavBar").text("Hide Header");
				}
			});
			
			$("#fixedFooter").hide();
			$("#nav-placeholder").on("click", "#hideFooter", function(){
				if(showFooter){
					$("#fixedFooter").hide();
					showFooter = false;
					$("#hideFooter").text("Show Footer");
				}
				
				else if(!showFooter){
					$("#fixedFooter").show();
					showFooter = true;
					$("#hideFooter").text("Hide Footer");
				}
			});
		});
