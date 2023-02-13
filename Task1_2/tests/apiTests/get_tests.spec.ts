import { PetInfo } from "./testData/testData";
import { RequestWrapper } from "./requestWrapper/requestWrapper";

describe("Check GET requests.", () => {
    beforeAll(async () => {
        const testData = new PetInfo();
        const petItem: string = JSON.stringify(testData.addPet);
        const orderitem: string = JSON.stringify(testData.addOrder);

        const addNewPet = new RequestWrapper("pet", "post", petItem);
        await addNewPet.getResponse()

        const addNewOrder = new RequestWrapper("store/order", "post", orderitem);
        await addNewOrder.getResponse()

        const removeOrder = new RequestWrapper("store/order/10", "delete");
        await removeOrder.getResponse().catch(err => {console.log(`Order Item 10 has already removed in tests`)})
    });

    afterAll(async () => {
        const removeOrder = new RequestWrapper("store/order/9", "delete");
        await removeOrder.getResponse().catch(err => {console.log(`Order Item 9 has already removed in tests`)})

        const removePet = new RequestWrapper("pet/9", "delete");
        await removePet.getResponse().catch(err => {console.log(`Pet Item 9 has already removed in tests`)})
    });

    it("1. Get by status", async () => {
        const getNewPet = new RequestWrapper("pet/findByStatus?status=available", "get");
        const result = await getNewPet.getResponse()

        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj[0].status).toBe("available");
    });

    it("2. Get by id.", async () => {
        const testData = new PetInfo();
        const getNewPet = new RequestWrapper("pet/9", "get");
        const result = await getNewPet.getResponse()
        
        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(testData.addPet.id);
        expect(resObj.name).toBe(`${testData.addPet.name}`);
    });

    it("3. Get by unexisted id.", async () => {
        const getNewPet = new RequestWrapper("pet/193462124421999", "get");
        const result = await getNewPet.getResponse()
        .catch(reason => reason);

        expect(result.status).toBe(404);
    });

    it("4. Get order by id.", async () => {
        const testData = new PetInfo();
        const getNewOrder = new RequestWrapper("store/order/9", "get");
        const result = await getNewOrder.getResponse()
        
        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.id).toBe(testData.addOrder.id);
        expect(resObj.status).toBe(`${testData.addOrder.status}`);
    });

    it("5. Get order by unexisted id.", async () => {
        const getNewOrder = new RequestWrapper("store/order/10", "get");
        const result = await getNewOrder.getResponse()
        .catch(reason => reason);

        expect(result.status).toBe(404);
    });

});