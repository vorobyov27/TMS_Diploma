import superagent from "superagent"
import { PetInfo } from "./testData/testData";
import { memory } from "./testData/testData"

describe("Check GET requests.", () => {
    beforeAll(async () => {
        const testData = new PetInfo();
        memory.time = testData.curDate;

        await superagent
        .post("https://petstore.swagger.io/v2/pet")
        .send(testData.addPet)
        .set('Content-Type','application/json');

        await superagent
        .post("https://petstore.swagger.io/v2/store/order")
        .send(testData.addOrder)
        .set('Content-Type','application/json');

        await superagent
        .delete("https://petstore.swagger.io/v2/store/order/10")
        .catch(err => {console.log("Order has removed.")})
    });

    afterAll(async () => {
        await superagent
        .delete("https://petstore.swagger.io/v2/store/order/9")
        .catch(err => {console.log("Order 9 has removed.")});

        await superagent
        .delete("https://petstore.swagger.io/v2/pet/9")
        .catch(err => {console.log("Pet 9 has removed.")});
    });

    it("1. Get by status", async () => {
        const result = await superagent
        .get("https://petstore.swagger.io/v2/pet/findByStatus?status=available")

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj[0].status).toBe("available");
    });

    it("2. Get by id.", async () => {
        const result = await superagent
        .get(`https://petstore.swagger.io/v2/pet/9`)
        
        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.name).toBe(`TMSpet`);
    });

    it("3. Get by unexisted id.", async () => {
        const result = await superagent
        .get(`https://petstore.swagger.io/v2/pet/193462124421999`)
        .catch(reason => reason);

        expect(result.status).toBe(404);
    });

    it("4. Get order by id.", async () => {
        const result = await superagent
        .get(`https://petstore.swagger.io/v2/store/order/9`)
        
        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.status).toBe("placed");
    });

    it("5. Get order by unexisted id.", async () => {
        const result = await superagent
        .get(`https://petstore.swagger.io/v2/store/order/10`)
        .catch(reason => reason);

        expect(result.status).toBe(404);
    });

});