
function regionwisedata(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	var products = $('#products').val();
	var arrayproducts = (JSON.stringify(products));

	var regions = $('#regions').val();
	var region = (JSON.stringify(regions));

	var mySelect = $('#mySelect').val();

	if(mySelect == "Dealer" || mySelect == "National")
{

}
else
{

	$.ajax({   
        
		 url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/get_stats/?start_date="+startdate+"&end_date="+enddate+"&geography=Regional&region="+region+"&product="+arrayproducts+"",    
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
          	 document.getElementById("hi5").innerHTML = avg_fuel_cost;
          	 document.getElementById("hi6").innerHTML = avg_fuel_consumed;
		 	
		 	
		 	    
		 	   

		 	}


		}).done(function()  {
			setTimeout(function(){
					$("#overlay").fadeOut(300);
		
		
		
			},300);
		  });
				
       
		}
	
}


function regionwisedata1(start,end)
{

	
	var startdate = start;
	var enddate = end;
	
	
	var products = $('#products').val();
	var arrayproducts = (JSON.stringify(products));

	var regions = $('#regions').val();
	var region = (JSON.stringify(regions));

	var ids = $('#filters').val();    

	
var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

var collec5 = "";
var mySelect = $('#mySelect').val();
	
if(mySelect == "Dealer" || mySelect == "National")
{

}
else
{			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography=Regional&region="+region+"&product="+arrayproducts+"&inner_filter="+ids+"",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	  // (data);
	  	  
	  	  for(var i=0; i<obj.top_dealers.length; i++)
	           
	  	  {
	  		  
	  		  
	  		  
	  		  
	  		var ele5 = "";
    		
    		ele5 = inserting5;
        	
        	
	      
	        	var dealer_code =  (obj.top_dealers[i].dealer_code);
	        	var dealer_name =  (obj.top_dealers[i].dealer_name);
	        	var test_drives =  (obj.top_dealers[i].test_drives);
	        	var avg_time =  (obj.top_dealers[i].avg_testdrive_duration);
	        	
	        	   ele5 = ele5.replace("dealer_code",dealer_code);
	        	   
	        	   
	        	   
	        	  
        		  
        		  
	        	   var line =dealer_name ;
	               var res = line.substring(0, 15) + '...';
	                
	                 ele5 = ele5.replace("dealer_name",res);
	                 
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
	                 
	                 
	        		collec5 += ele5;
	        		
	        		
	        		
	           	}
      	
          $("#top_performer").html(collec5); 
      	
    
    }

}).done(function()  {
    setTimeout(function(){
            $("#overlay").fadeOut(300);



    },300);
  });
	
}	
	
}


function regionwisedata3(start,end)
{

	
	var startdate = start;
	var enddate = end;
	
	
	var products = $('#products').val();
	var arrayproducts = (JSON.stringify(products));

	var regions = $('#regions').val();
	var region = (JSON.stringify(regions));
  
	var ids = $('#filters1').val();    

	
var inserting6 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

var collec6 = "";

var mySelect = $('#mySelect').val();

if(mySelect == "Dealer" || mySelect == "National")
{

}
else
{	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography=Regional&region="+region+"&product="+arrayproducts+"&inner_filter="+ids+"",
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
				  document.getElementById('test_drives').innerHTML = "No. Of Test Drives";
				  ele6 = ele6.replace("test_drives",test_drives);
				  
				  }
			  else if(ids == "avg_time")
				  {
				  document.getElementById('test_drives').innerHTML = "Average Time";
				  ele6 = ele6.replace("test_drives",avg_time);
				  }                    
                 
                  
                 collec6 += ele6;
                 
                 
                 
                }
       
       $("#bottom_performer").html(collec6); 
      	
    
    }

}).done(function()  {
    setTimeout(function(){
            $("#overlay").fadeOut(300);



    },300);
  });
	
	
}	
}


