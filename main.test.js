//👉 Write your tests below here:

/*export function isPrime(number) {
          for(let i = 2; i < number; i++)
            if(number % i === 0) return false;
          return number > 1;
        
  }*/
describe("is Prime kata", () => {
  const number = [3, 5, 7];

  // test("should return false if input is 1", function () {
  //   const expected = false;
  //   const actual = false;
  //   expect(actual).toBe(expected);
  // });

  // it.each(letterScores)(`should score %s as %i`, (letter, score) => {
  //   expect(scrabbleScore(letter)).toBe(score);
  // });

  test("should return true for input 6", function () {
    function isPrime(number) {
      for (let i = 2; i < number; i++) if (number % i === 0) return false;
      return number > 1;
      expect(number).toBe(true);
    }

    // const expected = true;
    // const actual = isPrime(primeNumbers);
  });

  // test("should return false if number is negative", function () {
  //   function isNegative(number) {
  //     if (number < 0) return false;
  //   }
  //   const expected = false;
  //   const actual = isNegative(-6);

  //   expect(actual).toBe(expected);
});

// const primeNumbers = [
//   [0, false],
//   [1, false],
//   [2, true],
//   [3, true],
//   [5, true],
//   [7, true],
//   [11, true],
//   [19, true],
//   [75, false],
//   [-1, false],
//   [9, false],
//   [4, false],
//   [20, false]
//   ];
