function swap(items, leftIndex, rightIndex,pivot){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    drawer(items)
    try{document.querySelector(`#content > div:last-child > div:nth-child(${leftIndex+1})`).classList.add("swaped2")}
    catch(error){console.log(error)}
    try{document.querySelector(`#content > div:last-child > div:nth-child(${rightIndex+1})`).classList.add("swaped1")}
    catch(error){console.log(error)}
    try{document.querySelector(`#content > div:last-child > div:nth-child(${pivot})`).classList.add("swaped3")}
    catch(error){console.log(error)}
}
function partition(items, left, right) {
  
    var pivot   = items[Math.floor((right + left) / 2)].numero, //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        
        while (items[i].numero < pivot) {
            i++;
        }
        while (items[j].numero > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j,pivot); //swaping two elements
            i++;
            j--;

        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
    div=document.createElement("div");
    document.querySelector("#content").appendChild(div);
    document.querySelector("#content > div:last-child").classList.add("separator");
}
