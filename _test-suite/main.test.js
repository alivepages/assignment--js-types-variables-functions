var expect = chai.expect;

describe('addMoreEnthusiasm()', function() {
  it('should be a function', function() {
    return expect(addMoreEnthusiasm).to.be.a('function');
  });

  it('should return "I want pizza!!!"', function() {
    return expect(addMoreEnthusiasm("I want pizza")).to.equal("I want pizza!!!");
  });

  it('should return "Hey!!!"', function() {
    return expect(addMoreEnthusiasm("Hey")).to.equal("Hey!!!");
  });
});

describe('simpleSum()', function() {
  it('should be a function', function() {
    return expect(simpleSum).to.be.a('function');
  });

  it('should return 19 for simpleSum(8, 11)', function() {
    return expect(simpleSum(8, 11)).to.equal(19);
  });

  it('should return 105 for simpleSum(4, 101)', function() {
    return expect(simpleSum(4, 101)).to.equal(105);
  });

  it('should not return 5 for simpleSum(2, 2)', function() {
    return expect(simpleSum(2, 2)).not.to.equal(5);
  });
});

describe('getAverage()', function() {
  it('should be a function', function() {
    return expect(getAverage).to.be.a('function');
  });

  it('should return 10 for getAverage(5,15)', function() {
    return expect(getAverage(5,15)).to.equal(10);
  });

  it('should return 20 for getAverage(18,22)', function() {
    return expect(getAverage(18,22)).to.equal(20);
  });

  it('should return 150 for getAverage(100,200)', function() {
    return expect(getAverage(100,200)).to.equal(150);
  });

  it('should return 1 for getAverage(-12,12)', function() {
    return expect(getAverage(-12,12)).to.equal(0);
  });
});

describe('isNegative()', function() {
  it('should be a function', function() {
    return expect(isNegative).to.be.a('function');
  });

  it('should return false for 100', function() {
    return expect(isNegative(100)).to.be.false;
  });

  it('should return false for 14', function() {
    return expect(isNegative(14)).to.be.false;
  });

  it('should return false for 2', function() {
    return expect(isNegative(2)).to.be.false;
  });

  it('should return false for 0', function() {
    return expect(isNegative(0)).to.be.false;
  });

  it('should return true for -1', function() {
    return expect(isNegative(-1)).to.be.true;
  });

  it('should return true for -64', function() {
    return expect(isNegative(-64)).to.be.true;
  });
});

describe('makeGreeting()', function() {
  it('should be a function', function() {
    return expect(makeGreeting).to.be.a('function');
  });

  it('should return "Hello Atushi" for "Atushi"', function() {
    return expect(makeGreeting('Atushi')).to.equal('Hello Atushi');
  });

  it('should return "Hello Mira" for "Mira"', function() {
    return expect(makeGreeting('Mira')).to.equal('Hello Mira');
  });

  it('should return "Hello Nico" for "Nico"', function() {
    return expect(makeGreeting('Nico')).to.equal('Hello Nico');
  });
});

describe('makeUserGreeting()', function() {
  it('should be a function', function() {
    return expect(makeUserGreeting).to.be.a('function');
  });

  it('should return "Good to see you again, Atushi." for "Atushi" when true is passed', function() {
    return expect(makeUserGreeting("Atushi", true)).to.equal('Good to see you again, Atushi.');
  });

  it('should return "Welcome, Mira!" for "Mira" when false is passed', function() {
    return expect(makeUserGreeting("Mira", false)).to.equal('Welcome, Mira!');
  });

  it('should not return "Good to see you again, Nico." for "Nico" when false is passed', function() {
    return expect(makeUserGreeting("Nico", false)).not.to.equal('Good to see you again, Nico.');
  });
});

describe('getMinimum()', function() {
  it('should be a function', function() {
    return expect(getMinimum).to.be.a('function');
  });

  it('should return 0 for 1, 2, 4, 0 series', function() {
    return expect(getMinimum(1,2,4,0)).to.equal(0);
  });

  it('should return 4 for 4, 8, 4, 20 series', function() {
    return expect(getMinimum(4,8,4,20)).to.equal(4);
  });

  it('should return -99 for 1000, -2, -99, 50 series', function() {
    return expect(getMinimum(1000,-2,-99,50)).to.equal(-99);
  });

  it('should return -1000 for -1000, -2, -99, 50 series', function() {
    return expect(getMinimum(-1000,-2,-99,50)).to.equal(-1000);
  });

  it('should return -11 for 400, -11, 4, -5 series', function() {
    return expect(getMinimum(400,-11,4,-5)).to.equal(-11);
  });
});

