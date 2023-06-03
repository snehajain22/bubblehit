var time = 60;
var lives = 3;
var i;
function timer(){
    i = setInterval(function(){
        if(time>0)
        {
            time--;
            document.querySelector("#timing").textContent = time;
        }
        else{
            clearInterval(i);
            document.querySelector("#popup").style.display = "flex";
        }
        
    }, 1000);
}
function show(){
    var clutter="";
    for(var i=0;i<98;i++){
        var rn = Math.floor(Math.random() * 10)
        clutter+=`<div id="bubble">${rn}</div>`
    }
    document.querySelector("#bottom").innerHTML = clutter;
    document.querySelector("#bubble").textContent = `${rn}`;
}
function close(){
    document.querySelector("button").addEventListener("click",function(){
        document.querySelector("#popup").style.display = "none";
        window.location.reload();
    })
}
function getrandomclick(){
    click = Math.floor(Math.random() * 10);
    document.querySelector("#clickelem").textContent = `${click}`;
}
function showpopup(){
    document.querySelector("#popup").style.display = "flex";
}
function Score(){
    var score=0;
    document.querySelector("#bottom").addEventListener("click",function(dets){
        if(Number(dets.target.textContent) === click){
            score += 10;
            // console.log(dets.target.textContent);
            document.querySelector("#scoreelem").textContent = score;
            getrandomclick();
            show();
        }
        else{
            if(lives>1){
                lives--;
                getrandomclick();
                show();
                console.log(lives);
            }
            else{
                clearInterval(i);
                showpopup();
            }
        }
        
    })
}

show();
timer();
close();
Score();
getrandomclick();
