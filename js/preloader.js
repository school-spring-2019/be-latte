$(document).ready (function () {
      NProgress.start ();
      NProgress.set (0.4);
      setTimeout(function () {
        NProgress.done ();
      }, 4000);
    });
var hellopreloader = document.getElementById("hellopreloader_preload");
function fadeOutnojquery(el){
  el.style.opacity = 1;
  var interhellopreloader = setInterval(function()
    {el.style.opacity = el.style.opacity - 0.05;
      if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);
        hellopreloader.style.display = "none";}},16);
}
window.onload = function(){
  setTimeout(function(){
    fadeOutnojquery(hellopreloader);
  },1000);
};