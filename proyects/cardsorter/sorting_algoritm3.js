const insertionSort = (arr) => {
    ///insertion sort
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j].numero > key.numero) {
            arr[j + 1] = arr[j];
            j--;
            
        }
        arr[j + 1] = key;
        drawer(arr)
        try{document.querySelector(`#content > div:last-child > div:nth-child(${j+2})`).classList.add("swaped2")}
        catch(error){console.log(error)}
        try{document.querySelector(`#content > div:last-child > div:nth-child(${i+1})`).classList.add("swaped1")}
        catch(error){console.log(error)}
    }
    div=document.createElement("div")
    document.querySelector("#content").appendChild(div);
    document.querySelector("#content > div:last-child").classList.add("separator");
};