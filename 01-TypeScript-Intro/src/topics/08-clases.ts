class Person{
  constructor(
    public name: string,
    private address: string = 'No address'
  ){
    this.name = name;
    this.address = address;
  }
}

class Hero extends Person{
  constructor() {
    super()
  }
}

const ironman = new Person('ironman','new york');

console.log(ironman);

export { };
