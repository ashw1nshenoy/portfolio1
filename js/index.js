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
/*Dark Mode*/
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}     
/*movetop*/
function moveTop(){
    window.location.href="#top"
}