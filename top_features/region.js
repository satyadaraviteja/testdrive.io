

//top -features



function top_features(start,end)
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
  
       
       $("#regions").change(function(){
           var countries = [];
           $.each($(".regions option:selected"), function(){            
               countries.push($(this).val());
           });
          var productss = countries;
          
          var regions = (JSON.stringify(productss));
	
	
var inserting = "<tr><td style=\"padding-top: 1%;padding-bottom: 1%;padding-right: 1%;\">feature</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">product</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">coverage  % </td></tr>";

var collec = "";
	
			
			$.ajax({   
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_features/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&region="+regions+"&product=[%22Yaris%22,%20%22Glanza%22]",
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

});});});



}



//top-features - product




//top -features



/*function top_features1(start,end)
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

     
     $("#regions").change(function(){
         var countries = [];
         $.each($(".regions option:selected"), function(){            
             countries.push($(this).val());
         });
        var productss = countries;
        
        var regions = (JSON.stringify(productss));
        
        
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
		        
url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_features/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&region="+regions+"&product="+[arrayproducts]+"",
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

});});});});



}

*/












