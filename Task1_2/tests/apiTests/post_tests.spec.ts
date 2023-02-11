import superagent from "superagent"
import { PetInfo } from "./testData/testData";
import { memory } from "./testData/testData"

describe("Check POST requests.", () => {
    beforeAll(async () => {
        const testData = new PetInfo();

        await superagent
        .post("https://petstore.swagger.io/v2/pet")
        .send(testData.addPet)
        .set('Content-Type','application/json');
    });

    afterAll(async () => {
        await superagent
        .delete("https://petstore.swagger.io/v2/store/order/9")
        .catch(err => {console.log("Order 9 has removed.")});

        await superagent
        .delete("https://petstore.swagger.io/v2/pet/9")
        .catch(err => {console.log("Pet 9 has removed.")});
    });

    it("1. Add new pet item.", async () => {
        const testData = new PetInfo();

        const result = await superagent
        .post("https://petstore.swagger.io/v2/pet")
        .send(testData.addPet)
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.name).toBe("TMSpet");
        expect(resObj.status).toBe("available");
    });

    it("2. Add new pet item without full info.", async () => {
        const testData = new PetInfo();

        const result = await superagent
        .post("https://petstore.swagger.io/v2/pet")
        .send({"id": testData.curDate})
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(testData.curDate);
        expect(resObj).not.toHaveProperty("name");
        expect(resObj).not.toHaveProperty("category");
        expect(resObj).not.toHaveProperty("status");
    });

    it("3. Add new order.", async () => {
        const testData = new PetInfo();

        const result = await superagent
        .post("https://petstore.swagger.io/v2/store/order")
        .send(testData.addOrder)
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.status).toBe("placed");
    });

    it("4. Add new order without full data.", async () => {
        const result = await superagent
        .post("https://petstore.swagger.io/v2/store/order")
        .send({"id":9})
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.complete).toBe(false);
        expect(resObj).not.toHaveProperty("status");
        expect(resObj).not.toHaveProperty("shipDate");
    });

    it("5. Add new user.", async () => {
        const testData = new PetInfo();

        const result = await superagent
        .post("https://petstore.swagger.io/v2/pet")
        .send(testData.testUser)
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
    });

});