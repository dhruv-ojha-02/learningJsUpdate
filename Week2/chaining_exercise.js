// Question from javascript.info on the concept of this to understand how to make chainable calls
// Adding a return this; statement at the end of function call would allow chaining.

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log( this.step );
    return this;
  }
};

//This was done to make the calls chain-able

// - Instead of writing the below code: 

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// - We can directly write: 
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
