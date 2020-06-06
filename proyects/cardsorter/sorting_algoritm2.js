let selectionSort = (arr) => {
    ///Selection sort
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min].numero > arr[j].numero) {
                min = j;
                
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min]= tmp;
            drawer(arr)
            try{document.querySelector(`#content > div:last-child > div:nth-child(${i+1})`).classList.add("swaped2")}
            catch(error){console.log(error)}
            try{document.querySelector(`#content > div:last-child > div:nth-child(${min+1})`).classList.add("swaped1")}
            catch(error){console.log(error)}
        }
    }
    div=document.createElement("div");
    document.querySelector("#content").appendChild(div);
    document.querySelector("#content > div:last-child").classList.add("separator");
}