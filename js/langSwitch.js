$(".langswitcher a").on("click",function(e){
    e.preventDefault();
    $(".langswitcher li").removeClass("active");
    $("html").attr("lang",$(this).data("lang"));
    $(this).parent().addClass("active");
  });