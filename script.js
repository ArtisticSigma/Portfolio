
const topBtn=document.getElementById('topBtn');
window.addEventListener('scroll',()=>{if(window.scrollY>300) topBtn.style.display='block';else topBtn.style.display='none';});
function scrollTop(){window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('.nav-links a').forEach(a=>{if(location.pathname.endsWith(a.getAttribute('href')))a.classList.add('active');});
function spawnFalls(){const ar=document.querySelector('.fall-area');if(!ar) return;for(let i=0;i<12;i++){const img=document.createElement('img');img.src='assets/fall'+(i+1)+'.png';img.className='falling';img.style.left=(20+i*40)%800+'px';img.style.animationDelay=(i*0.2)+'s';ar.appendChild(img);setTimeout(()=>{try{ar.removeChild(img);}catch(e){}},4000);}}
window.addEventListener('load',()=>{spawnFalls();setInterval(spawnFalls,5000);});