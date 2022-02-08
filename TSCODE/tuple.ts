//tuple :is a collection of hettrogenic properties,this can even be used to declare record structure
let person=[101,"jhansi",3699.80,false];
person.push("Manager");
person.sort()
console.log(person)
var [a,b,c]=person;
console.log("Copy from tuple Person")
console.log(a);
console.log(b+' '+c);
console.log(person[2])
person.pop()
console.log("values from tuple")
for(var i=0;i<person.length;i++){
    console.log("index="+i+" "+person[i]);
}