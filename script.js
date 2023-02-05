$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

  function sendmail(){
    let contdetail={};
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var subject=document.getElementById("subject").value;
    var message=document.getElementById("message").value;

    contdetail.name=name;
    contdetail.email=email;
    contdetail.subject=subject;
    contdetail.message=message;
    
    console.warn(contdetail);
    var data=[];
    data.push(name);
    data.push(email);
    data.push(subject);
    data.push(message);
    

    var data_json=JSON.stringify(data);
    
    var file=new Blob([data_json],{type:"text"});
    
    var anchor=document.createElement("a");
    anchor.href=URL.createObjectURL(file);
    anchor.download=("./images","save.txt");
    anchor.click();
    // alert("test");


  }
  