function bubbleSort(arr) {
  ///bubblesort
    var len = arr.length;
  
    for (var i = 0; i < len ; i++) {
      for(var j = 0 ; j < len - i - 1; j++){ 
      if (arr[j].numero > arr[j + 1].numero) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
        drawer(arr)
        document.querySelector(`#content > div:last-child > div:nth-child(${j+2})`).classList.add("swaped2")
        document.querySelector(`#content > div:last-child > div:nth-child(${j+1})`).classList.add("swaped1")
      }
     }
    }
    div=document.createElement("div")
    document.querySelector("#content").appendChild(div);
    document.querySelector("#content > div:last-child").classList.add("separator");
  }