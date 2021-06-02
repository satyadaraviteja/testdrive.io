


//top-bottom-dealers region , product and innerfilters hardcoded

function bottomreg(start,end)
{

//	alert("jfhgbjdf");
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
  
       
       $("#regions").change(function(){
           var countries = [];
           $.each($(".regions option:selected"), function(){            
               countries.push($(this).val());
           });
          var productss = countries;
          
          var regions = (JSON.stringify(productss));
          
       // (regions);
       

          

          var inserting6 ="<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

          	
          	var collec6 = "";


$.ajax({   
    
	url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&region="+regions+"&product=[%22Yaris%22,%20%22Glanza%22]&inner_filter=test_drives",
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
	});		
	});		
	
	
}


// top-bottom -performer innerfilters implementations products -hardcoded




function bottomreg1(start,end)
{

	//alert("jfhgbjdf");

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
  
       
       $("#regions").change(function(){
           var countries = [];
           $.each($(".regions option:selected"), function(){            
               countries.push($(this).val());
           });
          var productss = countries;
          
          var regions = (JSON.stringify(productss));
          
       // (regions);
       
       
       $("#filters1").change(function(){
           var countries = [];
           $.each($(".filt option:selected"), function(){            
               countries.push($(this).val());
           });
          var ids = countries;
       
       
          // (ids);
	
	

          

          var inserting6 ="<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

          	
          	var collec6 = "";


$.ajax({   
    
	url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&region="+regions+"&product=[%22Yaris%22,%20%22Glanza%22]&inner_filter="+ids+"",
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

		        	
					if(ids == "test_drives")
					{
					document.getElementById('testdrives1').innerHTML = "No. Of Test Drives";
					ele6 = ele6.replace("test_drives",test_drives);
					
					}
				else if(ids == "avg_time")
					{
					document.getElementById('testdrives1').innerHTML = "Average Time";
					ele6 = ele6.replace("test_drives",obj.bottom_dealers[i].avg_testdrive_duration);
					}
				  
				  ele6 = ele6.replace("dealer_code",dealer_code);
				  
				  
				  if(dealer_name == null)
				  {
					 ele6 = ele6.replace("dealer_name",dealer_name)
				  }
				  else
				  {
					 var res = dealer_name.substring(0, 15) + '...';
				   
				   ele6 = ele6.replace("dealer_name",res);
				  }
		        		collec6 += ele6;
		        		
		        		
		        		
		           	}
	      	
	          $("#bottom_performer").html(collec6); 
	      	
	    
    
    }

});
	});		
	});		
	});		
	
}

//top-bottom -performer innerfilters implementations products

/*
function bottomreg2(start,end)
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
  
       
       $("#regions").change(function(){
           var countries = [];
           $.each($(".regions option:selected"), function(){            
               countries.push($(this).val());
           });
          var productss = countries;
          
          var regions = (JSON.stringify(productss));
          
       // (regions);
          
          
          $("#products").change(function(){
    	        var countries = [];
    	        $.each($(".products option:selected"), function(){            
    	            countries.push($(this).val());
    	        });
    	       var productss = countries;
    	       
    	       var arrayproducts = (JSON.stringify(productss));
       
       
       $("#filters1").change(function(){
           var countries = [];
           $.each($(".filt option:selected"), function(){            
               countries.push($(this).val());
           });
          var ids = countries;
       
       
          // (ids);
	
	

          

          var inserting6 ="<tr><td>dealer_code</td><td>dealer_name</td><td>test_drives</td></tr>";

          	
          	var collec6 = "";


$.ajax({   
    
	url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_dealers/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&dealer_code="+dealer_code+"&product=[%22Yaris%22,%20%22Glanza%22]&inner_filter=test_drives",
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
	});			});	
	
}


*/













