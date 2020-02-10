const ob1={a:1,b:2};
const ob2 ={a:2,c:10,c:3,d:4,c:6};
const ob3={...ob1,...ob2};

console.log(ob3)



const isGreater = (a, b) => {
    return new Promise ((resolve, reject) => {
      if(a > b) {
        console.log("resolved")
        resolve(true)
      } else {
          console.log("rejected")
        reject(false)
      }
      })
    }
    isGreater(2,1 )
    .then(result => {
      console.log('greater')
    })
    .catch(result => {
      console.log('smaller')
    })


    var Days={
        monday:1,
        tuesday:2,
        wednesday:3
    }
    Object.freeze(Days);
    Days.tuesday=6;
    let day=Days.tuesday;
    console.log("day is:",day);

    let person = {
        name: "Leonardo"
      };
      let animal = {
        species: "snake"
      };
      Object.freeze(person);
      person.name = "Lima"; //TypeError: Cannot assign to read only property 'name' of object
      console.log(person);


      var promise= new Promise((resolve,reject)=>{
        const a=100,b=200;
        if(a>b){
            resolve("Success");
        }else{
            reject("not success");
        }
      })

      promise.then((result)=>{
          console.log("resolved",result)

      }).catch(nothing=>{
          console.log("rejected",nothing);
      })