describe('isVowel()', function() {
  it('should be a function', function() {
    return expect(isVowel).to.be.a('function');
  });

  it('should return false for "x"', function() {
    return expect(isVowel('x')).to.be.false;
  });

  it('should return true for "e"', function() {
    return expect(isVowel('e')).to.be.true;
  });

  it('should return true for "o"', function() {
    return expect(isVowel('o') ).to.be.true;
  });

  it('should return false for "n"', function() {
    return expect(isVowel('n')).to.be.false;
  });

  it('should return false for "L"', function() {
    return expect(isVowel('L') ).to.be.false;
  });

  it('should return true for "A"', function() {
    return expect(isVowel('A')).to.be.true;
  });

  it('should return true for "O"', function() {
    return expect(isVowel('O')).to.be.true;
  });

  it('should return true for "y"', function() {
    return expect(isVowel('y')).to.be.true;
  });
});

describe('getSeasonForMonth()', function() {
  it('should be a function', function() {
    return expect(getSeasonForMonth).to.be.a('function');
  });

  describe('Basic Mode', function() {
    it('should return "winter" for 1st month', function() {
      return expect(getSeasonForMonth(1)).to.equal('winter');
    });

    it('should return "spring" for 3rd month', function() {
      return expect(getSeasonForMonth(3)).to.equal('spring');
    });

    it('should return "spring" for 5th month', function() {
      return expect(getSeasonForMonth(5)).to.equal('spring');
    });

    it('should return "summer" for 7th month', function() {
      return expect(getSeasonForMonth(7)).to.equal('summer');
    });

    it('should return "fall" for 9th month', function() {
      return expect(getSeasonForMonth(9)).to.equal('fall');
    });

    it('should return "winter" for 12nd month', function() {
      return expect(getSeasonForMonth(12)).to.equal('winter');
    });
  });

  describe('Advanced Mode', function() {
    it('should return false for 13rd month', function() {
      return expect(getSeasonForMonth(13)).to.be.false;
    });

    it('should return false for 32nd month', function() {
      return expect(getSeasonForMonth(32)).to.be.false;
    });

    it('should return false for 0 month', function() {
      return expect(getSeasonForMonth(0)).to.be.false;
    });

    it('should return false for no month passed', function() {
      return expect(getSeasonForMonth()).to.be.false;
    });

    it('should return false for "June"', function() {
      return expect(getSeasonForMonth("June")).to.be.false;
    });
  });
});

describe('justOneString()', function() {
  it('should be a function', function() {
    return expect(justOneString).to.be.a('function');
  });

  it('should return true for "a", 5', function() {
    return expect(justOneString('a', 5)).to.be.true;
  });

  it('should return true for 6, "dotron"', function() {
    return expect(justOneString(6, 'dotron')).to.be.true;
  });

  it('should return false for "peanut", "butter"', function() {
    return expect(justOneString('peanut', 'butter')).to.be.false;
  });

  it('should return false for 8, true', function() {
    return expect(justOneString(8, true)).to.be.false;
  });
});

describe('calcSpeedTicket()', function() {
  it('should be a function', function() {
    return expect(calcSpeedTicket).to.be.a('function');
  });

  it('should return 150 for "25, 40, false" series', function() {
    return expect(calcSpeedTicket(25, 40, false)).to.equal(150);
  });

  it('should return 150 for "65, 72, true" series', function() {
    return expect(calcSpeedTicket(65, 72, true)).to.equal(300);
  });

  it('should return 250 for "75, 97, false" series', function() {
    return expect(calcSpeedTicket(75, 97, false)).to.equal(250);
  });

  it('should return 500 for "55, 83, true" series', function() {
    return expect(calcSpeedTicket(55, 83, true)).to.equal(500);
  });

  it('should return 0 for "30, 27, true" series', function() {
    return expect(calcSpeedTicket(30, 27, true)).to.equal(0);
  });
});
