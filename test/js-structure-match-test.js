var JSM=require('../js-structure-match.js');
var jm=new JSM({a:'int',
        b:'string',
        c:'float',
        d:[{a:'int',b:'string'}],
        e:{a:'int',
           b:'string'}})
console.log(jm.match({a:1,
              b:'hello',
              c:2.3,
              d:[{a:1,b:'meow'},
                 {a:233,b:'meowmeow'}],
              e:{a:1,
                 b:'meowmeow'}}))
