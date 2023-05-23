function peron(arreglo){
    let arr = arreglo
    for (let j = 0; j < arr.length; j++) {
       
        
    
    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] > arr[i+1]) {
            let a = arr[i]
            arr[i] = arr[i+1] 
            arr[i+1] = a
        } 
    } }
    return arr

}

console.log (peron([4, -4, 44, -44, 444, -444, 4444, -4444]))