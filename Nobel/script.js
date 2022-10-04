


async function getData(url){
    const response = await fetch(url);
    const result = await response.json();


    if(result.meta.count < 1){
        console.log("No result");
        return; 
    }
    resultItem[0].style.display = "none";
    resultItem[1].style.display = "none";
    resultItem[2].style.display = "none";
let counter=0;
    for(const people of result.laureates){
        if(people.knownName !== undefined){
             console.log(people.knownName.en);
             console.log(people.gender);
             console.log(people.birth.place.locationString.en); 
             console.log(people.wikipedia.english); 
            console.log(counter);
//[counter].style.display = "none";
resultItem[counter].style.display = "block";
resultName[counter].textContent = people.knownName.en;
resultLocation[counter].textContent =  people.birth.place.locationString.en;          
resultGender[counter].textContent = people.gender;
resultWiki[counter].setAttribute("href",people.wikipedia.english);
resultAwardYear[counter].textContent= people.nobelPrizes[0].awardYear;
resultMotivation[counter].textContent= "Remembered "+people.nobelPrizes[0].motivation.en+".";
console.log(resultMotivation[counter].textContent);



 counter++;











        } else{
            console.log("skipped "+ counter);
            console.log(resultItem[counter].style.display);
            counter++;
        }
       
        
}
counter=0;

resultIn.play();resultIn.progress(0)


}; 



let resultItem = document.querySelectorAll(".resultItem");//1 
    
let resultAwardYear = document.querySelectorAll(".resultAwardYear ");//2 
    
    
let resultName = document.querySelectorAll(".resultName");//3 
    
    
let resultLocation = document.querySelectorAll(".resultLocation");//4 
    
let locationIcon = document.querySelectorAll(".resultLocation");//5 
    
    
let resultGender = document.querySelectorAll(".resultGender");//6
     
     
     
let genderIcon = document.querySelectorAll(".genderIcon");//7
      
      
      
let resultMotivation = document.querySelectorAll(".resultMotivation");//8 
       
       
       
let resultWiki = document.querySelectorAll(".wikipedia");//9 
  




let displayDate = document.querySelector(".searchDate");
let selectedDate = document.querySelector(".slider");
let button = document.querySelector(".lessMargin");



selectedDate.addEventListener("input",()=> {displayDate.textContent = selectedDate.value;})

//console.log(typeof displayDate.textContent);
//console.log(selectedDate.value);

button.addEventListener("click",()=>{
  resultOut.play();resultOut.progress(0);
  let dateFrom = Number(selectedDate.value);
  let dateTo = dateFrom+2;

  console.log(dateFrom, dateTo);

  let urlResult = "https://api.nobelprize.org/2.1/laureates?limit=3&nobelPrizeYear="+dateFrom+"&yearTo="+dateTo+"&nobelPrizeCategory=pea";

getData(urlResult);





});






let loadAnimation = gsap.timeline({
  defaults:{
    opacity:0,
    ease:"power2.out"}});

loadAnimation.from(".h1Main",{
  x:-20,
  duration:2
 
})
.from(".image",{duration:3},"<")
.from(".navigationContainer",{duration:1},"<")
.from(".quote",{
  x:-20,
  duration:2
},"-=2.5")
.from(".author",{ 
  x:20,
  duration:1,
},"-=2")
.from(".ctaButton",{x:-10,duration:1},"-=2")
.from(".card",{y:80,duration:1.5,stagger:0.4},"-=1.5")
.from(".timeline, .result",{duration:1},"-=0.5");





let resultOut = gsap.timeline();
resultOut.to(".resultItem",{x:50,duration:0.7,opacity:0,ease:"power2.out",stagger:0.2});
resultOut.pause();

let resultIn = gsap.timeline();
resultIn.fromTo(".resultItem",{x:-50,opacity:0},
{x:0,duration:0.7,opacity:1,ease:"power2.out",stagger:0.2});
resultIn.progress(1);
resultIn.pause();




