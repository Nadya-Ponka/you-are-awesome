// DO WHATEVER YOU WANT HERE

<<<<<<< HEAD
createEnumerableProperty = function(name) {
	var obj = {};
	obj.name=0;
	return obj;
};

function createNotEnumerableProperty(name){ 
return Symbol(name);
}

function createProtoMagicObject () {
	return function() {var obj = {}; return obj;};
}; 
		
var incrementorSum = 0;

function incrementor () {
  incrementorSum++;
  function counter() {
    incrementorSum++;
    return counter;
  }
  counter.toString = function() {
    return incrementorSum;
  };
  return counter;
};

//const asyncIncrementor = () => {};

function createIncrementer() {
	var b = {
		value: 0,
		next: function() {this.value = this.value+1; return this;},
		/*valueOf: function(){ return this.value; },
		toString: this.valueOf*/
		[Symbol.iterator]: function() {return this; }
	}
return b;		
}

// return same argument not earlier than in one second, and not later, than in two
returnBackInSecond = function(param) {
  
  var parametr = param;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // после таймаута — вызов resolve,
      // можно без результата, чтобы управление перешло в следующий then
      // (или можно передать данные пользователя дальше по цепочке)
     resolve (parametr);
    }, 1001);
  });
  
  promise.then(); 
  //promise.then( function (parametr) {}, function (parametr) {console.log("Was mistale");})
  function resolve() {return parametr;}
}

function getDeepPropertiesCount(obj) { 
var len=JSON.stringify(obj);
var count=0;

let temp = [], openingBrackets = [], closingBrackets = [];
  
	  openingBrackets[0]='{'; 
	  closingBrackets[0]='}';

 temp.push(len[0]);

 for (i = 1; i < len.length; i++) {
    symbol = len[i];

	if (openingBrackets.indexOf(symbol) > -1) {
		
					temp.push(symbol);

	} else if (closingBrackets.indexOf(symbol) > -1) {
     temp.pop(); 
	count++;} else continue;
    }
	
	return count-1;
};

  
createSerializedObject = function () {
 
return this;
}

createSerializedObject.prototype = null;


=======
//const createEnumerableProperty = () => {};
//const createNotEnumerableProperty = () => {};
//const createProtoMagicObject = () => {};
//const incrementor = () => {};
//const asyncIncrementor = () => {};
function createIncrementer() {
	return {
		
		value: 0,
		next: function() {this.value = this.value+1; console.log(this.value); return this;}
	}
		
}

/*// return same argument not earlier than in one second, and not later, than in two
returnBackInSecond = function(param) {
  
  var parametr = param;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // после таймаута — вызов resolve,
      // можно без результата, чтобы управление перешло в следующий then
      // (или можно передать данные пользователя дальше по цепочке)
     resolve (parametr);
    }, 1001);
  });
  
  promise.then(); 
  //promise.then( function (parametr) {}, function (parametr) {console.log("Was mistale");})
  function resolve() {return parametr;}
}

const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
>>>>>>> 53d761f18133aaa8e44c0f78942ddf4961f3ca09
const toBuffer = () => {};
const sortByProto = () => {};*/

<<<<<<< HEAD
exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
=======
//exports.createEnumerableProperty = createEnumerableProperty;
//exports.createNotEnumerableProperty = createNotEnumerableProperty;
//exports.createProtoMagicObject = createProtoMagicObject;
//exports.incrementor = incrementor;
>>>>>>> 53d761f18133aaa8e44c0f78942ddf4961f3ca09
//exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
/*exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;*/