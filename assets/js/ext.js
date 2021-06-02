
function showDiv(select){
	if(select.value=="Regional")
	{
	 document.getElementById('replace').style.display = "block";
	 document.getElementById('siteID').style.display = "none";
	}
	else if(select.value=="Dealer")
	{
	 document.getElementById('siteID').style.display = "block";
	 document.getElementById('replace').style.display = "none";
	}
	else if(select.value=="National")
	{
		 document.getElementById('replace').style.display = "none";
			document.getElementById("siteID").style.display = "none";
	 }
 } 

 function stattriggers(start,end)
 {
	 
	 var startdate = start;
	 var enddate = end;
	 
	 
	 $("#products").change(function(){
		 var countries = [];
		 $.each($(".products option:selected"), function(){            
			 countries.push($(this).val());
		 });
		var productss = countries;
		
		var arrayproducts = (JSON.stringify(productss));
		
		
		  
	 
	 $.ajax({   
		 
		  url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/get_stats/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product="+[arrayproducts]+"",    
		 type:"get",
					  data: "json",
					  
					
			   success: function(data)
			   {    
		   
			   
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
		  // 	 document.getElementById("hi5").innerHTML = avg_fuel_cost;
		//   	 document.getElementById("hi6").innerHTML = avg_fuel_consumed;
			  
			  
				  
				 

			  }


		 });
	 


	 });
	 
 }
 
 function onesfunction(start,end)
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
				   // document.getElementById("hi5").innerHTML = avg_fuel_cost;
				   // document.getElementById("hi6").innerHTML = avg_fuel_consumed;
			   

				  }


			 });
   
 }

function top_performer_onesfunction(start,end) 
{
	var startdate = start;
	var enddate = end;
	
	var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

	var collec5 = "";
		
				
				$.ajax({   
			        
	url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product=%5B%22Yaris%22,%22Glanza%22%5D&inner_filter=test_drives",
			type:"get",
		    data: "json",
		        	
		  	 success: function(data)
		  	 {    
		  	  
		  	  var obj = JSON.parse(data);
		
		  	  
		  	  for(var i=0; i<obj.top_dealers.length; i++)
		           
		  	  {
		  		  
		  		  
		  		  
		  		  
		  		var ele5 = "";
	    		
	    		ele5 = inserting5;
	        	
	        	
		      
		        	var dealer_code =  (obj.top_dealers[i].dealer_code);
		        	var dealer_name =  (obj.top_dealers[i].dealer_name);
		        	var test_drives =  (obj.top_dealers[i].test_drives);
		        	var avg_time =  (obj.top_dealers[i].avg_testdrive_duration);
		        	
		        	   ele5 = ele5.replace("dealer_code",dealer_code);
		        	   
		        	   
		        	   
		        	   
		        		   ele5 = ele5.replace("test_drives",test_drives);
		        		   
		        		   var line =dealer_name ;
			               var res = line.substring(0, 15) + '...';
			                
			                 ele5 = ele5.replace("dealer_name",res);
		        	   
		                 
		                 
		                 
		                 
		        		collec5 += ele5;
		        		
		        		
		        		
		           	}
	      	
	          $("#top_performer").html(collec5); 
	          
	          //alert(obj.top_dealers.length);
	          
	          if (obj.top_dealers.length == 0) 
	        	  {
	        	  //alert('No data!');
	        	  document.getElementById('pdf').innerHTML = "<img src='img/No data.png' />"
	        	  }
	      	
	    
	    }
	

	});
	
	
}



function productswise(start,end)
{
    
    var startdate = start;
    var enddate = end;
    

       
    
    $.ajax({   
        
        url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/product_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography=National&&inner_filter=test_drives",
      type:"get",
                     data: "json",
                   
              success: function(data)
              {    
             
         
              //var data = JSON.parse(data);	
              
              //alert(data);
              
              var data = JSON.parse(data);
              
              console.log(data);
             
              mychart(data);
                 

             }


        });
}






var myChart=null;

function mychart(datavalue)
{
   
	

	let chartData = {
		type: 'bar',
		data: datavalue,
	
		
		 options: {
				
				  legend: {
					"display": false
				  },
				  tooltips: {
					"enabled": true
				  },
				  scales: {
					  yAxes: [{
						  ticks: {
							  beginAtZero: true
						  }
					  }],
					  xAxes: [{
						  barThickness: 20,  // number (pixels) or 'flex'
						   // number (pixels)
					  }]
			   
		
	 }
				  
				  
			   
				  
				  
	}}

	if(myChart!=null){
        myChart.destroy();
    }	

var ctx = document.getElementById('myChart').getContext('2d');


 
myChart = new Chart(ctx, chartData);






}


