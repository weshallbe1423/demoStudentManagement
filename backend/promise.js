

var promises=[]
for(var i=0;i<10;i++){
  promises.push(new Promise((resolve,reject)=>{
    var timeout = i * 10;
    setImmediate(()=>{
      console.log("New promise after "+timeout+"seconds");

    },timeout);
  }
    
  )
  )
}
Promise.all(promises)
.then(result=>{console.log(result)})
.catch(err=>{console.log(err)});


var myfunction=async()=>{
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 5000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
    console.log(result);
    console.log("result will printed soon:")
    console.log("result will printed soon:")
    console.log("result will printed soon:")
    console.log("result will printed soon:")
    console.log("result will printed soon:")
    console.log("result will printed soon:")

}
myfunction();

Promise.race([
  new Promise(resolve => setTimeout(() => resolve("first"), 1000)), // 1
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise(resolve => setTimeout(() => resolve("third"), 1000))  // 3
]).then(res=>{
  console.log("result"+res);
}).catch(err=>{
  console.log("result"+err);
})


async function forLoopInParallel () {  
  const result = []
  const timeouts = [10, 600, 200, 775, 125, 990]
  const promises = timeouts.map(timeout => asyncProcessing(timeout))

  for (const timeoutPromise of promises) {
    result.push(await timeoutPromise)
  }

  return result
}

var add = (function () {
  var counter = 0;
  return function addition () {
    counter += 1;
    return counter;
  }
})();

console.log(add());
console.log(add());
console.log(add());


var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(item=>{
  if(item>18){
    return item;
  }
});
 var sum=numbers.reduce((items,value)=>{
   return items+value
 })
 var test=numbers.every((items,value,index)=>{
   return items>18
 })
 var some=numbers.some((items,value,index)=>{
  return items>18
})
var find=numbers.find((items,value,index)=>{
  return items>18
})


console.log(find)

console.log(some)

 console.log(test)
 console.log(sum)
console.log(over18);


var points = [40, 100, 1, 5, 25, 10];
var ascendsorted=points.sort(function(a, b){return b - a});
var descendsorted=points.sort(function(b, a){return a - b});

console.log(ascendsorted);
console.log(descendsorted);
var maxValue=Math.max.apply(null,points);
var minValue=Math.min.apply(null,points);
var misc=Math.min.apply(19,points)
var num=1000;
console.log("isNumber",Number.isInteger(num));
console.log("isNaN",isNaN("d "))

console.log(misc);
console.log(minValue);

console.log(maxValue);



function *gen(){
  var a= yield "vishal";
  var b= yield "sagar";
  var c =yield "sachin"
  return "me";
}
var g=gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());


function multiply(a,b) {
  var realme="multi is :"
  var addme="addition is:"
  function mult() {
    return realme + (a*b)
    function add() {
      return addme + (a+b)
      
    }
    
  }
  
  return mult() 
}
var p=multiply(3,9);
console.log("closure result:",p);


