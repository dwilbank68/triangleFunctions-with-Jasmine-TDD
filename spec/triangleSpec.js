describe( "Triangle functions", function () {

    describe('the args2Arr function', function(){
        it('returns a sorted array when passed three numeric arguments', function(){
            expect(args2Arr(55,2,7)).toEqual([2,7,55]);
            expect(args2Arr(55,2,"7")).toEqual([2,7,55]);

        })

        it('returns false when passed a non-numeric argument', function(){
            expect(args2Arr(55,"Twelve","7")).toBeFalsy();
        })

    })


    describe("the anyInvalidArguments function", function(){

        it('returns true when passed a non-numeric argument', function(){
            expect(anyInvalidArguments(1,2,'crash!')).toBeTruthy();
        })

        it('returns true when passed an argument = 0', function(){
            expect(anyInvalidArguments(1,2,0)).toBeTruthy();
        })

        it('returns true when passed an argument < 0', function(){
            expect(anyInvalidArguments(1,2,-10)).toBeTruthy();
        })

        it('returns false when passed numeric arguments', function(){
            expect(anyInvalidArguments("5",002,10.99)).toBeFalsy();
        })

    })



    describe('the confirmTriangle function', function(){

        it('returns true when the arguments can geometrically form a triangle', function(){
            expect(confirmTriangle(4,3,2)).toBeTruthy();
            expect(confirmTriangle(1,1,1)).toBeTruthy();
        })

        it('returns false when the arguments cannot geometrically form a triangle', function(){
            expect(confirmTriangle(5,3,2)).toBeFalsy();
        })

        it('returns false when given invalid arguments', function(){
            expect(confirmTriangle("six",3,2)).toBeFalsy();
            expect(confirmTriangle(0,3,11)).toBeFalsy();
            expect(confirmTriangle(10,-3,2)).toBeFalsy();
        })

    })

    describe('the allSidesEqual function', function(){

        it('returns false when given unequal inputs', function(){
            expect(allSidesEqual(7, 8, 9)).toBeFalsy();
            expect(allSidesEqual(20, 88, 88)).toBeFalsy();
            expect(allSidesEqual(8, 0, 8)).toBeFalsy();
        })

        it('returns false when given invalid inputs', function(){
            expect(allSidesEqual(7, "crash ths puppy", 9)).toBeFalsy();
            expect(allSidesEqual(7, -44, 9)).toBeFalsy();
        })

        it('returns true when given valid and equal inputs', function(){
            expect(allSidesEqual(8,8,8)).toBeTruthy();
            expect(allSidesEqual('5',5, 5)).toBeTruthy();
        })

    })

    describe('the onlyTwoSidesEqual function', function(){

        it('returns false when given invalid inputs', function(){
            expect(onlyTwoSidesEqual("crashy", 8, 9)).toBeFalsy();
            expect(onlyTwoSidesEqual(20, -88, 88)).toBeFalsy();
            expect(onlyTwoSidesEqual(8, 0, 8)).toBeFalsy();
        })

        it('returns false when no sides are equal', function(){
            expect(onlyTwoSidesEqual(7, 8, 9)).toBeFalsy();
        })

        it('returns false when all sides are equal', function(){
            expect(onlyTwoSidesEqual(7, 7, 7)).toBeFalsy();
        })

        it('returns true when only two sides are equal', function(){
            expect(onlyTwoSidesEqual(20, 77, 77)).toBeTruthy();
            expect(onlyTwoSidesEqual(77, 20, 77)).toBeTruthy();
        })

    })

    describe('the identifyTriangle function - MAIN FUNCTION', function(){

        it('identifies scalene triangles when given the right inputs', function(){
            expect(identifyTriangle(10,7,8)).toBe('scalene');
        })

        it('identifies equilateral triangles when given the right inputs', function(){
            expect(identifyTriangle(10,10,"10")).toBe('equilateral');
        })

        it('identifies isosceles triangles when given the right inputs', function(){
            expect(identifyTriangle(10,5,"10")).toBe('isosceles');
        })

        it('throws an error when given invalid inputs', function(){
            var func = function(){  identifyTriangle(6,11,'boom!');  }
            expect(func).toThrow( new Error('invalid arguments'));

            var func2 = function(){  identifyTriangle(6,11,-88);  }
            expect(func2).toThrow( new Error('invalid arguments'));

            var func3 = function(){  identifyTriangle(6,11,0);  }
            expect(func3).toThrow( new Error('invalid arguments'));
        })

        it('throws an error when given inputs that do not form a triangle', function(){
            var func = function(){  identifyTriangle(6,11,4);  }
            expect(func).toThrow( new Error('not a triangle'));
        })

    })


});