function top_performer_onesfunction1(start,end) 
{
	var startdate = start;
	var enddate = end;
	
	
var inserting6 ="<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

	
	var collec6 = "";


			
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product=%5B%22Yaris%22,%22Glanza%22%5D&inner_filter=test_drives",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	  
	  	  for(var i=0; i<obj.bottom_dealers.length; i++)
	           
	  	  {
	  		  
	  		  
	  		  
	  		  
	  		var ele6 = "";
    		
    		ele6 = inserting6;
        	
        	
	      
	        	var dealer_code =  (obj.bottom_dealers[i].dealer_code);
	        	var dealer_name =  (obj.bottom_dealers[i].dealer_name);
	        	var test_drives =  (obj.bottom_dealers[i].test_drives);
	        	var avg_time =  (obj.top_dealers[i].avg_testdrive_duration);

	        	
	        	   ele6 = ele6.replace("dealer_code",dealer_code);
	        	   
	        	   var line =dealer_name ;
	               var res = line.substring(0, 15) + '...';
	                
	                 ele6 = ele6.replace("dealer_name",res);
	                 
	             
	        		   ele6 = ele6.replace("test_drives",test_drives);
	        		
	                 
	        		collec6 += ele6;
	        		
	        		
	        		
	           	}
      	
          $("#bottom_performer").html(collec6); 
      	
    
    }

});

	
}	


function dayswise(start,end)
{
    
    var startdate = start;
    var enddate = end;
    
    

               
    $.ajax({   
        
        url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/day_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography=National&inner_filter=test_drives&product=[%22Yaris%22,%20%22Glanza%22]",
      type:"get",
                     data: "json",
                   
              success: function(data)
              {    
             
         
              //var data = JSON.parse(data);	
              
              //alert(data);
              
              var data = JSON.parse(data);
              mychart1(data);
              
              
                

             }


    });
    
}


function mychart1(datavalue)
    {
    	
		//alert(datavalue);
		



    

    	var ctx = document.getElementById('myChart1').getContext('2d');
    	var chart = new Chart(ctx, {
    	    // The type of chart we want to create
    	    type: 'line',

    	    // The data for our dataset
    	    data: datavalue,

    	    // Configuration options go here
    	    options: {  
    	    	fill: true,
    	    	backgroundColor: "rgba(244, 144, 128, 0.8)",
    	    	legend: {
        	        "display": false
        	      },
        	      tooltips: {
        	        "enabled": true
        	      }
    	    	}
    	    	

    	});
    	

}
    

function top_bottoms_features(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	
var inserting = "<tr><td style=\"padding-top: 1%;padding-bottom: 1%;padding-right: 1%;\">feature</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">product</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">coverage  % </td></tr>";

var collec = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_features/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product=[%22Yaris%22,%20%22Glanza%22]",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	  
	  	  for(var i=0; i<obj.top_features.length; i++)
	           
	  	  {
	  		  
	  		  
	  		var ele = "";
    		
    		ele = inserting;
        	
        	
	      
	        	var coverage =  (obj.top_features[i].coverage);
	        	var feature =  (obj.top_features[i].feature);
	        	var product =  (obj.top_features[i].product);
	        	
	        	   ele = ele.replace("feature",feature);
	        	   
	                
	                 ele = ele.replace("product",product);
	                 
	                 ele = ele.replace("coverage",coverage);
	                 
	        		collec += ele;
	        		
	        		
	        		
	           	}
      	
          $("#bodypage").html(collec); 
      	
    
    }

});



}


function top_bottoms_features1(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	


var inserting1 = "<tr><td>feature</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">product</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">coverage</td></tr>";

var collec1 = "";


			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_features/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product=[%22Yaris%22,%20%22Glanza%22]",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	  
	  	  for(var i=0; i<obj.bottom_features.length; i++)
	           
	  	  {
	  		  
	  		  
	  		var ele1 = "";
    		
    		ele1 = inserting1;
        	
        	
	      
	        	var coverage =  (obj.bottom_features[i].coverage);
	        	var feature =  (obj.bottom_features[i].feature);
	        	var product =  (obj.bottom_features[i].product);
	        	
	        	   ele1 = ele1.replace("feature",feature);
	        	   
	                
	                 ele1 = ele1.replace("product",product);
	                 
	                 ele1 = ele1.replace("coverage",coverage);
	                 
	        		collec1 += ele1;
	        		
	        		
	        		
	           	}
      	
          $("#bodypage1").html(collec1); 
      	
    
    }

});
		


}




