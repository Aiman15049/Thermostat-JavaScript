describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });


  describe('knows when a number is not', function() {
    it('divisible by 3', function() {
    expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });


  describe('know when a number is', function() {
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });
  });


  describe('know when a number is not', function() {
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('know when a number is not', function() {
    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('know when a number is', function() {
    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFive(15)).toBe(true);
    });
  });






  describe('when playing says', function() {
    it('Java when divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });
  });




});
