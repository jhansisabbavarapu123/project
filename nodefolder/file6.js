var x=0;
var name1=new String();
name1='Jhansi Rani';
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log("Count of letters="+name1.length)
while(x<=name1.length){
    console.log(name1.substring(0,x));
    x++;
}
console.log("Actual name="+name1);