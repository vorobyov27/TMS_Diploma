import { PetInfo } from "./testData/testData";
import { RequestWrapper } from "./requestWrapper/requestWrapper";

describe("Check POST requests.", () => {
    beforeAll(async () => {
        const testData = new PetInfo();
        const petItem: string = JSON.stringify(testData.addPet);

        const newPostRequest = new RequestWrapper("pet", "post", petItem);
        await newPostRequest.getResponse()
    });

    afterAll(async () => {
        const removeReq1 = new RequestWrapper("store/order/9", "delete");
        await removeReq1.getResponse().catch(err => {console.log(`Order Item 9 has already removed in tests`)})
        
        const removeReq2 = new RequestWrapper("pet/9", "delete");
        await removeReq2.getResponse().catch(err => {console.log(`Pet Item 9 has already removed in tests`)})
    });

    it("1. Add new pet item.", async () => {
        const testData = new PetInfo();
        const petItem: string = JSON.stringify(testData.addPet);

        const newPostRequest = new RequestWrapper("pet", "post", petItem);
        const result = await newPostRequest.getResponse()
        expect(result.status).toBe(200)
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(testData.addPet.id);
        expect(resObj.name).toBe(`${testData.addPet.name}`);
        expect(resObj.status).toBe(`${testData.addPet.status}`);
    });

    it("2. Add new pet item without full info.", async () => {
        const testData = new PetInfo();

        const newPostRequest = new RequestWrapper("pet", "post", `{"id": ${testData.curDate}}`);
        const result = await newPostRequest.getResponse()

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(testData.curDate);
        expect(resObj).not.toHaveProperty("name");
        expect(resObj).not.toHaveProperty("category");
        expect(resObj).not.toHaveProperty("status");
    });

    it("3. Add new order.", async () => {
        const testData = new PetInfo();
        const orderItem: string = JSON.stringify(testData.addOrder);

        const newPostRequest = new RequestWrapper("store/order", "post", orderItem);
        const result = await newPostRequest.getResponse()

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(testData.addOrder.id);
        expect(resObj.status).toBe(`${testData.addOrder.status}`);
    });

    it("4. Add new order without full data.", async () => {
        const newPostRequest = new RequestWrapper("store/order", "post", '{"id":9}');
        const result = await newPostRequest.getResponse()

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(9);
        expect(resObj.complete).toBe(false);
        expect(resObj).not.toHaveProperty("status");
        expect(resObj).not.toHaveProperty("shipDate");
    });

    it("5. Add new user.", async () => {
        const testData = new PetInfo();
        const userItem: string = JSON.stringify(testData.testUser);

        const newPostRequest = new RequestWrapper("user", "post", userItem);
        const result = await newPostRequest.getResponse()
        expect(result.status).toBe(200);
    });
})