function regionwisedata5(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	
	  
	var products = $('#products').val();
	var arrayproducts = (JSON.stringify(products));

	var regions = $('#regions').val();
	var region = (JSON.stringify(regions));
      
	
	
var inserting = "<tr><td style=\"padding-top: 1%;padding-bottom: 1%;padding-right: 1%;\">feature</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">product</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">coverage  % </td></tr>";

var collec = "";

var mySelect = $('#mySelect').val();

if(mySelect == "Dealer" || mySelect == "National")
{

}
else
{	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_features/?start_date="+startdate+"&end_date="+enddate+"&geography=Regional&region="+region+"&product="+arrayproducts+"",
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

}).done(function()  {
    setTimeout(function(){
            $("#overlay").fadeOut(300);



    },300);
  });

}

}


function regionwisedata6(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	
	 
	var products = $('#products').val();
	var arrayproducts = (JSON.stringify(products));

	var regions = $('#regions').val();
	var region = (JSON.stringify(regions));
       
    
	
          var inserting1 = "<tr><td>feature</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">product</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">coverage</td></tr>";

          var collec1 = "";

		  var mySelect = $('#mySelect').val();

		  if(mySelect == "Dealer" || mySelect == "National")
		  {
		  
		  }
		  else
		  {
          			$.ajax({   
          		        
          		url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_features/?start_date="+startdate+"&end_date="+enddate+"&geography=Regional&region="+region+"&product="+arrayproducts+"",
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


			
       
			}).done(function()  {
				setTimeout(function(){
						$("#overlay").fadeOut(300);
			
			
			
				},300);
			  });

			}

}


function regionwisedata7(start,end)
{
	var startdate = start;
	var enddate = end;
	
	
	var products = $('#products').val();
	var arrayproducts = (JSON.stringify(products));

	var regions = $('#regions').val();
	var region = (JSON.stringify(regions));
  
	var productss = $('#dd').val();    

	var mySelect = $('#mySelect').val();

	if(mySelect == "Dealer" || mySelect == "National")
	{
	
	}
	else
	{         

          $.ajax({   
              
 url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/product_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography=Regional&region="+region+"&product="+arrayproducts+"&inner_filter="+productss+"",
  type:"get",
 data: "json",
        		       	
        		 	 success: function(data)
        		 	 {    
        		 	
        		  
        		 	 var data = JSON.parse(data);
        		 	 
        		 	 console.log(data);
        		 	
					  mychart(data)        		 		

        		 	}


				}).done(function()  {
					setTimeout(function(){
							$("#overlay").fadeOut(300);
				
				
				
					},300);
				  });
		
	
				}
	
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
						  barThickness: 20, 
					  }]
			   
		
	 }
		  
				  
	}}

	if(myChart!=null){
		myChart.destroy();
	}	

var ctx = document.getElementById('myChart').getContext('2d');

