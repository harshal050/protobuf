const protobuf = require('protobufjs')
const fs = require('fs');

protobuf.load('a.proto')
.then((root)=>{
    const Person = root.lookupType('Person')
    const person = {name:"h",item:"phone",balance:100};
    const buffer = Person.encode(person).finish();
    fs.writeFileSync('./encode.txt',buffer);
    const encodedData = fs.readFileSync('./encode.txt');
    const decodedData = Person.decode(encodedData);
    console.log("decodedData "+JSON.stringify(decodedData))
})
.catch((e)=>console.log(e));