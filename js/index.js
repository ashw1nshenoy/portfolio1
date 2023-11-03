/*Loader*/
window.addEventListener("load",()=>{
    document.querySelector(".loader").classList.add("loaderhide")
    document.querySelector(".loader").addEventListener("transitionend",()=>{
        document.body.removeChild(document.querySelector(".loader"))
    })
})
var typed = new Typed('#element', {
    strings: [' Welcome : )', 'I am Ashwin Shenoy',' I am a Learner','I am a Web Developer'],
    typeSpeed: 100, loop:true,
  });  
/*Social Links*/
function resume(){
    window.open("Images/Resume-Ashwin Shenoy.pdf")
}
function whatsapp(){
    window.open("https://wa.me/919449185385?text=Hi Ashwin ! I came here through ur Website")
}
function instagram(){
    window.open("https://www.instagram.com/___ashwin007_/")
}
function linkedin(){
    window.open("https://www.linkedin.com/in/ashwin-shenoy-3937b1228")
}
function github(){
    window.open("https://github.com/ashw1nshenoy")
}
/*Projects*/
function qr(){
    window.open("https://github.com/ashw1nshenoy/Qrcode",'_blank')
}
function todo(){
    window.open(" https://ashw1nshenoy.github.io/TODOLIST/",'_blank')
}
/*Dark Mode*/
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}     
/*movetop*/
function moveTop(){
    window.location.href="#top"
}
/*Custom Notification*/
// function thanksonsubmit(){
// var close = document.getElementsByClassName("closebtn");
// var i;

// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function(){
//     var div = this.parentElement;
//     div.style.opacity = "0";
//     setTimeout(function(){ div.style.display = "none"; }, 600);
//   }
// }
// }
/*Scroll reveal*/
ScrollReveal({
    reset:true,
    duration:2000,
    delay:25,
})
ScrollReveal().reveal('.content img',{delay:500,origin:'top',interval:200,distance:'45px'})
ScrollReveal().reveal('.sec1 img',{delay:400,origin:'bottom',interval:200,distance:'155px'})
ScrollReveal().reveal('.sec1 h2',{delay:400,origin:'right',interval:200,distance:'45px'})
ScrollReveal().reveal('.sec1 h3',{delay:400,origin:'left',interval:200,distance:'45px'})
ScrollReveal().reveal('.sec2',{delay:500,origin:'top',interval:200,distance:'15px'})
ScrollReveal().reveal('.sec3',{delay:400,origin:'bottom',interval:200,distance:'15px'})
ScrollReveal().reveal('.sec4',{delay:400,origin:'top',interval:200,distance:'15px'})
ScrollReveal().reveal('.sec5 ',{delay:400,origin:'bottom',interval:200,distance:'15px'})
ScrollReveal().reveal('.sec6',{delay:400,origin:'top',interval:200,distance:'15px'})