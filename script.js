
let onLoad = gsap.timeline({defaults: {
    opacity:0,
    ease: "power2.out",
}});

onLoad.from(".textContainer h1",{
duration:0.5,
x:-20,
delay:0.5,

})

.from(".dot",{
 duration: 0.5, 
 scale:3,
 rotation: 360,
 ease: "back.out"
 
 
 

},"-=0.1")

.from(".presentation",{
    duration: 0.6,
    scale: 0.99,
    

})

.from(".h2Project",{
   
duration:0.5,
x:-20,
},"<+=0.3")

.from(".firstProject",{
    duration: 0.6,
    scale: 0.99,
    
},"<+=0.3")

.from("nav ul li",{
    duration: 0.6,
    scale: 0.99, 
    stagger: 0.3,
},"<+=0.3");



let scroll = gsap.timeline({defaults: {
    opacity:0,
    ease: "power2.out",
},

scrollTrigger:{
trigger:".secondProject",
start: "top-=400 center",


}

});

scroll.from(".secondProject",{

    duration: 0.6,
    scale: 0.99,
    
});






let scroll2 = gsap.timeline({defaults: {
    opacity:0,
    ease: "power2.out",
},

scrollTrigger:{
trigger:".thirdProject",
start: "top-=400 center",


}

});

scroll2.from(".thirdProject",{

    duration: 0.6,
    scale: 0.99,
    
});







let scroll3 = gsap.timeline({defaults: {
    opacity:0,
    ease: "power2.out",
},

scrollTrigger:{
trigger:".aboutSection",
start: "top-=400 center",


}

});

scroll3.from(".aboutSection, .contactSection",{

    duration: 0.6,
    scale: 0.99,
    
});




let menu = document.querySelector(".material-symbols-rounded.menu");
let navigation = document.querySelector("#mobileNavigation");
let close = document.querySelector(".material-symbols-rounded.close");

let anchors = document.querySelectorAll("#mobileNavigation li");

menu.addEventListener("click",()=>{
navigation.style.display = "flex";
});

close.addEventListener("click",()=>{
    navigation.style.display = "none";   
})

for(anchor of anchors){
anchor.addEventListener("click",()=>{
    navigation.style.display = "none";    
})
};

window.onresize=()=>{
setTimeout(()=>location.reload(),3000);
  
};