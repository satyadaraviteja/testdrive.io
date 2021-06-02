


function bottom_features_d(start,end)
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
	   stattriggers2(start,end);
	   }    
  
       
       $("#selectdealer").change(function(){
           var countries = [];
           $.each($(".dealers option:selected"), function(){            
               countries.push($(this).val());
           });
          var productss = countries;
          
		  var dealer_code = productss.toString();
           
           
         
	
          var inserting1 = "<tr><td>feature</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">product</td><td style=\"padding-right: 1%;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;\">coverage</td></tr>";

          var collec1 = "";


          			$.ajax({   
          		        
          		url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/top_bottom_features/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&dealer_code="+dealer_code+"&product=[%22Yaris%22,%20%22Glanza%22]",
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
			
       
       });});



}