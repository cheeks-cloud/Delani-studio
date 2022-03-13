
$(document).ready(function(){
  $("#one1").hover(function(){
    $("#one").fadeIn()
  })
})
$(document).ready(function(){
  $("#two2").hover(function(){
    $("#two").fadeIn()
  })
})
$(document).ready(function(){
  $("#three3").hover(function(){
    $("#three").fadeIn()
  })
})
$(document).ready(function(){
  $("#four4").hover(function(){
    $("#four").fadeIn()
  })
})
$(document).ready(function(){
  $("#five5").hover(function(){
    $("#five").fadeIn()
  })
// })
$(document).ready(function(){
  $("#six6").hover(function(){
    $("#six").fadeIn()
  })
})
$(document).ready(function(){
  $("#seven7").hover(function(){
    $("#seven").fadeIn()
  })
})
$(document).ready(function(){
  $("#eight8").hover(function(){
    $("#eight").fadeIn()
  })
})
$(document).ready(function(){
  $(".clickable").click(function(){
    $(".hide").toggle()
    $(".show").toggle()
    }) 
  })
$(document).ready(function(){
  $(".clickableS").click(function(){
    $(".hideS").toggle()
    $(".showS").toggle()
    }) 
  })
  $(document).ready(function(){
    $(".clickables").click(function(){
      $(".hides").toggle()
      $(".shows").toggle()
      }) 
    })
  $(document).ready(function(){
    $("#submit").click(function(e){
      e.preventDefault()
      var name = $("#Name").val()
      var email = $("#inputEmail").val()
      var message = $("#message").val()
      alert(`Hello ${name} Your Email address is ${email}.Just to be sure your
      message is : ${message}`)
    });  
  });