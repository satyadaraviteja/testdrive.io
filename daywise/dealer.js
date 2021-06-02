


// day wise region , product and innerfilters hardcoded

function daygraph(start,end)
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
          
          var dealer_code  = productss.toString();
          
       
     	
       

       	
      	$.ajax({   
              
    		  url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/day_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&dealer_code="+dealer_code+"&inner_filter=test_drives&product=[%22Yaris%22,%20%22Glanza%22]",
  		  type:"get",
      		       	  data: "json",
      		       	
      		 	 success: function(data)
      		 	 {    
      		 	
      		 
      		 	 //var data = JSON.parse(data);	
      		 	 
      		 	 //alert(data);
      		 	 
      		 	 var data = JSON.parse(data);
      		 	 daygraphchart(data);
      		 	 
      		 	 
      		 	   

      		 	}


        		});
	});		
	});		
	
	
}




function daygraphchart(datavalue)
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



//daywise wise  , product and innerfilters are not  hardcoded

function daygraph1(start,end)
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
       
       var dealer_code  = productss.toString();
       
   	
   	$("#dd1").change(function(){
	        var countries = [];
	        $.each($(".dropdown1 option:selected"), function(){            
	            countries.push($(this).val());
	        });
	       var productss = countries;
	       
	           	
   	$.ajax({   
           
 		  url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/day_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&dealer_code="+dealer_code+"&inner_filter="+productss+"&product=[%22Yaris%22,%20%22Glanza%22]",
		  type:"get",
   		       	  data: "json",
   		       	
   		 	 success: function(data)
   		 	 {    
   		 	
   		 
   		 	 //var data = JSON.parse(data);	
   		 	 
   		 	 //alert(data);
   		 	 
   		 	 var data = JSON.parse(data);
   		 	daygraphchart1(data);
   		 	 
   		 	 
   		 	   

   		 	}


     		});
	});		
	});		
	});	
	
	
}


//bottom -performer innerfilters implementations products -hardcoded



	  function daygraphchart1(datavalue)
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
	    

	    

