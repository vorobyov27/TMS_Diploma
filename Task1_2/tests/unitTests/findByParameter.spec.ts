import { MainClass } from "../../Shop/mainClass"
import { TestInfo } from "./testData/testData";

describe("Find by parameter tests.", () => {
    const testData = new TestInfo()

    test("1. Find items space in name.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("name", " ")

        expect(resultArray.length).toBe(13);
    })

    test("2. Find item by correct type.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("itemType", "phone")

        expect(resultArray.length).toBe(5);
    })

    test("3. Find several item with the same price.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("price", 120)

        expect(resultArray.length).toBe(2);
    })

    testData.dataFindResult1.forEach(item => 
    test("4. Positive cases with correct search(1 search results).", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter(`${item[0]}`, item[1])
        
        expect(resultArray.length).toBe(1);
    }))

    testData.dataFindResult3.forEach(item => 
    test("5. Positive cases with correct search(3 search results).", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter(`${item[0]}`, item[1])
    
        expect(resultArray.length).toBe(3);
    }))

    testData.dataFindResult0.forEach(item => 
    test("6. Negative cases.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter(`${item[0]}`, item[1])
    
        expect(resultArray.length).toBe(0);
    }))
})