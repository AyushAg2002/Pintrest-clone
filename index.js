bar=document.querySelector('.bar');
height=document.querySelector('nav');
opacity=document.querySelector('.reposive');

bar.addEventListener("click", ()=> {
    height.classList.toggle('height')
    opacity.classList.toggle('opacity')
});