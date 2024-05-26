class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static registerStray() {
    const names = [
      "Muffin",
      "Biscuit",
      "Sleepy",
      "Dodo",
      "Princess Butterface",
    ];
    const name = choice(names);
    return new Cat(name, "unknown");
  }
  meow() {
    return `${this.name} says meow`;
  }
}

function choice(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

/*
Now we're going to call Cat.registerStray.

But it makes sense that it lives on the class. It's a static method.

It doesn't have to do with a particular instance.

It's not like this meow method or whatever other methods. 
*/