function language_chart(start,end)
{
    
    
    var startdate = start;
    var enddate = end;
    
    
    $.ajax({   
        
        url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/td_language_chart/?geography=National&product=[%22Yaris%22,%20%22Glanza%22]&start_date="+startdate+"&end_date="+enddate+"",
      type:"get",
                     data: "json",
                   
              success: function(data)
              {    
             
         
              //var data = JSON.parse(data);	
              
              //alert(data);
              
              var data = JSON.parse(data);
              mychart3(data);
              
              
                

             }


    });
    
    
    
    
}



function mychart3(datavalue)
{
    
    //alert(datavalue);


    var ctx = document.getElementById('myChart3').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        data: datavalue,

       
            

    });
    

}

$(document).ready(function ()
		{
	
	$("#mySelect").change(function()
		{
        var countries = [];
        $.each($(".selectBox option:selected"), function(){            
            countries.push($(this).val());
        });
       var geography = countries;
		
	
	if(geography == "National")
		{
		window.location.reload();
		}
	
		});
	
		}
);


function top_bottom_dealers(start,end)
{

	
	var startdate = start;
	var enddate = end;
	
	
	$("#products").change(function(){
        var countries = [];
        $.each($(".products option:selected"), function(){            
            countries.push($(this).val());
        });
       var productss = countries;
       
       var arrayproducts = (JSON.stringify(productss));
       
       
	
	$("#filters").change(function(){
        var countries = [];
        $.each($(".filt option:selected"), function(){            
            countries.push($(this).val());
        });
       var ids = countries;
    
       
       
       
	
	
	
var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

var collec5 = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product="+arrayproducts+"&inner_filter="+ids+"",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	  
	  	  for(var i=0; i<obj.top_dealers.length; i++)
	           
	  	  {
	  		  
	  		  
	  		  
	  		  
	  		var ele5 = "";
    		
    		ele5 = inserting5;
        	
        	
	      
	        	var dealer_code =  (obj.top_dealers[i].dealer_code);
	        	var dealer_name =  (obj.top_dealers[i].dealer_name);
	        	var test_drives =  (obj.top_dealers[i].test_drives);
	        	var avg_time =  (obj.top_dealers[i].avg_testdrive_duration);
	        	
	        	   ele5 = ele5.replace("dealer_code",dealer_code);
	        	   
	        	   
	        	   if(ids == "test_drives")
	        		   {
	        		   document.getElementById('test_drives').innerHTML = "No. Of Test Drives";
	        		   ele5 = ele5.replace("test_drives",test_drives);
	        		   
	        		   }
	        	   else if(ids == "avg_time")
	        		   {
	        		   document.getElementById('test_drives').innerHTML = "Average Time";
	        		   ele5 = ele5.replace("test_drives",avg_time);
	        		   }
	        	   
	        	   var line =dealer_name ;
	               var res = line.substring(0, 15) + '...';
	                
	                 ele5 = ele5.replace("dealer_name",res);
	                 
	                 
	                 
	                 
	        		collec5 += ele5;
	        		
	        		
	        		
	           	}
      	
          $("#top_performer").html(collec5); 
      	
    
    }

});
	});		

	});	
}