myChart = new Chart(ctx, chartData);

}





                function regionwisedata9(start,end)
                {
                    var startdate = start;
                    var enddate = end;
                    
                    
					var products = $('#products').val();
					var arrayproducts = (JSON.stringify(products));
				
					var regions = $('#regions').val();
					var region = (JSON.stringify(regions));
                       
					var productss = $('#dd1').val();    

					var mySelect = $('#mySelect').val();

					if(mySelect == "Dealer" || mySelect == "National")
					{
					
					}
					else
					{

                          $.ajax({   
                              
                                url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/day_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography=Regional&region="+region+"&product="+arrayproducts+"&inner_filter="+productss+"",
                              type:"get",
                                             data: "json",
                                           
                                      success: function(data)
                                      {    
                                     
                                 
                                      //var data = JSON.parse(data);	
                                      
                                      //alert(data);
                                      
                                      var data = JSON.parse(data);
									  mychart1(data);
                                      
                                      
                                        
                
                                     }
                
                
									}).done(function()  {
										setTimeout(function(){
												$("#overlay").fadeOut(300);
									
									
									
										},300);
									  });
                    	
       	
									}
                    
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
                
                
             

				function regionwisedata12(start,end)
				{
					
					
					var startdate = start;
					var enddate = end;

				
					   
					var products = $('#products').val();
					var arrayproducts = (JSON.stringify(products));
				
					var regions = $('#regions').val();
					var region = (JSON.stringify(regions));
					
					var mySelect = $('#mySelect').val();

					if(mySelect == "Dealer" || mySelect == "National")
					{
					
					}
					else
					{
					
					
					$.ajax({   
						
						url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/td_language_chart/?geography=Regional&region="+region+"&product="+arrayproducts+"&start_date="+startdate+"&end_date="+enddate+"",
					  type:"get",
									 data: "json",
								   
							  success: function(data)
							  {    
							 
						 
							  //var data = JSON.parse(data);	
							  
							  //alert(data);
							  
							  var data = JSON.parse(data);
							  regiondaywisechart(data);
							  
							  
								
			
							 }
			
			
							}).done(function()  {
								setTimeout(function(){
										$("#overlay").fadeOut(300);
							
							
							
								},300);
							  });
				

				
					
							}
					
					
				}




				


				var language_charts = null;
    
				function regiondaywisechart(datavalue)
				{    
			
					var ctx = document.getElementById('myChart3').getContext('2d');
					let abcd = 
					{
						type: 'pie',
						data: datavalue,
					}
					
					
					if(language_charts!=null){
						language_charts.destroy();
					}	
			
					var ctx = document.getElementById('myChart3').getContext('2d');
			
			
			
					language_charts = new Chart(ctx, abcd);
					
			
			}




		

			function dealerwisedata1(start,end)
			{
				
				var startdate = start;
				var enddate = end;				
				
				var products = $('#products').val();
				var arrayproducts = (JSON.stringify(products));
			
				var selectdealer = $('#selectdealer').val();
				var dealer_code = selectdealer.toString();

				var mySelect = $('#mySelect').val();

					if(mySelect == "Regional" || mySelect == "National")
					{
					
					}
					else
					{
				
				$.ajax({   
					
					 url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/get_stats/?start_date="+startdate+"&end_date="+enddate+"&product="+arrayproducts+"&geography=Dealer&dealer_code="+dealer_code+"",    
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
						   document.getElementById("hi5").innerHTML = avg_fuel_cost;
						   document.getElementById("hi6").innerHTML = avg_fuel_consumed;
						 
						 
							 
							
			
						 }
			
			
						}).done(function()  {
							setTimeout(function(){
									$("#overlay").fadeOut(300);
						
						
						
							},300);
						  });
				
			
						}
			
				   
		
				
			}



			function dealerwisedata2(start,end)
{

	
	var startdate = start;
	var enddate = end;
	
	
	var products = $('#products').val();
	var arrayproducts = (JSON.stringify(products));

	var selectdealer = $('#selectdealer').val();
	var dealer_code = selectdealer.toString();

	var ids = $('#filters').val();    


	var mySelect = $('#mySelect').val();



		if(mySelect == "Regional" || mySelect == "National")
		{
		
		}
		else
		{
     
	
var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

var collec5 = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography=Dealer&dealer_code="+dealer_code+"&product="+arrayproducts+"&inner_filter="+ids+"",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	  // (data);
	  	  
	  	  for(var i=0; i<obj.top_dealers.length; i++)
	           
	  	  {
	  		  
	  		  
	  		  
	  		  
	  		var ele5 = "";
    		
    		ele5 = inserting5;
        	
        	
	      
	        	var dealer_code =  (obj.top_dealers[i].dealer_code);
	        	var dealer_name =  (obj.top_dealers[i].dealer_name);
	        	var test_drives =  (obj.top_dealers[i].test_drives);
	        	var avg_time =  (obj.top_dealers[i].avg_testdrive_duration);
	        	
	        	   ele5 = ele5.replace("dealer_code",dealer_code);
	        	   
	        	   
	        	   
	        	  
        		  
        		  
	        	   var line =dealer_name ;
	               var res = line.substring(0, 15) + '...';
	                
	                 ele5 = ele5.replace("dealer_name",res);
	                 
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
	                 
	                 
	        		collec5 += ele5;
	        		
	        		
	        		
	           	}
      	
          $("#top_performer").html(collec5); 
      	
    
    }

}).done(function()  {
	setTimeout(function(){
			$("#overlay").fadeOut(300);



	},300);
  });
	
	
	
}
}




