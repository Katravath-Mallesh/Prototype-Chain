let animal = {
    eats: true,
    walk() {
      console. log("Animal walks");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  
  longEar.walk();  // "Animal walks" (from animal)
  console.log(longEar.jumps);  // true (from rabbit)
  