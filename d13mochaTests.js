"use strict";

const assert = require("assert");
const methods = require("./codeQuality.js");
const { convertFahrenheit, compundInterest } = require("./w1d3codequality.js");
const isVowel = methods.isVowel;
const computeSalesCommission = methods.computeSalesCommission;
const calcDownpayment = methods.calcDownpayment;

// isvowel
describe("isVowel", function () {
    it("a is vowel", function () { 
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () { 
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true); });
    it("o is vowel", function () { 
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true); });
    it("z is not vowel", function () {
         assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () { 
        assert.equal(isVowel("5"), false);
    }); })
//computeSalesCommission
describe("computeSalesCommission",function(){
    it("computeSalesCommission",function(){
        describe("test of ComputSalesCommission", function(){
             it("tests salaried and 200 sales", function(){
            assert.strictEqual(computeSalesCommission(true, 200), 0); 
        });
            it("tests not salaried and 200 sales", function(){
            assert.strictEqual(computeSalesCommission(false, 200), 0); 
        });
            it("tests salaried and 300 sales", function(){
                 assert.strictEqual(computeSalesCommission(true, 300), 3);
            });
            it("tests not salaried and 300 sales", function(){
            assert.strictEqual(computeSalesCommission(false, 300), 6);
         });
            it("tests salaried and 3500 sales", function(){ 
                assert.strictEqual(computeSalesCommission(true, 3500), 65);
            });
            it("tests not salaried and 3500 sales", function(){
            assert.strictEqual(computeSalesCommission(false, 3500), 100); });
            });   
        
    })
});
//calcDownpayment
describe("calcDownpayment",function(){
    it("cost of 40000 at 1% plus 7500",function(){
        assert.equal(calcDownpayment(40000), 2000);
    })
})
describe("calcDownpayment",function(){
    it("cost of 50000 at 10% plus 2500",function(){
        assert.equal(calcDownpayment(50000), 2500);
    })
})
    describe("calcDownpayment",function(){
        it("cost of 10000 at 15% plus 7500",function(){
            assert.equal(calcDownpayment(100000), 7500);
        })
    })
        describe("calcDownpayment",function(){
            it("cost of 200000 at 1% plus 5000",function(){
                assert.equal(calcDownpayment(200000), 5000);

            })
        })
        escribe("fahrenheit to celcius",function(){
            it("0 fahrenheit",function(){
                assert.equal(convertFahrenheit(0), -17.7778);

            })
        })
        escribe("fahrenheit to celcius",function(){
            it("212 fahrenheit",function(){
                assert.equal(convertFahrenheit(212), 100);

            })
        })
        
        escribe("fahrenheit to celcius",function(){
            it("32 fahrenheit",function(){
                assert.equal(convertFahrenheit(100), 37.7778);

            })
        })
        describe("calculate distance",function(){
            it("distance between (0,0,5,5,",function(){
                assert.equal(calcDistance(0, 0, 5, 5), 7.07);

            })
        })
        //compund inteerest
        describe("compundInterest",function(){
            it("$100 at 1% rate for 1 year",function(){
                assert.equal(compundInterest(100, 10, 110.47);

            })
        })
        describe("compundInterest",function(){
            it("$10000 at 5% rate for 10 years",function(){
                assert.equal(compundInterest(1000, 5, 10), 1647.09);

            })
        })