function dealerwisedata4(start,end)
{

	
	var startdate = start;
	var enddate = end;
	
	

	var products = $('#products').val();
	var arrayproducts = (JSON.stringify(products));

	var selectdealer = $('#selectdealer').val();
	var dealer_code = selectdealer.toString();

	var ids = $('#filters1').val();    


	var mySelect = $('#mySelect').val();

		if(mySelect == "Regional" || mySelect == "National")
		{
		
		}
		else
		{
	
var inserting6 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

var collec6 = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography=Dealer&dealer_code="+dealer_code+"&product="+arrayproducts+"&inner_filter="+ids+"",
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
				  document.getElementById('test_drives').innerHTML = "No. Of Test Drives";
				  ele6 = ele6.replace("test_drives",test_drives);
				  
				  }
			  else if(ids == "avg_time")
				  {
				  document.getElementById('test_drives').innerHTML = "Average Time";
				  ele6 = ele6.replace("test_drives",avg_time);
				  }                    
                 
                  
                 collec6 += ele6;
                 
                 
                 
                }
       
       $("#bottom_performer").html(collec6); 
      	
    
    }

}).done(function()  {
	setTimeout(function(){
			$("#overlay").fadeOut(300);



	},300);
  });
		
	
}
	
}




function dealerwisedata6(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	
	
	var products = $('#products').val();
	var arrayproducts = (JSON.stringify(products));

	var selectdealer = $('#selectdealer').val();
	var dealer_code = selectdealer.toString();

	var mySelect = $('#mySelect').val();

		if(mySelect == "Regional" || mySelect == "National")
		{
		
		}
		else
		{ 
	
	
var inserting = "<tr><td style=\"padding-top: 1%;padding-bottom: 1%;padding-right: 1%;\">feature</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">product</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">coverage  % </td></tr>";

var collec = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_features/?start_date="+startdate+"&end_date="+enddate+"&geography=Dealer&dealer_code="+dealer_code+"&product="+arrayproducts+"",
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

}).done(function()  {
	setTimeout(function(){
			$("#overlay").fadeOut(300);



	},300);
  });

		}

}


function dealerwisedata7(start,end)
{
	
	var startdate = start;
	var enddate = end;
	
	
	
    
	
	
var inserting1 = "<tr><td style=\"padding-top: 1%;padding-bottom: 1%;padding-right: 1%;\">feature</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">product</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">coverage  % </td></tr>";

var collec1 = "";
	
var products = $('#products').val();
var arrayproducts = (JSON.stringify(products));

var selectdealer = $('#selectdealer').val();
var dealer_code = selectdealer.toString();

var mySelect = $('#mySelect').val();

	if(mySelect == "Regional" || mySelect == "National")
	{
	
	}
	else
	{		
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_features/?start_date="+startdate+"&end_date="+enddate+"&geography=Dealer&dealer_code="+dealer_code+"&product="+arrayproducts+"",
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
}).done(function()  {
	setTimeout(function(){
			$("#overlay").fadeOut(300);



	},300);
  });

	}

}



