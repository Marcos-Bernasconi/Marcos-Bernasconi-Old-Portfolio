
let date = new Date();
var iso = date.toISOString();

iso = iso.substring(0, iso.indexOf('T'));
console.log(iso);

let counter=0;

let urlBerlin ="https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.5235&longitude=13.4115&hourly=carbon_monoxide&timezone=Europe%2FBerlin&start_date="+iso+"&end_date="+iso;

let urlLondon ="https://air-quality-api.open-meteo.com/v1/air-quality?latitude=51.5002&longitude=-0.1262&hourly=carbon_monoxide&timezone=Europe%2FBerlin&start_date="+iso+"&end_date="+iso;

let urlMadrid ="https://air-quality-api.open-meteo.com/v1/air-quality?latitude=40.4167&longitude=-3.7033&hourly=carbon_monoxide&timezone=Europe%2FBerlin&start_date="+iso+"&end_date="+iso;

let urlNewYork ="https://air-quality-api.open-meteo.com/v1/air-quality?latitude=40.71&longitude=-74.01&hourly=carbon_monoxide&timezone=Europe%2FBerlin&start_date="+iso+"&end_date="+iso;

let urlLosAngeles ="https://air-quality-api.open-meteo.com/v1/air-quality?latitude=34.05&longitude=-118.24&hourly=carbon_monoxide&timezone=Europe%2FBerlin&start_date="+iso+"&end_date="+iso;

let urlSingapore ="https://air-quality-api.open-meteo.com/v1/air-quality?latitude=1.2894&longitude=103.8500&hourly=carbon_monoxide&timezone=Europe%2FBerlin&start_date="+iso+"&end_date="+iso;

let urlSeoul ="https://air-quality-api.open-meteo.com/v1/air-quality?latitude=37.5139&longitude=126.9828&hourly=carbon_monoxide&timezone=Europe%2FBerlin&start_date="+iso+"&end_date="+iso;


async function getData(url,counter){
const response = await fetch(url);
const result = await response.json();
data = result.hourly.carbon_monoxide; 
  console.log(data);
  
  graph(data,counter);
  
  
  
  
  
  
  
  
  
}

function graph(data,counter){

    
    
    let width= document.querySelector(".dataContainer").offsetWidth,
    barHeight= 50;
    
  
   var scale = d3.scaleLinear()
                   .domain([d3.min(data), d3.max(data)])
                   .range([100, width*1.5]);
console.log(width);



  let graph=
  d3.select(".dataContainer")
  .append("svg")
  // Responsive SVG needs these 2 attributes and no width and height attr.
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 1200 1200")

  
  let bar= graph.selectAll("g").data(data)
  .enter().append("g").attr("transform",(d,i)=>{return "translate(0,"+ i * barHeight+")"});
  
  bar.append("rect") .attr("width", function (d) {
             return scale(d);
         })
         .attr("height", barHeight - 5)
  
      bar.append("text")
         .attr("x", function (d) { return (scale(d)); })
         .attr("y", barHeight / 2)
         .attr("dy", ".3em")
         .text(function (d) { return d; })
        ;


        // console.log(document.querySelectorAll("svg rect")[1].style.fill);
        let rects = document.querySelectorAll("svg rect"); 


if(counter==1){
    for(color of rects)
    color.style.fill="#b7fee5";
    city.style.color="#b7fee5";
}

if(counter==2){
    for(color of rects)
    color.style.fill="#feedb7";
    city.style.color="#feedb7";
}

if(counter==3){
    for(color of rects)
    color.style.fill="#b7dbfe";
    city.style.color="#b7dbfe";
}

if(counter==4){
    for(color of rects)
    color.style.fill="#bbfeb7";
    city.style.color="#bbfeb7";
}

if(counter==5){
    for(color of rects)
    color.style.fill="#feb7b7";
    city.style.color="#feb7b7";
}

if(counter==6){
    for(color of rects)
    color.style.fill="#f6feb7";
    city.style.color="#f6feb7";
}

if(counter==7){
    for(color of rects)
    color.style.fill="#d4b7fe";
    console.log(color.style.fill);
    city.style.color="#d4b7fe";
}




 let goOut = gsap.timeline();
    goOut.to("svg rect", {
    duration: 1,opacity:0,stagger: 0.1,xPercent:150,ease: "power4.out"
   })
   .to(".arrowContainer",{duration:1,opacity:0,xPercent:10,ease: "power4.out"},"<")
   .to("svg text",{duration: 1,opacity:0,stagger:0.1})
        
    goOut.pause();
        



        let goIn = gsap.timeline();
        goIn.fromTo("svg rect", {
          opacity:0,xPercent:-150,
        },{duration: 0.8,opacity:1,xPercent:0,ease: "back.out",rotation:0,stagger: 0.2})
        .fromTo(".arrowContainer",{opacity:0,xPercent:-10},{opacity:1,ease: "power4.out",duration:1,xPercent:0},"<")

        .from("svg text",{duration: 1,opacity:0,stagger:0.1},)
        
        




  
  
        ScrollTrigger.refresh();
  
  
  
  
  

}

