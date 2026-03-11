const container = document.querySelector("#container");
const heart = document.querySelector("i");

container.addEventListener("dblclick", function (e) {
    
    heart.style.transform = 'translate(-50%, -50%) scale(1.3) rotateX(0deg) translateZ(200px)';
    heart.style.opacity = "0.9";
    heart.style.textShadow = "0 20px 40px rgba(0,0,0,0.4)"; 


    setTimeout(function () {
        heart.style.opacity = "0";
    }, 800);

    
    setTimeout(function () {
        heart.style.transform = 'translate(-50%, -50%) scale(0) rotateX(-45deg) translateZ(-100px)';
    }, 1200);
});

