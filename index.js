
$(document).ready(function(){
  $("#one1").hover(function(){
    $("#one").toggle()
  })
})
$(document).ready(function(){
  $("#two2").hover(function(){
    $("#two").toggle()
  })
})
$(document).ready(function(){
  $("#three3").hover(function(){
    $("#three").toggle()
  })
})
$(document).ready(function(){
  $("#four4").hover(function(){
    $("#four").toggle()
  })
})
$(document).ready(function(){
  $("#five5").hover(function(){
    $("#five").toggle()
  })
})

$(document).ready(function(){
  $("#six6").hover(function(){
    $("#six").toggle()
  })
})
$(document).ready(function(){
  $("#seven7").hover(function(){
    $("#seven").toggle()
  })
})
$(document).ready(function(){
  $("#eight8").hover(function(){
    $("#eight").toggle()
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
      var name = $("#Name").val();
      var email = $("#inputEmail").val();
      var message = $("#message").val();
      alert(`Hello ${name}. Your Email address is ${email}.Just to be sure your
      Message is : ${message}`)
    });
  });
















