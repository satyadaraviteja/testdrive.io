

//Stats dealers ..product_hardcoded

function statdealers(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	$("#mySelect").change(function(){
        var countries = [];
        $.each($(".selectBox option:selected"), function(){            
            countries.push($(this).val());
        });
       var geography = countries;
       
       // (geography);
       if(geography == "Regional")
	   {
	   document.getElementById('replace').style.display = "block";
	   document.getElementById('siteID').style.display = "none";
	   }       
 
       else if(geography == "Dealer")
	   {
	   document.getElementById('siteID').style.display = "block";
	   document.getElementById('replace').style.display = "none";
	   }   
       else if(geography == "National")
	   {
	   document.getElementById('replace').style.display = "none";
	   document.getElementById('siteID').style.display = "none";
	   statdealers1(start,end);
	   top_performer_onesfunction(start,end);
	   top_performer_onesfunction1(start,end);
	   top_bottoms_features(start,end);
	   top_bottoms_features1(start,end);
	   }    
  
       
       $("#selectdealer").change(function(){
           var countries = [];
           $.each($(".dealers option:selected"), function(){            
               countries.push($(this).val());
           });
		  var productss = countries;
		  
		  
          
		 // var dealer_code = (JSON.stringify(productss));
		  
		  var dealer_code  = productss.toString();

		  //console.log(x)
          
       
     	
	
	$.ajax({   
        
		 url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/get_stats/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&product=[%22Yaris%22,%20%22Glanza%22]&dealer_code="+dealer_code+"",    
		type:"get",
		       	  data: "json",
		       	  
		       	
		 	 success: function(data)
		 	 {    
		 	
		 
		 	 //var data = JSON.parse(data);	
		 	 
		 	 //(data);
		 	 
		 	 var data = JSON.parse(data);
           	
           	
          	 var time_based_count = data.triggers.time_based_count;
          	 var obd_based_count = data.triggers.obd_based_count;
          	 var harsh_break = data.triggers.harsh_break;
          	 var sudden_speed = data.triggers.sudden_speed;
          	 var start_stop = data.triggers.start_stop;
          	 var click_based_count = data.triggers.click_based_count;
          	
          	
          	 document.getElementById("hello1").innerHTML = time_based_count;
          	 document.getElementById("hello2").innerHTML = obd_based_count;
          	 document.getElementById("hello3").innerHTML = click_based_count;
          	 document.getElementById("hello4").innerHTML = start_stop;
          	 document.getElementById("hello5").innerHTML = harsh_break;
          	 document.getElementById("hello6").innerHTML = sudden_speed;
          	
          	
          	 var number_of_vehicles = data.stats.number_of_vehicles;
          	 var avg_fuel_consumed = data.stats.avg_fuel_consumed;
          	 var avg_time = data.stats.avg_time;
          	 var number_of_testdrives = data.stats.number_of_testdrives;
          	 var avg_distance = data.stats.avg_distance;
          	 var avg_fuel_cost = data.stats.avg_fuel_cost;
          	

          	 document.getElementById("hi1").innerHTML = number_of_vehicles;
          	 document.getElementById("hi2").innerHTML = number_of_testdrives;
          	 document.getElementById("hi3").innerHTML = avg_distance;
          	 document.getElementById("hi4").innerHTML = avg_time;
          	 document.getElementById("hi5").innerHTML = avg_fuel_cost;
          	 document.getElementById("hi6").innerHTML = avg_fuel_consumed;
		 	
		 	
		 	    
		 	   

		 	}


		});
	


	});
       
	});
	
}

//national stattrig


function statdealers1(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	
	var arrayproducts = ["Yaris","Glanza"];
	
	$.ajax({   
        
		 url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/get_stats/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product=[%22Yaris%22,%20%22Glanza%22]",    
		type:"get",
		       	  data: "json",
		       	  
		       	
		 	 success: function(data)
		 	 {    
		 	
		 
		 	 //var data = JSON.parse(data);	
		 	 
		 	 //alert(data);
		 	 
		 	 var data = JSON.parse(data);
           	
           	
          	 var time_based_count = data.triggers.time_based_count;
          	 var obd_based_count = data.triggers.obd_based_count;
          	 var harsh_break = data.triggers.harsh_break;
          	 var sudden_speed = data.triggers.sudden_speed;
          	 var start_stop = data.triggers.start_stop;
          	 var click_based_count = data.triggers.click_based_count;
          	
          	
          	 document.getElementById("hello1").innerHTML = time_based_count;
          	 document.getElementById("hello2").innerHTML = obd_based_count;
          	 document.getElementById("hello3").innerHTML = click_based_count;
          	 document.getElementById("hello4").innerHTML = start_stop;
          	 document.getElementById("hello5").innerHTML = harsh_break;
          	 document.getElementById("hello6").innerHTML = sudden_speed;
          	
          	
          	 var number_of_vehicles = data.stats.number_of_vehicles;
          	 var avg_fuel_consumed = data.stats.avg_fuel_consumed;
          	 var avg_time = data.stats.avg_time;
          	 var number_of_testdrives = data.stats.number_of_testdrives;
          	 var avg_distance = data.stats.avg_distance;
          	 var avg_fuel_cost = data.stats.avg_fuel_cost;
          	

          	 document.getElementById("hi1").innerHTML = number_of_vehicles;
          	 document.getElementById("hi2").innerHTML = number_of_testdrives;
          	 document.getElementById("hi3").innerHTML = avg_distance;
          	 document.getElementById("hi4").innerHTML = avg_time;
          	 document.getElementById("hi5").innerHTML = avg_fuel_cost;
          	 document.getElementById("hi6").innerHTML = avg_fuel_consumed;
		 	
		 	
		 	    
		 	   

		 	}


		});
	

	
}

