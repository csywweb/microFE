
var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");


menu1.addEventListener('click', function(e) {
    history.pushState(null, '', 'menu1')
}, false);

menu2.addEventListener('click', function(e) {
    history.pushState(null, '', 'menu2')
}, false);
menu3.addEventListener('click', function(e) {
    history.pushState(null, '', 'menu3')
}, false);

window.addEventListener('onpopstate', function() {
    console.log(111)
})
window.onpopstate = function(){
    console.log(213)
}