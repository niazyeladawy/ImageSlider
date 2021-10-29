var imgs = Array.from(document.querySelectorAll(".item img"));
var boxContainer = document.querySelector("#boxContainer");
var innerBox = document.querySelector("#innerBox");
var close = document.querySelector("#close");
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var currentIndex = 0;

for(var i = 0 ; i< imgs.length ; i++){
    imgs[i].addEventListener("click", function(e){
        boxContainer.style.display = "flex";
        var imgSrc = e.target.getAttribute("src");
        innerBox.style.backgroundImage = `url(${imgSrc})`;
        currentIndex = imgs.indexOf(e.target);
        console.log(imgSrc);
    })
}

close.addEventListener("click",closeSlider);

function closeSlider(){
    boxContainer.style.display = "none";
}


next.addEventListener("click",nextSlide)
function nextSlide(){
    currentIndex++;
    if(currentIndex == imgs.length){
        currentIndex = 0;
    }
    
    innerBox.style.backgroundImage = `url(${imgs[currentIndex].getAttribute("src")})`;
}

prev.addEventListener("click",prevSlide)
function prevSlide(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = imgs.length - 1;
    }
    
    innerBox.style.backgroundImage = `url(${imgs[currentIndex].getAttribute("src")})`;
}

document.addEventListener("keyup",function(e){
    if(e.code == "ArrowRight"){
        nextSlide();
    }
    else if(e.code == "ArrowLeft"){
        prevSlide();
    }
    else if(e.code == "Escape"){
        closeSlider();
    }
})