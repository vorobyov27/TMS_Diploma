import { PetInfo } from "./testData/testData";
import { RequestWrapper } from "./requestWrapper/requestWrapper";

describe("Check DELETE requests.", () => {
    beforeAll(async () => {
        const testData = new PetInfo();
        const petItem: string = JSON.stringify(testData.addPet);
        const orderitem: string = JSON.stringify(testData.addOrder);
        const userItem: string = JSON.stringify(testData.testUser);

        const addNewPet = new RequestWrapper("pet", "post", petItem);
        await addNewPet.getResponse()

        const addNewOrder = new RequestWrapper("store/order", "post", orderitem);
        await addNewOrder.getResponse()

        const addNewUser = new RequestWrapper("user", "post", userItem);
        await addNewUser.getResponse()
    });

    afterAll(async () => {
        const removeOrder = new RequestWrapper("store/order/9", "delete");
        await removeOrder.getResponse().catch(err => {console.log(`Order Item 9 has already removed in tests`)})
        
        const removePet = new RequestWrapper("pet/9", "delete");
        await removePet.getResponse().catch(err => {console.log(`Pet Item 9 has already removed in tests`)})

        const removeUser = new RequestWrapper("user/tms_nickname", "delete");
        await removeUser.getResponse().catch(err => {console.log(`user TMS has already removed in tests`)})
    });

    it("1. Delete pet item.", async () => {
        const removePet = new RequestWrapper("pet/9", "delete");
        const result = await removePet.getResponse()

        const testData = new PetInfo();
        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.message).toBe(`${testData.addPet.id}`);
    });

    it("2. Delete unexisted pet item.", async () => {
        const removePet = new RequestWrapper("pet/9876534567811", "delete");
        const result = await removePet.getResponse().catch(reason => reason);
        expect(result.status).toBe(404);
    });
    
    it("3. Delete order item.", async () => {
        const removeOrder = new RequestWrapper("store/order/9", "delete");
        const result = await removeOrder.getResponse()

        const testData = new PetInfo();
        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.message).toBe(`${testData.addPet.id}`);
    });

    it("4. Delete unexisted order item.", async () => {
        const removeOrder = new RequestWrapper("store/order/1326457865591", "delete");
        const result = await removeOrder.getResponse().catch(reason => reason);
        expect(result.status).toBe(404);
    });

    it("5. Delete user.", async () => {
        const removeUser = new RequestWrapper("user/tms_nickname", "delete");
        const result = await removeUser.getResponse()

        const testData = new PetInfo();
        expect(result.status).toBe(200);
        const resObj = JSON.parse(result.text);
        expect(resObj.message).toBe(`${testData.testUser.username}`);
    });
});