js-structure-match
==================

Test if the given JSON matches a certain structure. 

Features
========

- Very simple structure-describing rules.
- Structure describer itself is a valid JSON

Basic Usage
===========

```javascript
var JSM=require('./js-structure-match.js');
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
```

Rules
=====

Let's say we are matching data `data` to the structure `structure`

```javascript
var JSM=require('./js-structure-match.js');
var jm=new JSM(structure);
console.log(jm.match(data));
```

The output will be `true` when following rules are satisfied:

1. `structure` and `data` are both arrays and `data[i]` matches `structure[0]` for each `i`
2. `structure` and `data` are both objects, and for every key `key` of `structure`, `data` have 
   a key named `key` and `data[key]` matches `structure[key]`
3. `structure=='int'` and `data` is a int
4. `structure=='float'` and `data` is a number
5. `structure=='string'` and `data` is a string

TODO
====

1. Test if `structure` is valid
2. npm repository 