function top_performer_onesfunction(start,end) 
{
	var startdate = start;
	var enddate = end;
	
	var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

	var collec5 = "";
		
				
				$.ajax({   
			        
	url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product=%5B%22Yaris%22,%22Glanza%22%5D&inner_filter=test_drives",
			type:"get",
		    data: "json",
		        	
		  	 success: function(data)
		  	 {    
		  	  
		  	  var obj = JSON.parse(data);
		
		  	 if(obj.top_dealers.length)
		  	 {
		  	  
		  		 //alert("Data-Found");
		  		 
		  		 document.getElementById('top_performer1').style.display = "none";
		  		 
		  	  for(var i=0; i<obj.top_dealers.length; i++)
		           
		  	  {
		  		  
		  		  
		  		  
		  		  
		  		var ele5 = "";
	    		
	    		ele5 = inserting5;
	        	
	        	
		      
		        	var dealer_code =  (obj.top_dealers[i].dealer_code);
		        	var dealer_name =  (obj.top_dealers[i].dealer_name);
		        	var test_drives =  (obj.top_dealers[i].test_drives);
		        	var avg_time =  (obj.top_dealers[i].avg_testdrive_duration);
		        	
		        	   ele5 = ele5.replace("dealer_code",dealer_code);
		        	   
		        	   
		        	   
		        	   
		        		   ele5 = ele5.replace("test_drives",test_drives);
		        		   
		        		   var line =dealer_name ;
			               var res = line.substring(0, 15) + '...';
			                
			                 ele5 = ele5.replace("dealer_name",res);
		        	   
		                 
		                 
		                 
		                 
		        		collec5 += ele5;
		        		
		        		
		        		
		      }
	      	
	          $("#top_performer").html(collec5); 
		  	 }
	          
	          //alert(obj.top_dealers.length);
	          
	          else if (obj.top_dealers.length == 0) 
	        	  {
	        	  //no-data
	        	  document.getElementById('top_performer').display = "none";
	        	  document.getElementById('top_performer1').innerHTML = "NO Data Found";
	        	  //document.getElementById('top_performer').style.marginTop  = "50px";
	        	  
	        	  }  
	      	
	    
	    }
	

	});
	
	
}


function top_performers_onesfunction(start,end) 
{
	var startdate = start;
	var enddate = end;
	
	$("#filters").change(function(){
        var countries = [];
        $.each($(".filt option:selected"), function(){            
            countries.push($(this).val());
        });
       var ids = countries;
    	
	var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

	var collec5 = "";
	
	
	
		
				
				$.ajax({   
			        
	url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product=%5B%22Yaris%22,%22Glanza%22%5D&inner_filter="+ids+"",
			type:"get",
		    data: "json",
		        	
		  	 success: function(data)
		  	 {    
		  	  
		  	  var obj = JSON.parse(data);
		
		  	  
		  	  for(var i=0; i<obj.top_dealers.length; i++)
		           
		  	  {
		  		  
		  		  
		  		  
		  		  
		  		var ele5 = "";
	    		
	    		ele5 = inserting5;
	        	
	        	
		      
	    		var dealer_code =  (obj.top_dealers[i].dealer_code);
	        	var dealer_name =  (obj.top_dealers[i].dealer_name);
	        	var test_drives =  (obj.top_dealers[i].test_drives);
	        	var avg_time =  (obj.top_dealers[i].avg_testdrive_duration);
	        	
	        	   ele5 = ele5.replace("dealer_code",dealer_code);
	        	   
	        	   
	        	   if(ids == "test_drives")
	        		   {
	        		   document.getElementById('test_drives').innerHTML = "No. Of Test Drives";
	        		   ele5 = ele5.replace("test_drives",test_drives);
	        		   
	        		   }
	        	   else if(ids == "avg_time")
	        		   {
	        		   document.getElementById('test_drives').innerHTML = "Average Time";
	        		   ele5 = ele5.replace("test_drives",avg_time);
	        		   }
	        	   
	        	   var line =dealer_name ;
	               var res = line.substring(0, 15) + '...';
	                
	                 ele5 = ele5.replace("dealer_name",res);
	                 
		        	   
		                 
		                 
		                 
		                 
		        		collec5 += ele5;
		        		
		        		
		        		
		           	}
	      	
	          $("#top_performer").html(collec5); 
	          
	          
	      	
	    
	    }

	});
				
	});
	
	
}


