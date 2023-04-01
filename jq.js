/* window.addEventListener("load",init);
function init(){

--------------

} 
window.addEventListener("load",function(){

})*/
$(document).ready(function () {
  /*ide írun mindent amit eddig az initbe*/
  const obj = {
    nev: "jakab",
  };

  const ARTICLE = $("article");
  ARTICLE.append("<h1>Jqueryvel irtam bele</h1>")
  ARTICLE.on("click",function(){
    console.log(event.target)
  })
});
