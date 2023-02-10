import superagent from "superagent"
import { PetInfo } from "./testData/testData";

describe("Check DELETE requests.", () => {
    beforeAll(async () => {
        const testData = new PetInfo();

        await superagent
        .post("https://petstore.swagger.io/v2/pet")
        .send(testData.addPet)
        .set('Content-Type','application/json');

        await superagent
        .post("https://petstore.swagger.io/v2/store/order")
        .send(testData.addOrder)
        .set('Content-Type','application/json');

        await superagent
        .post("https://petstore.swagger.io/v2/user")
        .send(testData.testUser)
        .set('Content-Type','application/json');
    });

    afterAll(async () => {
        await superagent
        .delete("https://petstore.swagger.io/v2/store/order/9")
        .catch(err => {console.log("Order 9 has removed.")});

        await superagent
        .delete("https://petstore.swagger.io/v2/pet/9")
        .catch(err => {console.log("Pet 9 has removed.")});

        const result = await superagent
        .delete("https://petstore.swagger.io/v2/user/tms_nickname")
        .catch(err => {console.log("User has removed.")});
    });

    it("1. Delete pet item.", async () => {
        const result = await superagent
        .delete("https://petstore.swagger.io/v2/pet/9");

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.message).toBe("9");
    });

    it("2. Delete unexisted pet item.", async () => {
        const result = await superagent
        .delete("https://petstore.swagger.io/v2/pet/9876534567811")
        .catch(reason => reason);

        expect(result.status).toBe(404);
    });
    
    it("3. Delete order item.", async () => {
        const result = await superagent
        .delete("https://petstore.swagger.io/v2/store/order/9");

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.message).toBe("9");
    });

    it("4. Delete unexisted order item.", async () => {
        const result = await superagent
        .delete("https://petstore.swagger.io/v2/store/order/9")
        .catch(reason => reason);

        expect(result.status).toBe(404);
    });

    it("5. Delete user.", async () => {
        const result = await superagent
        .delete("https://petstore.swagger.io/v2/user/tms_nickname");

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.message).toBe("tms_nickname");
    });
});