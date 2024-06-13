let cloud=document.getElementById('cloud_img');

let rock_sec=document.getElementById('sec_rock_img');
let rock_one=document.getElementById('one_rock_img');
let mist=document.getElementById('mist_img');
let bird=document.getElementById('bird_img');
let sun=document.getElementById('sun_img');



window.addEventListener('scroll',()=>{
    let value = window.scrollY;


   
    bird.style.marginTop = value*-0.5+ 'px';
    rock_sec.style.left = value*-1+ 'px';
    cloud.style.marginTop = value*1.5+ 'px';
    
    rock_one.style.left = value*1+ 'px';
    mist.style.left = value*-2.5+ 'px';
    mist.style.marginTop = value*0.4+ 'px';
    sun.style.marginTop = value*-0.3+ 'px';
    
   




})