
// top_bot1stcase only dealer is sent ..

function top_bot1stcase(start,end)
{

	
	var startdate = start;
	var enddate = end;
	
	
	$("#mySelect").change(function(){
        var countries = [];
        $.each($(".selectBox option:selected"), function(){            
            countries.push($(this).val());
        });
       var geography = countries;
       
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
          
          
          
        

       
	
var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

var collec5 = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&dealer_code="+dealer_code+"&product=[%22Yaris%22,%20%22Glanza%22]&inner_filter=test_drives",
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
        		  
        		   ele5 = ele5.replace("test_drives",avg_time);
        		  
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


//top_bot2ndcase  dealer & inner filter is sent ..

function top_bot2ndcase(start,end)
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
          
          
          
          $("#filters").change(function(){
 	           var countries = [];
 	           $.each($(".filt option:selected"), function(){            
 	               countries.push($(this).val());
 	           });
 	          var ids = countries;
	
          
        

       
	
var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

var collec5 = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&dealer_code="+dealer_code+"&product=[%22Yaris%22,%20%22Glanza%22]&inner_filter="+ids+"",
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
	        	   
	        	   
	        	   
	        	  
        		   ele5 = ele5.replace("test_drives",test_drives);
        		  
        		   ele5 = ele5.replace("test_drives",avg_time);
        		  
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
	});		
	
	
}

//   top_bot3rdcase only products are sent


function top_bot3rdcase(start,end)
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
	       
	 	 // alert(arrayproducts);


       
	
var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

var collec5 = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&product="+[arrayproducts]+"&inner_filter=test_drives",
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
	        	   
	        	   
	        	   
	        	  
        		   ele5 = ele5.replace("test_drives",test_drives);
        		  
        		   ele5 = ele5.replace("test_drives",avg_time);
        		  
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

// top_bot4rdcase products and inner filter are sent

function top_bot4rdcase(start,end)
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
	       
	 	  // alert(arrayproducts);

	 	   $("#filters").change(function(){
 	           var countries = [];
 	           $.each($(".filt option:selected"), function(){            
 	               countries.push($(this).val());
 	           });
 	          var ids = countries;
	
       
	
var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

var collec5 = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&product="+[arrayproducts]+"&inner_filter="+ids+"",
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



//top-bottom-dealers region , product and innerfilters hardcoded

function top_bot(start,end)
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
  	       
  	 	//  alert(arrayproducts);

       
	
var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

var collec5 = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&dealer_code="+dealer_code+"&product="+[arrayproducts]+"&inner_filter=test_drives",
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
	        	   
	        	   
	        	   
	        	  
        		   ele5 = ele5.replace("test_drives",test_drives);
        		  
        		   ele5 = ele5.replace("test_drives",avg_time);
        		  
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
	});		
	
	
}


// top-bottom -performer innerfilters implementations products -hardcoded




function top_bot1(start,end)
{

	
	var startdate = start;
	var enddate = end;
	
	
	$("#mySelect").change(function(){
        var countries = [];
        $.each($(".selectBox option:selected"), function(){            
            countries.push($(this).val());
        });
       var geography = countries;
       
      //(geography);
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
	
  	       
  	       
  	     
  	       $("#filters").change(function(){
  	           var countries = [];
  	           $.each($(".filt option:selected"), function(){            
  	               countries.push($(this).val());
  	           });
  	          var ids = countries;
	
	
var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

var collec5 = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&dealer_code="+dealer_code+"&product="+[arrayproducts]+"&inner_filter="+ids+"",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	  //alert(data);
	  	  
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
	});		
	});		
	
}

//top-bottom -performer innerfilters implementations products


function top_bot2(start,end)
{

	
	var startdate = start;
	var enddate = end;
	
	
	$("#mySelect").change(function(){
        var countries = [];
        $.each($(".selectBox option:selected"), function(){            
            countries.push($(this).val());
        });
       var geography = countries;
       

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
       
       
       $("#filters").change(function(){
           var countries = [];
           $.each($(".filt option:selected"), function(){            
               countries.push($(this).val());
           });
          var ids = countries;
       
       
	
	
	
          var inserting5 = "<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

          var collec5 = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&dealer_code="+dealer_code+"&product="+[arrayproducts]+"&inner_filter="+ids+"",
		type:"get",
	    data: "json",
	        	
	  	 success: function(data)
	  	 {    
	  	  
	  	  var obj = JSON.parse(data);
	
	  	  //alert(data);
	  	  
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
	});			});	
	
}
















