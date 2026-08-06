// Minimal JS: mobile nav toggle + simple carousel
document.addEventListener('DOMContentLoaded',function(){
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click',function(){
    nav.classList.toggle('open');
  });
  if(nav){
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){
        nav.classList.remove('open');
      });
    });
  }

  // Simple carousel: scroll by card width
  var prev = document.querySelector('.carousel-btn.prev');
  var next = document.querySelector('.carousel-btn.next');
  var track = document.querySelector('.carousel-track');
  if(track){
    var card = track.querySelector('.model-card');
    var step = card ? card.offsetWidth + 12 : 220;
    prev && prev.addEventListener('click',function(){ track.scrollBy({left:-step,behavior:'smooth'})});
    next && next.addEventListener('click',function(){ track.scrollBy({left:step,behavior:'smooth'})});
    window.addEventListener('resize',function(){
      var c = track.querySelector('.model-card');
      step = c ? c.offsetWidth + 12 : step;
    })
  }
});
