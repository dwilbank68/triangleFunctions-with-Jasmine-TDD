describe( "toRoman", function () {


    it('returns an empty string when passed a zero or negative integer', function(){
        expect(toRoman(0)).toEqual("");
        expect(toRoman(-220)).toEqual("");
    })

    it('returns nothing when passed a non-numeric argument', function(){
        expect(toRoman("CRASHO")).toBeFalsy();
    })

    it('returns false when passed an arabic numeral > 3000', function(){
        expect(toRoman(3001)).toBeFalsy();
    })

    it('returns equivalent roman numerals when passed an arabic numeral < 3000', function(){
        expect(toRoman(476)).toEqual("CDLXXVI");
        expect(toRoman(1990)).toEqual("MCMXC");
        expect(toRoman(2008)).toEqual("MMVIII");
    })

    it('rounds floating point numbers down before converting them to roman numerals', function(){
        expect(toRoman(987.9999)).toEqual(toRoman(987));
    })


});