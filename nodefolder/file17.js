var myFn=()=>{console.log("welcome");}
var test=function(){console.log("anonymous functions");}
myFn()
test()
var add=(x,y)=>{return (x+y);}
console.log(add(10,20))
var accoNum=(a)=>{var number=new String();
    number=a;
        if(number.length<=12)
   { 
       return true;
    }
   else{ 
       return false;
   }
   console.log(accoNum("123456789101"))
   //accoNum("123456789101");

} 