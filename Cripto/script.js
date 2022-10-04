

gsap.registerPlugin(ScrollTrigger);

let bitcoin ="https://api.coincap.io/v2/assets/bitcoin";
let ethereum ="https://api.coincap.io/v2/assets/ethereum";
let tether ="https://api.coincap.io/v2/assets/tether";
let cardano = "https://api.coincap.io/v2/assets/cardano";
let litecoin = "https://api.coincap.io/v2/assets/litecoin";
let solana = "https://api.coincap.io/v2/assets/solana";

let coinName = document.querySelector("#coinName");
let convertion = document.querySelector("#convertion");
let value = document.querySelector("#value");
let graph = document.querySelector("#graph");

let counter=0;

async function getData(dataUrl){

let result= await fetch(dataUrl);
let data= await result.json();


displayData(data);
}


function displayData(data){
     coinName.innerHTML = data.data.name+' <span class="material-symbols-sharp arrow  next"> arrow_forward_ios </span>';
    let symbol = data.data.symbol;
    let price = data.data.priceUsd;
    let change = data.data.changePercent24Hr;


    let color = "";
    let typeGraph ="trending_up";
    if(change<0){
        typeGraph="trending_down";
        change = change * -1;
        color = "red";

    }


    price = Number(price).toFixed(2);
    change = Number(change).toFixed(2);

    // convertion.innerHTML =' 1 '+symbol+' &#8644; '+price+' $'+'
    // <div class="value" id="value">
    // <span class="material-symbols-sharp arrow" id="graph">'+
    //     typeGraph+'
    // </span> '+ 'change+"%"';

    convertion.innerHTML =' 1 '+symbol+' &#8644; '+price+' $'+'<div class="value '+color+'" id="value"><span class="material-symbols-sharp arrow" id="graph">'+typeGraph+'</span> '+ change+'%';



    


    goOut.progress(0);
    goOut.pause();
    goIn.progress(0);
    goIn.play();
   
   
   
   
    console.log(price+data.data.name);
    console.log(change);
}

function select(){



    counter++;
    console.log(counter);
    
    if(counter>5){
        counter=0;
    }
    
        
    if(counter==0){
        getData(bitcoin);
    }
    
    if(counter==1){
        getData(ethereum);
    }
    
    
    if(counter==2){
        getData(tether);
    }
    
    
    if(counter==3){
        getData(cardano);
    }
    
    
    
    if(counter==4){
        getData(litecoin);
    }
    
    
    if(counter==5){
        getData(solana);
    }
    




}


console.log("Data Request");

getData(bitcoin);

coinName.addEventListener("click",()=>{


goOut.play();



});


let goOut = gsap.timeline({defaults:{ease:"power3.out"}});

goOut.to("#convertion",{
    opacity:0,
    y:10,
    duration:0.5,
    
    },"")

    .to("#coinName ,#coinName + p",{
        opacity:0,
        x:10,
        duration:.5,
        onComplete: select
        
        })
    
    
    
    ;

goOut.pause();






let goIn = gsap.timeline({defaults:{ease:"power3.out"}});

goIn

    .from("#coinName ,#coinName + p",{
        opacity:0,
        x:-10,
        duration:.5,
        
        
        })
    
        .from("#convertion",{
            opacity:0,
            y:10,
            duration:0.5,
            
            })
    
    ;

goIn.pause();


let mm = gsap.matchMedia();

mm.add("(max-width: 820px)",()=>{



    let info = gsap.utils.toArray(".infoList div");

    console.log(info);
    let scroll = gsap.timeline({
       scrollTrigger:{
        trigger:".infoList",
        pin:true,
        scrub: 1,
        snap:{ snapTo: 0.5,
        duration: 0.7,
        delay: 0.1,
        ease:"power1.out",
        
       },
        start:"top+=50 top",
        // markers:true,
        end:"+=2000"
       }
    });
    
    //innerWidth is the screen size, 2 the number of
    // card that need to be mover
    // 16px = 1 rem
    //gap is 8rem (-2 of padding) for each card = 12rem total
    
    let screenWidth = innerWidth;
    if(screenWidth>480){screenWidth=480};
    
    console.log(screenWidth*-2-16*12);
    scroll.to(info, {x: screenWidth*-2-16*12, ease: "none"});
    
    
    window.onresize = () => {
        console.log("Wating for reload");
        setTimeout(()=>window.location.reload(),2000);
        
    
      }
    



});



mm.add("(min-width: 821px)",()=>{



    let info = gsap.utils.toArray(".infoList div");

    console.log(info);
    let scroll = gsap.timeline({
       scrollTrigger:{
        trigger:".infoList",
        pin:true,
        scrub: 1,
        snap:{ snapTo: 0.5,
            duration: 0.7,
            delay: 0.1,
            ease:"power1.out",
            
           },
        start:"top+=50 top",
        // markers:true,
        end:"+=2000"
       }
    });
    
    //innerWidth is the screen size, 2 the number of
    // card that need to be mover
    // 16px = 1 rem
    //gap is 8rem (-2 of padding) for each card = 12rem total
    
    let screenWidth = innerWidth;
    if(screenWidth>960){screenWidth=960};


    // console.log(screenWidth*-2-16*12) 16 become 19.2 because the html font size change in the css meidaQ;
    console.log(screenWidth*-2-19.2*12);
    scroll.to(info, {x: screenWidth*-2-19.2*12, ease: "none"});
    
    
    window.onresize = () => {
        console.log("Wating for reload");
        setTimeout(()=>window.location.reload(),2000);
        
    
      }
    



});

let navGoIn = gsap.timeline();
navGoIn.from(".mobileNav",{
    xPercent: -150, ease: "power1.out",
    duration: 0.5
});
navGoIn.pause();



 
function remove(){
    mobile.style.display = "none";
    console.log("removed");
}

let navGoOut = gsap.timeline();
navGoOut.to(".mobileNav",{
    xPercent: -150, ease: "power1.out",
    duration: 0.5,
    onComplete: remove
});
navGoOut.pause();


let menu = document.querySelector(".material-symbols-sharp.menu")
let mobile = document.querySelector(".mobileNav");
let state = true;

menu.addEventListener("click",()=>{
    console.log(state);
if(state){
    mobile.style.display = "block";
    console.log("added");




    navGoOut.progress(0);
    navGoOut.pause();
    navGoIn.progress(0);
    navGoIn.play();
    
    console.log("in");
    state = !state;
}else{
navGoOut.play();

console.log("out");
state=!state;
}

})
