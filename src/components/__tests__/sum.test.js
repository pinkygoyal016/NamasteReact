import { Submission } from "../Submission"

test("sum result",()=>{
    const result= Submission(3,2)
    expect(result).toBe(5)
})