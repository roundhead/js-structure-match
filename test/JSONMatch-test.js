var JM=require('../JSONMatch.js')
jm=new JM({a:'int',b:'float',abc:[{a:'string'}]});
d={a:1,b:1.2,abc:[{a:'hello'},{a:'this'},{a:'this'}]}
console.log(jm.match(d));
