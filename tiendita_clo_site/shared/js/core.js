gsap.registerPlugin(ScrollTrigger);
gsap.to(".progress-bar",{width:"100%",scrollTrigger:{scrub:true}});
function animateCounter(el,end){
 gsap.fromTo(el,{innerText:0},{innerText:end,duration:2,snap:{innerText:1},
 scrollTrigger:{trigger:el,start:"top 80%"}})
}
function setupVideos(){
 const videos=document.querySelectorAll("video");
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.play();
    else entry.target.pause();
  });
 });
 videos.forEach(v=>observer.observe(v));
}