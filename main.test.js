import {noPrime} from "./main.js";

//👉 Write your tests below here:



describe("no Prime kata", () => {

  //  it.each(letterScores)(`should score %s as %i`, (letter, score) => {
  //   expect(scrabbleScore(letter)).toBe(score);
  // });
 
  test("should return 1 with input 1", function () {
    const expected = 1;
    const actual = noPrime(1);
    expect(actual).toBe(expected);
  });

  test("should return 4 with input 2", function(){
    const expected = 4;
    const actual = noPrime(2);

    expect(actual).toBe(expected);
    });

    test("should return 8 with input 7", function () {
      const expected = 8;
      const actual = noPrime(7);
      expect(actual).toBe(expected);
    });

    test("should return 98 with input 97", function () {
      const expected = 98;
      const actual = noPrime(97);
      expect(actual).toBe(expected);
    });

    test("should return 10 with input 10", function () {
      const expected = 10;
      const actual = noPrime(10);
      expect(actual).toBe(expected);
    });

    test("should return 4 with input 4", function () {
      const expected = 4;
      const actual = noPrime(4);
      expect(actual).toBe(expected);
    });

  test("should return 0 if number is negative", function () {
    const expected = 0;
    const actual = noPrime(-6);

    expect(actual).toBe(expected);
  });

  

});

