//buff = new buffer(40);
buf=Buffer.alloc(6);
len = buf.write("welcomes");
console.log("content Length: "+ len);
console.log(buf.tostring());
console.log(buf);