function top_bottom_dealers1(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	
	

	$("#products").change(function(){
        var countries = [];
        $.each($(".products option:selected"), function(){            
            countries.push($(this).val());
        });
       var productss = countries;
       
       var arrayproducts = (JSON.stringify(productss));
       
    
	
	$("#filters1").change(function(){
        var countries = [];
        $.each($(".dropdown2 option:selected"), function(){            
            countries.push($(this).val());
        });
       var ids = countries;

var inserting6 ="<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

	
	var collec6 = "";


			
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product="+arrayproducts+"&inner_filter="+ids+"",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	  
	  	  for(var i=0; i<obj.bottom_dealers.length; i++)
	           
	  	  {
	  		  
	  		  
	  		  
	  		  
	  		var ele6 = "";
    		
    		ele6 = inserting6;
        	
        	
	      
	        	var dealer_code =  (obj.bottom_dealers[i].dealer_code);
	        	var dealer_name =  (obj.bottom_dealers[i].dealer_name);
	        	var test_drives =  (obj.bottom_dealers[i].test_drives);
	        	var avg_time =  (obj.top_dealers[i].avg_testdrive_duration);

	        	
	        	   ele6 = ele6.replace("dealer_code",dealer_code);
	        	   
	        	   var line =dealer_name ;
	               var res = line.substring(0, 15) + '...';
	                
	                 ele6 = ele6.replace("dealer_name",res);
	                 
	                 if(ids == "test_drives")
	        		   {
	        		   document.getElementById('no.oftestdrives').innerHTML = "No. Of Test Drives";
	        		   ele6 = ele6.replace("test_drives",test_drives);
	        		   
	        		   }
	        	   else if(ids == "avg_time")
	        		   {
	        		   document.getElementById('no.oftestdrives').innerHTML = "Average Time";
	        		   ele6 = ele6.replace("test_drives",avg_time);
	        		   }
	                 
	        		collec6 += ele6;
	        		
	        		
	        		
	           	}
      	
          $("#bottom_performer").html(collec6); 
      	
    
    }

});

	});
	
	});

}


function top_performer_onesfunction1(start,end) 
{
	var startdate = start;
	var enddate = end;
	
	
var inserting6 ="<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

	
	var collec6 = "";


			
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product=%5B%22Yaris%22,%22Glanza%22%5D&inner_filter=test_drives",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	if(obj.bottom_dealers.length)
	  	 {
	  		document.getElementById('bottom_performer1').style.display = "none";
	  		
	  	  for(var i=0; i<obj.bottom_dealers.length; i++)
	           
	  	  {
	  		  
	  		  
	  		  
	  		  
	  		var ele6 = "";
    		
    		ele6 = inserting6;
        	
        	
	      
	        	var dealer_code =  (obj.bottom_dealers[i].dealer_code);
	        	var dealer_name =  (obj.bottom_dealers[i].dealer_name);
	        	var test_drives =  (obj.bottom_dealers[i].test_drives);
	        	var avg_time =  (obj.top_dealers[i].avg_testdrive_duration);

	        	
	        	   ele6 = ele6.replace("dealer_code",dealer_code);
	        	   
	        	   var line =dealer_name ;
	               var res = line.substring(0, 15) + '...';
	                
	                 ele6 = ele6.replace("dealer_name",res);
	                 
	             
	        		   ele6 = ele6.replace("test_drives",test_drives);
	        		
	                 
	        		collec6 += ele6;
	        		
	        		
	        		
	           	}
      	
          $("#bottom_performer").html(collec6); 
          
	  	 }
        
        //alert(obj.top_dealers.length);
        
        else if (obj.bottom_dealers.length == 0) 
      	  {
      	  //no-data
      	  document.getElementById('bottom_performer').display = "none";
      	  document.getElementById('bottom_performer1').innerHTML = "NO Data Found";
      	  //document.getElementById('top_performer').style.marginTop  = "50px";
      	  
      	  }  
      	
    
    }

});

	
}	

function top_performers_onesfunction1(start,end) 
{
	var startdate = start;
	var enddate = end;
	
	
	$("#filters1").change(function(){
        var countries = [];
        $.each($(".dropdown2 option:selected"), function(){            
            countries.push($(this).val());
        });
       var ids = countries;
	
var inserting6 ="<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

	
	var collec6 = "";


			
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product=%5B%22Yaris%22,%22Glanza%22%5D&inner_filter="+ids+"",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	  for(var i=0; i<obj.bottom_dealers.length; i++)
	           
	  	  {
	  		  
	  		  
	  		  
	  		  
	  		var ele6 = "";
    		
    		ele6 = inserting6;
        	
        	
	      
    		var dealer_code =  (obj.bottom_dealers[i].dealer_code);
        	var dealer_name =  (obj.bottom_dealers[i].dealer_name);
        	var test_drives =  (obj.bottom_dealers[i].test_drives);
        	var avg_time =  (obj.top_dealers[i].avg_testdrive_duration);

        	
        	   ele6 = ele6.replace("dealer_code",dealer_code);
        	   
        	   var line =dealer_name ;
               var res = line.substring(0, 15) + '...';
                
                 ele6 = ele6.replace("dealer_name",res);
                 
                 if(ids == "test_drives")
        		   {
        		   document.getElementById('no.oftestdrives').innerHTML = "No. Of Test Drives";
        		   ele6 = ele6.replace("test_drives",test_drives);
        		   
        		   }
        	   else if(ids == "avg_time")
        		   {
        		   document.getElementById('no.oftestdrives').innerHTML = "Average Time";
        		   ele6 = ele6.replace("test_drives",avg_time);
        		   }
	        		
	                 
	        		collec6 += ele6;
	        		
	        		
	        		
	           	}
      	
	  	console.log(collec6);
	  	
          $("#bottom_performer").html(collec6); 
      	
    
    }

});
	});
	
}

