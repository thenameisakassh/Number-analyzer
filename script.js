
document.getElementById("checkBtn").addEventListener("click",checknumber);
document.getElementById("clearBtn").addEventListener("click",function(){
    document.getElementById("num").value="";
});

// allow Enter key to trigger check
document.getElementById("num").addEventListener("keydown", function(e){
    if (e.key === "Enter") {
        e.preventDefault();
        checknumber();
    }
});

function checknumber(){
    if(document.getElementById("num").value==""){
    document.getElementById("result").innerHTML="Please enter a number";
    return;
}
    const num=Number(document.getElementById("num").value);
    let result="";

    

    //even or odd
    if (num%2===0){
        result+="Even number<br>";
    }else{
        result+="odd number<br>";
    }

    //positive or negative
    if(num>=0){
      result+="<span style='color:blue;'>Positive number</span><br>";
    }else{
        result +="<span style='color:red;'>Negative number</span><br>";
    }
    //square
    result+="Square:"+(num*num);
    
    //prime check
    if(num>1){
        let isPrime=true;
        for (let i=2;i<=Math.sqrt(num);i++){
        if(num % i===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        result+="<br><span style='color:green'>Prime number</span>";
    }else{
        result+="<br>Not a Prime number";
    }
}else{
    result+="<br>Not a prime number";
}
document.getElementById("result").innerHTML=result;

}