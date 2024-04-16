function rundom(a,b){
    
    let arr=[];
    let res;
    let i=0
    for (let ind=1; ind<=b; ind++){
       let rundom=Math.floor(Math.random()*(a-1))+1
        for(i=0;i<=arr.length;i++){
            if (arr[i]!=rundom){
              res =true
              console.log(res)
            }
        }
        if (res==true){ 
            arr.push(rundom)
        }

    }
    alert(arr)

        
    
   

}
rundom(49,7)