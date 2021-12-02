import { GenderGuesser } from "./GenderGuesser";
import { AttendanceList } from "./AttendanceList";

describe('Testing GenderGuesser',()=>{
   let name;
beforeAll(()=>{
    name = new GenderGuesser();
});
test("tim call",()=>{
    name.getGuess("tim").then(result=>{
        expect(result).resolves;
    });
});
test("Return a Value",()=>{
    name.getGuess("Bob").then(result=>{
        expect(result).not.toBe(null);
    });
});
test("Jen call",()=>{
    name.getGuess("Jen").then(result=>{
        expect(result).arrayContaining('female');
    });
});

});


describe("Attandance List test",()=>{

    let list;
    beforeAll(()=>{
         list= new attendancelist();
    });

    test('list return value ',()=>{
        expect(list.add('sanyi')).not.toBeNull();

    });




})