function dealerwisedata8(start,end)
{
	var startdate = start;
	var enddate = end;
	
	
	var products = $('#products').val();
	var arrayproducts = (JSON.stringify(products));

	var selectdealer = $('#selectdealer').val();
	var dealer_code = selectdealer.toString();

	var productss = $('#dd').val();    


	var mySelect = $('#mySelect').val();

		if(mySelect == "Regional" || mySelect == "National")
		{
		
		}
		else
		{
       

          $.ajax({   
              
      		  url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/product_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography=Dealer&dealer_code="+dealer_code+"&product="+arrayproducts+"&inner_filter="+productss+"",
    		  type:"get",
        		       	  data: "json",
        		       	
        		 	 success: function(data)
        		 	 {    
        		 	
        		 
        		 	 //var data = JSON.parse(data);	
        		 	 
        		 	 //alert(data);
        		 	 
        		 	 var data = JSON.parse(data);
        		 	 
        		 	 console.log(data);
        		 	
        		 	 productgraph(data);
        		 		

        		 	}


        		}).done(function()  {
					setTimeout(function(){
							$("#overlay").fadeOut(300);
				
				
				
					},300);
				  });
		
	
			}	
}




var chart1=null;

    
function productgraph(datavalue)
{
	
	//alert(datavalue);
	
	if(chart1!=null){
		chart1.destroy();
	}	


	var ctx = document.getElementById('myChart').getContext('2d');
	chart1 = new Chart(ctx, {
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
			

	}});
	

}




function dealerwisedata10(start,end)
{
	var startdate = start;
	var enddate = end;
	

     	
	var products = $('#products').val();
	var arrayproducts = (JSON.stringify(products));

	var selectdealer = $('#selectdealer').val();
	var dealer_code = selectdealer.toString();

	var productss = $('#dd1').val();    


	var mySelect = $('#mySelect').val();

		if(mySelect == "Regional" || mySelect == "National")
		{
		
		}
		else
		{    

       	
      	$.ajax({   
              
    		  url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/day_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography=Dealer&dealer_code="+dealer_code+"&product="+arrayproducts+"&inner_filter="+productss+"",
  		  type:"get",
      		       	  data: "json",
      		       	
      		 	 success: function(data)
      		 	 {    
      		 	
      		
      		 	 
      		 	 var data = JSON.parse(data);
      		 	 daygraphcharttt(data);
      		 	 
      		 	 
      		 	   

      		 	}


			}).done(function()  {
				setTimeout(function(){
						$("#overlay").fadeOut(300);
			
			
			
				},300);
			  });	
	
	
}
}



var chart=null;

    
function daygraphcharttt(datavalue)
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





	function dealerwisedata12(start,end)
				{
					
					
					var startdate = start;
					var enddate = end;

				
					   
					var products = $('#products').val();
					var arrayproducts = (JSON.stringify(products));
				
					var selectdealer = $('#selectdealer').val();
					var dealer_code = selectdealer.toString();
	
					var mySelect = $('#mySelect').val();
	
						if(mySelect == "Regional" || mySelect == "National")
						{
						
						}
						else
						{
					
					
					
					$.ajax({   
						
						url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/td_language_chart/?geography=Dealer&dealer_code="+dealer_code+"&product="+arrayproducts+"&start_date="+startdate+"&end_date="+enddate+"",
					  type:"get",
									 data: "json",
								   
							  success: function(data)
							  {    
							 
						 
							  //var data = JSON.parse(data);	
							  
							  //alert(data);
							  
							  var data = JSON.parse(data);
							  dealerdaywisechart(data);
							  
							  
								
			
							 }
			
			
						}).done(function()  {
					setTimeout(function(){
							$("#overlay").fadeOut(300);
				
				
				
					},300);
				  });
				
	
						}	
				}


				var language_charts = null;
    
				function dealerdaywisechart(datavalue)
				{    
			
					var ctx = document.getElementById('myChart3').getContext('2d');
					let abcd = 
					{
						type: 'pie',
						data: datavalue,
					}
					
					
					if(language_charts!=null){
						language_charts.destroy();
					}	
			
					var ctx = document.getElementById('myChart3').getContext('2d');
			
			
			
					language_charts = new Chart(ctx, abcd);
					
			
			}
	    

	    


	    
	 