function top_bottom_features(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	
	$("#products").change(function(){
        var countries = [];
        $.each($(".products option:selected"), function(){            
            countries.push($(this).val());
        });
       var productss = countries;
       
       var arrayproducts = (JSON.stringify(productss));
       

var inserting = "<tr><td style=\"padding-top: 1%;padding-bottom: 1%;padding-right: 1%;\">feature</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">product</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">coverage  % </td></tr>";

var collec = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_features/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product="+arrayproducts+"",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	  
	  	  for(var i=0; i<obj.top_features.length; i++)
	           
	  	  {
	  		  
	  		  
	  		var ele = "";
    		
    		ele = inserting;
        	
        	
	      
	        	var coverage =  (obj.top_features[i].coverage);
	        	var feature =  (obj.top_features[i].feature);
	        	var product =  (obj.top_features[i].product);
	        	
	        	   ele = ele.replace("feature",feature);
	        	   
	                
	                 ele = ele.replace("product",product);
	                 
	                 ele = ele.replace("coverage",coverage);
	                 
	        		collec += ele;
	        		
	        		
	        		
	           	}
      	
          $("#bodypage").html(collec); 
      	
    
    }

});
	
	});


}

function top_bottom_features1(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	
	$("#products").change(function(){
        var countries = [];
        $.each($(".products option:selected"), function(){            
            countries.push($(this).val());
        });
       var productss = countries;
       
       var arrayproducts = (JSON.stringify(productss));

var inserting1 = "<tr><td>feature</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">product</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">coverage</td></tr>";

var collec1 = "";


			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_features/?start_date="+startdate+"&end_date="+enddate+"&geography=National&product="+arrayproducts+"",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	  
	  	  for(var i=0; i<obj.bottom_features.length; i++)
	           
	  	  {
	  		  
	  		  
	  		var ele1 = "";
    		
    		ele1 = inserting1;
        	
        	
	      
	        	var coverage =  (obj.bottom_features[i].coverage);
	        	var feature =  (obj.bottom_features[i].feature);
	        	var product =  (obj.bottom_features[i].product);
	        	
	        	   ele1 = ele1.replace("feature",feature);
	        	   
	                
	                 ele1 = ele1.replace("product",product);
	                 
	                 ele1 = ele1.replace("coverage",coverage);
	                 
	        		collec1 += ele1;
	        		
	        		
	        		
	           	}
      	
          $("#bodypage1").html(collec1); 
      	
    
    }

});
		
	});

}


