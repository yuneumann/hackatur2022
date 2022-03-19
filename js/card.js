const sect = document.querySelector('.contact-section');
const cont = document.querySelector('.divcards');

sect.addEventListener("mousemove", (e) =>{
    let xAxis = (window.innerWidth/2  - e.pageX)/25;
    let yAxis = (window.innerHeight/10 - e.pageY/25);
    sect.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    console.log(e.pageX, e.pageY);     
})

sect.addEventListener("mouseenter", (e) =>{
    sect.style.transition= 'none';
    sect.style.transition= 'none';
});

sect.addEventListener("mouseleave", (e) =>{
    sect.style.transition= 'all 0.5s ease';
    sect.style.transform= `rotateY(0deg) rotateX(0deg)`;
});

sect.addEventListener("mouseleave", (e) =>{
    sect.style.transition= 'all 0.8s ease';
    sect.style.transform= `rotateY(0deg) rotateX(0deg)`;
})
