var main =document.querySelector(".main")


function homepageAnimation(){
    gsap.set(".slidesm",{ scale:5})

var syc=gsap.timeline( {scrollTrigger:{
    trigger:".home",

    start:"top top",
    scrub: 2,
    end:"bottom bottom",
   
}})
syc
.to(".videodiv",{
   
    '--clip':"0%",
    ease:Power2,
   
},"a")

.to(".slidesm",{
    scale:1,
    ease:Power2,
   
},"a")
.to(".lft",{
    xPercent:-10,
    stagger:.03,
    ease:Power4,
},"b")
.to(".rgt",{
    xPercent:10,
    stagger:.03,
    ease:Power4,
},"b")
}



(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();





homepageAnimation();