function chartonesfunction(start,end)
    {
	     if( chartonesfunction.fired ) return;
	     chartonesfunction.fired = true;
	     

	    	var startdate = start;
	    	var enddate = end;
	    	
	    	
	    	$.ajax({   
	            
	    		  url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/product_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography=National&&inner_filter=test_drives",
	  		  type:"get",
	      		       	  data: "json",
	      		       	
	      		 	 success: function(data)
	      		 	 {    
	      		 	
	      		 
	      		 	 //var data = JSON.parse(data);	
	      		 	 
	      		 	 //alert(data);
	      		 	 
	      		 	 var data = JSON.parse(data);
	      		 	 
	      		 	 console.log(data);
	      		 	
	      		 	 mychart(data);
	      		 		

	      		 	}


	      		});
    }
    
    
    
    var myChart=null;

    function mychart(datavalue)
    {
       
    	

    	let chartData = {
    		type: 'bar',
    		data: datavalue,
    	
    		
    		 options: {
    				
    				  legend: {
    					"display": false
    				  },
    				  tooltips: {
    					"enabled": true
    				  },
    				  scales: {
    					  yAxes: [{
    						  ticks: {
    							  beginAtZero: true
    						  }
    					  }],
    					  xAxes: [{
    						  barThickness: 20,  // number (pixels) or 'flex'
    						   // number (pixels)
    					  }]
    			   
    		
    	 }
    				  
    				  
    			   
    				  
    				  
    	}}

    	if(myChart!=null){
            myChart.destroy();
        }	

    var ctx = document.getElementById('myChart').getContext('2d');


     
    myChart = new Chart(ctx, chartData);






	}

	function dayonesfunction(start,end)
    {
	     if( dayonesfunction.fired ) return;
	     dayonesfunction.fired = true;
	     
    	
    	var startdate = start;
    	var enddate = end;
    	
    	
    	
    	$.ajax({   
            
  		  url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/day_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography=National&inner_filter=test_drives&product=[%22Yaris%22,%20%22Glanza%22]",
		  type:"get",
    		       	  data: "json",
    		       	
    		 	 success: function(data)
    		 	 {    
    		 	
    		 
    		 	 //var data = JSON.parse(data);	
    		 	 
    		 	 //alert(data);
    		 	 
    		 	 var data = JSON.parse(data);
    		 	 mychart1(data);
    		 	 
    		 	 
    		 	   

    		 	}


    		});
    	
    	
    }
    
    
    var chart=null;

    
    function mychart1(datavalue)
    {
    	
    	//alert(datavalue);
    	
    	if(chart!=null){
    		chart.destroy();
        }	
    

    	var ctx = document.getElementById('myChart1').getContext('2d');
    		chart = new Chart(ctx, {
    	    // The type of chart we want to create
    	    type: 'line',

    	    // The data for our dataset
    	    data: datavalue,

    	    // Configuration options go here
    	    options: {  
    	    	fill: true,
    	    	backgroundColor: "rgba(244, 144, 128, 0.8)",
    	    	legend: {
        	        "display": false
        	      },
        	      tooltips: {
        	        "enabled": true
        	      }
    	    	}
    	    	

    	});
    	

}


function dayswise(start,end)
    {
    	
    	var startdate = start;
    	var enddate = end;
    	
    	
    	$("#dd1").change(function(){
	        var countries = [];
	        $.each($(".dropdown1 option:selected"), function(){            
	            countries.push($(this).val());
	        });
	       var productss = countries;
	       
	           	
    	$.ajax({   
            
  		  url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/day_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography=National&inner_filter="+productss+"&product=[%22Yaris%22,%20%22Glanza%22]",
		  type:"get",
    		       	  data: "json",
    		       	
    		 	 success: function(data)
    		 	 {    
    		 	
    		 
    		 	 //var data = JSON.parse(data);	
    		 	 
    		 	 //alert(data);
    		 	 
    		 	 var data = JSON.parse(data);
    		 	 mychart1(data);
    		 	 
    		 	 
    		 	   

    		 	}


    		});
    	});
    	
	}
	

	function productwise(start,end)
	{
		
		var startdate = start;
		var enddate = end;
		
		
	  $("#dd").change(function(){
			var countries = [];
			$.each($(".dropdowns option:selected"), function(){            
				countries.push($(this).val());
			});
		   var ids = countries;
		   		   
		   
		
		$.ajax({   
			
			url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/product_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography=National&inner_filter="+ids+"",
		  type:"get",
						 data: "json",
					   
				  success: function(data)
				  {    
				 
				  
				  var data = JSON.parse(data);
				  
				  console.log(data);
				 
				  filterchart(data);
					 
	
				 }
	
	
			});
		});
	}
	
	var filterChart=null;
	
		function filterchart(datavalue)
		{
		   
			
	
			let chartData = {
				type: 'bar',
				data: datavalue,
			
				
				 options: {
						
						  legend: {
							"display": false
						  },
						  tooltips: {
							"enabled": true
						  },
						  scales: {
							  yAxes: [{
								  ticks: {
									  beginAtZero: true
								  }
							  }],
							  xAxes: [{
								  barThickness: 20,  // number (pixels) or 'flex'
								   // number (pixels)
							  }]
					   
				
			 }
						  
						  
					   
						  
						  
			}}
	
			if(filterChart!=null){
				filterChart.destroy();
			}	
	
		var ctx = document.getElementById('myChart').getContext('2d');
	
	
		 
		filterChart = new Chart(ctx, chartData);
	
	
	
	
	
	
		}
	
