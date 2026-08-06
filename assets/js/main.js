// Minimal JS: mobile nav toggle + simple carousel
document.addEventListener('DOMContentLoaded',function(){
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('site-nav');

  function setMenuState(isOpen){
    if(!nav || !navToggle){ return; }
    nav.classList.toggle('open', isOpen);
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  }

  navToggle && navToggle.addEventListener('click',function(){
    setMenuState(!nav.classList.contains('open'));
  });

  if(nav){
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){
        setMenuState(false);
      });
    });
  }

  document.addEventListener('click',function(event){
    if(!nav || !navToggle){ return; }
    if(nav.classList.contains('open') && !nav.contains(event.target) && !navToggle.contains(event.target)){
      setMenuState(false);
    }
  });

  window.addEventListener('resize',function(){
    if(window.innerWidth > 900){
      setMenuState(false);
    }
  });

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
