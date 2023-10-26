const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`}
        , {duration:3000, fill: "forwards"});
}

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() =>{
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    event.target.innerText = event.target.innerText.split("")
        .map((letter,index) => {
        if(index < iterations){
            return event.target.dataset.value[index];
        }
            
            return letters[Math.floor(Math.random()*26)]})
        .join("");
    
    if(iterations >= event.target.dataset.n) clearInterval(interval);

    iterations += 1 / 3;

    }, 40);
}

