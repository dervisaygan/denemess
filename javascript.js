const darksvg = document.querySelectorAll('.cls-1');
const darkitem = document.querySelectorAll('#darkmodejs');
const nav=document.querySelector('nav');
const darkicon = document.querySelector('.dark-icon');
const menu = document.querySelector('.menu');

document.querySelector('.menu-bars').addEventListener('click',function(){
   
    document.querySelector('.menu').style.display='block';
})

document.querySelector('.exit').addEventListener('click',function(){
    document.querySelector('.menu').style.display='none'
})

window.addEventListener('keydown',function(e) {
    if(e.keyCode===27){
        document.querySelector('.menu').style.display='none'
    }
}
)
darkicon.addEventListener('click',(e)=>{
    
    if(localStorage.getItem('darkmode')==='false'){
        localStorage.setItem('darkmode','true');
    
        for(let i=0;i<darkitem.length;i++){
           
            darkitem[i].style.backgroundColor='#181818';
            darkitem[i].style.color='#fff';} 
        for(let i=0;i<darksvg.length;i++){
         
            darksvg[i].style.fill='#fff';
            darksvg[i].style.stroke='#181818';}
        
            nav.style.boxShadow='1px 1px #fff';
            darkicon.style.fill='#fff';
        
        }
        
        
    
    else{
        localStorage.setItem('darkmode','false');
        for(let i=0;i<darkitem.length;i++){
         
            darkitem[i].style.backgroundColor='#fff';
            darkitem[i].style.color='#000';}
            for(let i=0;i<darksvg.length;i++){
               
                darksvg[i].style.fill='#181818';
                darksvg[i].style.stroke='#fff';}
                nav.style.boxShadow='1px 1px #000';
                darkicon.style.fill='#ff0000';
    }
e.preventDefault();
})


if(!localStorage.getItem('darkmode')){
    localStorage.setItem('darkmode','false')
}else{
    if(localStorage.getItem('darkmode')==='true'){
      
        for(let i=0;i<darkitem.length;i++){
           
            darkitem[i].style.backgroundColor='#181818';
            darkitem[i].style.color='#fff';
            
        }
        for(let i=0;i<darksvg.length;i++){
          
            darksvg[i].style.fill='#fff';
            darksvg[i].style.stroke='#181818';}
            nav.style.boxShadow='1px 1px #fff';
            darkicon.style.fill='#fff';
    }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('nav').style.top='0';
    document.querySelector('#zfcakademi-logo').style.display='block';
      document.querySelector('.menu-bars').style.display='block';
  
} else {
     document.querySelector('nav').style.top='-71px';
      document.querySelector('#zfcakademi-logo').style.display='none';
      document.querySelector('.menu-bars').style.display='none';
    if(menu.style.display=='block'){
        document.querySelector('nav').style.top='0';
        document.querySelector('#zfcakademi-logo').style.display='block';
      document.querySelector('.menu-bars').style.display='block';
    }
}
  prevScrollpos = currentScrollPos;
}
