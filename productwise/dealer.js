
// product wise region , product and innerfilters hardcoded

function productwisegraph(start,end)
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
              
      		  url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/product_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&dealer_code="+dealer_code+"&inner_filter=test_drives",
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


        		});
	});		
	});		
	
	
}


//bottom -performer innerfilters implementations products -hardcoded




function productgraph(datavalue)
{
	
	//alert(datavalue);

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
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
    	      
    	      
    	   
    	      
    	      
}

});

}






//product wise region , product and innerfilters hardcoded

function productwisegraph1(start,end)
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
       
       $("#dd").change(function(){
	        var countries = [];
	        $.each($(".dropdown option:selected"), function(){            
	            countries.push($(this).val());
	        });
	       var productss = countries;
	       
  	
    


	    	$.ajax({   
	            
	  		  url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/product_wise_chart/?start_date="+startdate+"&end_date="+enddate+"&geography="+geography+"&dealer_code="+dealer_code+"&inner_filter="+productss+"",
			  type:"get",
	    		       	  data: "json",
	    		       	
	    		 	 success: function(data)
	    		 	 {    
	    		 	
	    		 
	    		 	 //var data = JSON.parse(data);	
	    		 	 
	    		 //	 alert(data);
	    		 	 
	    		 	 var data = JSON.parse(data);
	    		 	 
	    		 	 console.log(data);
	    		 	
	    		 	productgraph1(data);
	    		 		

     		 	}


     		});
	});		
	});		
	});	
	
	
}


//bottom -performer innerfilters implementations products -hardcoded



	  function productgraph1(datavalue)
	    {
	    	
	    	//alert(datavalue);
	    
	    var ctx = document.getElementById('myChart').getContext('2d');
	    var myChart = new Chart(ctx, {
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
	        	      
	        	      
	           	   
	        	      
	        	      
	         }
	          
	          });
	          
			  }
			  

			  function dealerdaywise(start,end)
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
				  
				  $.ajax({   
					  
					  url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/td_language_chart/?geography="+geography+"&dealer_code="+dealer_code+"&product=[%22Yaris%22,%20%22Glanza%22]&start_date="+startdate+"&end_date="+enddate+"",
					type:"get",
								   data: "json",
								 
							success: function(data)
							{    
						   
					   
							//var data = JSON.parse(data);	
							
							//alert(data);
							
							var data = JSON.parse(data);
							dealerdaywiseschart(data);
							
							
							  
		  
						   }
		  
		  
				  }); }); });
			  
  
				  
			  }


			  var language_charts = null;
  
			  function dealerdaywiseschart(datavalue)
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
	    
	    
	 