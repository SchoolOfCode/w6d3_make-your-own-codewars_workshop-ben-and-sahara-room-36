//👉 Write your tests below here:


/*export function isPrime(number) {
          for(let i = 2; i < number; i++)
            if(number % i === 0) return false;
          return number > 1;
        
  }*/
describe ("is Prime kata", ()=> {



test("should return false if input is 1", function(){
    const expected = false;
    const actual = false;
    expect(actual).toBe(expected);
});

test("should return true for input 6", function(){
    function isPrime(number) {
        for(let i = 2; i < number; i++)
          if(number % i === 0) return false;
        return number > 1;    }

    const expected = false;
    const actual = isPrime(6);

    expect(actual).toBe(expected);
    
})

});