function JSONMatch(structure){
    this.structure=structure;
}

JSONMatch.prototype.match=function(data){
    if(Array.isArray(this.structure)){
//	console.log(data)
//	console.log("this is an array")
	if(!Array.isArray(data)){
	    return false;
	}
	// we assume len(this.structure) is 1,
	// even if len(this.structure)>1, we only use this.structure[0]
	for(var i in data){
	    jm=new JSONMatch(this.structure[0]);
	    if(!jm.match(data[i])){
		return false;
	    }
	}
	return true;
    }
    if(typeof(this.structure)=='object'){
//	console.log(data)
//	console.log("this is an object")
	// this.structure is some object that is NOT array
	for (var key in this.structure){
	    if(!data.hasOwnProperty(key)){
		return false;
	    }
	    jm=new JSONMatch(this.structure[key])
	    if(!jm.match(data[key])){
		return false;
	    }
	}
	return true;
    }
    if(typeof(this.structure)=='string'){
//	console.log(data)
//	console.log("this is an single data")
	if(this.structure=='int'){
	    if(typeof(data)!='number'||parseInt(data)!=data){
		return false;
	    }
	    return true;
	}
	if(this.structure=='float'){
	    if(typeof(data)!='number'){
		return false;
	    }
	    return true;
	}
	if(this.structure=='string'){
	    if(typeof(data)!='string'){
		return false;
	    }
	    return true;
	}
	return false;
    }
    return false;
}

module.exports=JSONMatch;
