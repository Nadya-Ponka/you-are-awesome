// DO WHATEVER YOU WANT HERE

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
const toBuffer = () => {};
const sortByProto = () => {};*/

//exports.createEnumerableProperty = createEnumerableProperty;
//exports.createNotEnumerableProperty = createNotEnumerableProperty;
//exports.createProtoMagicObject = createProtoMagicObject;
//exports.incrementor = incrementor;
//exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
/*exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;*/