/// 



/*function statdealers2(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	$("#mySelect").change(function(){
        var countries = [];
        $.each($(".selectBox option:selected"), function(){            
            countries.push($(this).val());
        });
       var geography = countries;
       
       // (geography);
       if(geography == "Regional")
	   {
	   document.getElementById('replace').style.display = "block";
	   document.getElementById('siteID').style.display = "none";
	   }       
 
       else if(geography == "Dealer")
	   {
	   document.getElementById('siteID').style.display = "block";
	   document.getElementById('replace').style.display = "none";
	   }   
       else if(geography == "National")
	   {
	   document.getElementById('replace').style.display = "none";
	   document.getElementById('siteID').style.display = "none";
	   statdealers1(start,end);
	   top_performer_onesfunction(start,end);
	   top_performer_onesfunction1(start,end);
	   top_bottoms_features(start,end);
	   top_bottoms_features1(start,end);
	   }    
  
       
       $("#selectdealer").change(function(){
           var countries = [];
           $.each($(".dealers option:selected"), function(){            
               countries.push($(this).val());
           });
          var productss = countries;
          
          var dealer_code = (JSON.stringify(productss));
          
          $("#products").change(function(){
  	        var countries = [];
  	        $.each($(".products option:selected"), function(){            
  	            countries.push($(this).val());
  	        });
  	       var productss = countries;
  	       
  	       var arrayproducts = (JSON.stringify(productss)); 
     	
	
	$.ajax({   
        
		 url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/get_stats/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&product="+[arrayproducts]+"&dealer_code ="+dealer_code+"",    
		type:"get",
		       	  data: "json",
		       	  
		       	
		 	 success: function(data)
		 	 {    
		 	
		 
		 	 //var data = JSON.parse(data);	
		 	 
		 	 //(data);
		 	 
		 	 var data = JSON.parse(data);
           	
           	
          	 var time_based_count = data.triggers.time_based_count;
          	 var obd_based_count = data.triggers.obd_based_count;
          	 var harsh_break = data.triggers.harsh_break;
          	 var sudden_speed = data.triggers.sudden_speed;
          	 var start_stop = data.triggers.start_stop;
          	 var click_based_count = data.triggers.click_based_count;
          	
          	
          	 document.getElementById("hello1").innerHTML = time_based_count;
          	 document.getElementById("hello2").innerHTML = obd_based_count;
          	 document.getElementById("hello3").innerHTML = click_based_count;
          	 document.getElementById("hello4").innerHTML = start_stop;
          	 document.getElementById("hello5").innerHTML = harsh_break;
          	 document.getElementById("hello6").innerHTML = sudden_speed;
          	
          	
          	 var number_of_vehicles = data.stats.number_of_vehicles;
          	 var avg_fuel_consumed = data.stats.avg_fuel_consumed;
          	 var avg_time = data.stats.avg_time;
          	 var number_of_testdrives = data.stats.number_of_testdrives;
          	 var avg_distance = data.stats.avg_distance;
          	 var avg_fuel_cost = data.stats.avg_fuel_cost;
          	

          	 document.getElementById("hi1").innerHTML = number_of_vehicles;
          	 document.getElementById("hi2").innerHTML = number_of_testdrives;
          	 document.getElementById("hi3").innerHTML = avg_distance;
          	 document.getElementById("hi4").innerHTML = avg_time;
          	 document.getElementById("hi5").innerHTML = avg_fuel_cost;
          	 document.getElementById("hi6").innerHTML = avg_fuel_consumed;
		 	
		 	
		 	    
		 	   

		 	}


		});
	


	});	});
       
	});
	
}*/





