const btn = document.getElementById("update_btn")
const container = document.querySelector(".container")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', ()=> {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
})

function random(number) {
    return Math.floor(Math.random()*number)
}

function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for (let i = 0; i<100; i++){
        ctx.beginPath();
        ctx.arc(random(canvas.width), random(canvas.height), random(50), 0, 2 * Math.PI);
        if (i %3 && i%5 ){
            ctx.fillStyle = 'rgba(245, 236, 39, 0.5)';
         } else if (i%3){
      ctx.fillStyle = 'rgba(255,0,0,0.5)';
    }else if (i%7){
        ctx.fillStyle = 'rgba(39, 65, 245, 0.5)'

    } else if (i%5){
        ctx.fillStyle = 'rgba(168, 39, 245, 0.5)'
        
    } else if (i% 2){
        ctx.fillStyle = 'rgba(61, 245, 39, 0.5)'
    } else {
        ctx.fillStyle = 'rgba(245, 138, 39, 0.5)'
    }
    ctx.fill()
}
}
btn.addEventListener('click', draw)