function changeCity(){

   
 





    let dataContainer= document.querySelector(".dataContainer");
    dataContainer.style.minHeight= dataContainer.offsetHeight+"px";
    console.log(dataContainer.offsetHeight);
    




    d3.selectAll("svg").remove();



    counter++;



    
   
 if(counter==8){
    counter=1;
    }



    if(counter==1){
    
    getData(urlLondon,counter);
    city.textContent="London";

}


if(counter==2){
    
    getData(urlMadrid,counter);
    city.textContent="Madrid";

}

if(counter==3){
    
    getData(urlNewYork,counter);
    city.textContent="New York";

}

if(counter==4){
    
    getData(urlLosAngeles,counter);
    city.textContent="Los Angeles";

}

if(counter==5){
    
    getData(urlSingapore,counter);
    city.textContent="Singapore";

}

if(counter==6){
    
    getData(urlSeoul,counter);
    city.textContent="Seoul";

}

if(counter==7){
    
    getData(urlBerlin,counter);
    city.textContent="Berlin";

}







}


function hide(){
    mobileNavigation.style.display = "none";
}




getData(urlBerlin,7);


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
d3.select(".h2Data").
text("Air quality data | "+iso)





















let arrow = document.querySelector(".arrowContainer");
let city = document.querySelector(".cityName");




arrow.addEventListener("click",()=>{



    let goOut = gsap.timeline();
    
    goOut.to("svg rect", {
     duration: 1,opacity:0,stagger: 0.1,xPercent:150,ease: "power4.out",onComplete: changeCity
    })
    .to(".arrowContainer",{duration:1,opacity:0,xPercent:10,ease: "power4.out"},">-=0.7")
    .to("svg text",{duration: 1,opacity:0,stagger:0.1})
    
    
})

let navigationGoin = gsap.timeline();

navigationGoin.from(".mobileNavigation",{
    xPercent:-100,opacity:0,duration:0.5,ease:"power4.out"
}).pause();



let navigationGoout = gsap.timeline();

navigationGoout.to(".mobileNavigation",{
    xPercent:-100,opacity:0,duration:0.5,ease:"power4.out",
    onComplete: hide
}).pause();





let mobileIcon = document.querySelector("#hamburger");
let mobileNavigation = document.querySelector(".mobileNavigation");
mobileIcon.addEventListener("click",()=>{
    
 if(mobileNavigation.style.display == "block"){
    navigationGoout.progress(0);
    navigationGoin.progress(1);
    navigationGoout.play(); 
    
 }else{
    mobileNavigation.style.display = "block";
    navigationGoout.progress(0).pause();
    
    navigationGoin.progress(0);
    navigationGoin.play();

} 
console.log(mobileNavigation.style.display);
 }
);

gsap.registerPlugin(ScrollTrigger);


let mm= gsap.matchMedia();



mm.add("(min-width: 0px)",()=>{


    let opening = gsap.timeline({defaults:{opacity:0,ease: "power3.out"}});
    opening.from(".h1Hero",{ duration:1,x:-10})
    .from(".pHero",{x:-10,duration:1},"-=0.5")
    .from(".ctaButton",{x:-10,duration:1},"-=0.5")


    
    });

mm.add("(min-width: 1500px)",()=>{

    let timeline = gsap.timeline({
        defaults: {ease:"power3.out"},
         scrollTrigger:{
             trigger:".carbonContainer",
           
             start:"-=10 top",
            
              end:"bottom+=2000 top",
           
             // end:"bottom+=2000 center",
            
             pin: true,
             
             scrub: 2,


         }
    });

    timeline.from(".dataContainer",{
       xPercent: 50,duration:3
    })
       .from(".firstInfo",{
         opacity:0,y:50,duration:1,
       },)

       .to(".firstInfo",{
         opacity:0,y:-50,duration:1,
       },)


       .from(".secondInfo",{
           opacity:0,y:50,duration:1,
       },)

       .to(".secondInfo",{
         opacity:1,y:-50,duration:1,
     },);



let infoSection = gsap.timeline({scrollTrigger:{
    trigger:".infoSection",
    start:"top center",
    end:"bottom center",
    scrub: 2,
    
    
    
    
}});

infoSection.from(".infoSection div",{
    duration: 1,stagger:0.2,y:-10,ease:"back.out",
    opacity:0
})
.from(".infoSection div img",{
    duration:0.4,stagger:0.1,scale:0.7,opacity:0,
    ease:"elastic.out"
},"<+=0.2")






});

mm.add("(max-width: 1499px)",()=>{

let infoSection = gsap.utils.toArray(".infoSection div");



for(info of infoSection){
gsap.from(info,{
        y:3,scale:0.95,duration:0.5,opacity:0,
    ease:"back.out",
    scrollTrigger:{
        trigger: info,
        start:"top-=30 center",
        
        toggleActions:"play resume none none",
     
        
        
        

    }

    


});
}


dataAnimation = gsap.from(".dataContainer",{
xPercent:10,duration:0.5,opacity:0,ease:"power3.out",
    scrollTrigger:{
        trigger: ".dataContainer",
        start:"top-=50 center",
        end:"center center",
        toggleActions:"play resume none none",
      
     
        
    }
})




let infoSection2 = gsap.utils.toArray(".carbonInfo div");
for(info of infoSection2){
    gsap.from(info,{
        y:3,scale:0.95,duration:0.5,opacity:0,
    ease:"back.out",
    scrollTrigger:{
        trigger: info,
        start:"top-=250 center",
        
        toggleActions:"play resume none none",
     
        
        
        

    }

    


});
}

});


