$(document).ready(function () {
    $(".klundesaga-title").click(function (e) {
    var klundesagaitem = $(this).attr("data-tab");
    $("#" + klundesagaitem)
    .slideToggle()
    .parent()
    .siblings()
    .find(".klundesaga-content")
    .slideUp();
  
    $(this).toggleClass("active-title");
    $("#" + klundesagaitem)
    .parent()
    .siblings()
    .find(".klundesaga-title")
    .removeClass("active-title");
  
    $("i.fa-chevron-down", this).toggleClass("chevron-top");
    $("#" + klundesagaitem)
    .parent()
    .siblings()
    .find(".klundesaga-title i.fa-chevron-down")
    .removeClass("chevron-top");
    });
    });


    let menuIcon = document.getElementById('menu-icon')
    let menu = document.querySelector('.menu')
    let close = document.getElementById('close')
    let header = document.querySelector('.header')

    menuIcon.onclick = ()=>{
        if ( menu.style.display = 'none') {
            menu.style.display = 'block';            
        }
      else{
        
      }
    }

close.onclick = ()=>{
    menu.style.display = 'none';
   
}
// window.onclick = ()=>{
//     menu.style.display = 'none';

// }

window.onclick = function(e) {
    if (e.target == header) {
        menu.style.display = "none";
    }
  }