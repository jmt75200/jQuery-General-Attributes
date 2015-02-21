$(function(){
/* .prop() */




/* .attr() */
  $(".btn").click(function (){
    $("img").attr("src", "http://placekitten.com/g/200/500");
  $( ".show" ).text( $( "img" ).attr( "title" ) );
  });


  $(".remove").click(function(){
    $("img").removeAttr("src");
  });

/* .val() */
/* getting and setting values */
  function findVals(){
    var singleVal = $( "#single" ).val();   
    $(".singles").html( "<b>Has</b> " + singleVal);
    
    var multipleVal = $( "#multiples" ).val() || []; 
    $(".multiples").html( "<b>Print All The Thinngs:</b> " +     multipleVal.join(" , ") + " <b>Oh My!</b>" );
  }
  
  $("select").change( findVals );
  
  findVals();

  /* using val to set value of input*/
  $("button").click(function(){
    var text = $( this ).text();
    $( "input" ).val( text );
  });

  /* .attr() + .val() demo */
  $(".btn").click(function(){
      var userInput = $("input").val();
      console.log('userInput', userInput);
      return $("img").attr("src", userInput);
    });
     
    $(".remove").click(function(){
      $("img").removeAttr("src");
    });

});

