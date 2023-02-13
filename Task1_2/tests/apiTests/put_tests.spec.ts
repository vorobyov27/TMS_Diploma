import { PetInfo } from "./testData/testData";
import { RequestWrapper } from "./requestWrapper/requestWrapper";

describe("Check PUT requests.", () => {
    beforeEach(async () => {
        const testData = new PetInfo();
        const petItem: string = JSON.stringify(testData.addPet);

        const addNewPet = new RequestWrapper("pet", "post", petItem);
        await addNewPet.getResponse()
    });

    afterEach(async () => {
        const removeOrder = new RequestWrapper("store/order/9", "delete");
        await removeOrder.getResponse().catch(err => {console.log(`Order Item 9 has already removed in tests`)})
    });

    it("1. Update name for pet item.", async () => {
        const newPutRequest = new RequestWrapper("pet", "put", `{"id": 9,"name": "updated name"}`);
        const result = await newPutRequest.getResponse()

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.name).toBe("updated name");
    });

    it("2. Update category name for pet item.", async () => {
        const newPutRequest = new RequestWrapper("pet", "put", `{"id": 9, "category": {"name": "category upd"}}`);
        const result = await newPutRequest.getResponse()

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.category.name).toBe("category upd");
    });

    it("3. Update status for pet item.", async () => {
        const newPutRequest = new RequestWrapper("pet", "put", `{"id": 9,"status": "sold"}`);
        const result = await newPutRequest.getResponse()

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.status).toBe("sold");
    });

    it("4. Update category id for pet item.", async () => {
        const newPutRequest = new RequestWrapper("pet", "put", `{"id": 9,"category": {"id": 999}}`);
        const result = await newPutRequest.getResponse()

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.category.id).toBe(999);
    });

    it("5. Update user.", async () => {
        const testData = new PetInfo();
        const newPutRequest = new RequestWrapper("user/user1", "put", `{"id": ${testData.curDate},"lastName": "update"}`);
        const result = await newPutRequest.getResponse()

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.message).toBe(`${testData.curDate}`);
    });
});