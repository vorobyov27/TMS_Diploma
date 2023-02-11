import superagent from "superagent"
import { PetInfo } from "./testData/testData";
import { memory } from "./testData/testData"

describe("Check PUT requests.", () => {
    beforeEach(async () => {
        const testData = new PetInfo();

        await superagent
        .post("https://petstore.swagger.io/v2/pet")
        .send(testData.addPet)
        .set('Content-Type','application/json');
    });

    afterEach(async () => {
        await superagent
        .delete("https://petstore.swagger.io/v2/pet/9")
        .catch(err => {console.log("Pet 9 has removed.")});
    });

    it("1. Update name for pet item.", async () => {
        const result = await superagent
        .put("https://petstore.swagger.io/v2/pet")
        .send({
            "id": 9,
            "name": "updated name"
          })
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.name).toBe("updated name");
    });

    it("2. Update category name for pet item.", async () => {
        const result = await superagent
        .put("https://petstore.swagger.io/v2/pet")
        .send({
            "id": 9,
            "category": {
              "name": "category upd"
            }
          })
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.category.name).toBe("category upd");
    });

    it("3. Update status for pet item.", async () => {
        const result = await superagent
        .put("https://petstore.swagger.io/v2/pet")
        .send({
            "id": 9,
            "status": "sold"
          })
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.status).toBe("sold");
    });

    it("4. Update category id for pet item.", async () => {
        const result = await superagent
        .put("https://petstore.swagger.io/v2/pet")
        .send({
            "id": 9,
            "category": {
              "id": 999 
            }
          })
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.category.id).toBe(999);
    });

    it("5. Update user.", async () => {
        const testData = new PetInfo();
        const result = await superagent
        .put("https://petstore.swagger.io/v2/user/user1")
        .send({
            "id": testData.curDate,
            "lastName": "update"
          })
        .set('Content-Type','application/json');

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.message).toBe(`${testData.curDate}`);
    });
});