
let numeros, hand, sel="0";
let draw=document.getElementById("draw");
let sort=document.getElementById("sort");
let selection=document.getElementById("selection");

draw.addEventListener("click",function(){
    numeros=parseInt(document.getElementById("text").value)
    hand=randomhand(numeros);
    drawer(hand);
})

selection.addEventListener("change",function(e){
    sel=e.target.value;
})

sort.addEventListener("click",function(){
    switch (sel){
        case "0": bubbleSort(hand);break;
        case "1": selectionSort(hand); break;
        case "2": insertionSort(hand); break;
        case "3": quickSort(hand,0,hand.length-1); break;
    }
})

