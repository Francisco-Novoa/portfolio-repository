function randomcard (){
    let a={};
    a["numero"]=parseInt(Math.random()*13+1);
    a["tipo"]=parseInt(Math.random()*4);
    return a;
}

function randomhand (number){
    let array = [],i;
    for (i=0;i<number;i++){
        array.push(randomcard())
    }
    return array;
}

function cardmaker(obj){
    let tip,num;
    switch (obj.numero){
        case 11:num="J"; break;
        case 12:num="Q"; break;
        case 13:num="K"; break;
        case 1:num="A"; break;
        default:num=obj.numero
    }
    switch (obj.tipo){
        case 0:tip="diamond"; break;
        case 1:tip="spade"; break;
        case 2:tip="club"; break;
        case 3:tip="heart"; break;
    }

    return `<div id=card class=${tip}><div id=top></div><div id=middle>${num}</div><div id=bottom></div></div>`
}

function drawer(array){
     let i, text="",div;
    for(i=0;i<array.length;i++){
        text+=cardmaker(array[i]);
    }
    div=document.createElement("div")
    document.querySelector("#content").appendChild(div);
    document.querySelector("#content > div:last-child").innerHTML=text

    
}



