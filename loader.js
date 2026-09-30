(function(){
function uri(b){return "data:image/jpeg;base64,"+b;}
var hero=document.querySelector(".hero-bg");
if(hero&&window.__HERO){hero.style.backgroundImage="url('"+uri(window.__HERO)+"')";}
var cards={"brief-dubai":window.__HERO,"brief-abudhabi":window.__ABUDHABI,"brief-rak":window.__RAK};
Object.keys(cards).forEach(function(c){
  var el=document.querySelector("."+c);
  if(el&&cards[c]){el.style.backgroundImage="linear-gradient(180deg,rgba(10,14,26,.15),rgba(10,14,26,.55)),url('"+uri(cards[c])+"')";}
});
var photo=document.querySelector(".about-img");
if(photo&&window.__USMAN){photo.src=uri(window.__USMAN);}
})();