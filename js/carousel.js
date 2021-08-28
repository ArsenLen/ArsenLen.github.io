jQuery(function() {
  $('.owl-carousel').owlCarousel({
    items: 1,
    singleItem: true,
    loop:true,
    margin:10,
    nav:true,
    URLhashListener:true,
    autoplayHoverPause:false,
    startPosition: 'URLHash',
})
});
