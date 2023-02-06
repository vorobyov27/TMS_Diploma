import { MainClass } from "../Shop/mainClass"

describe("Find by parameter tests.", () => {

    test("1. Find item by unique name.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("name", "Samsung Galaxy S21")

        expect(resultArray.length).toBe(1);
    })

    test("2. Find items by partial name.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("name", "Xiaomi")

        expect(resultArray.length).toBe(3);
    })

    test("3. Find items space in name.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("name", " ")

        expect(resultArray.length).toBe(13);
    })

    test("4. Find items by numbers in name.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("name", "6")

        expect(resultArray.length).toBe(3);
    })

    test("5. Search request with unexisted name.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("name", "qwertyuio")

        expect(resultArray.length).toBe(0);
    })

    test("6. Search request with extra space in name.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("name", "Huawei P50 ")

        expect(resultArray.length).toBe(0);
    })

    test("7. Search request with correct number type request in querry.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("name", 21)

        expect(resultArray.length).toBe(1);
    })

    test("8. Find item by correct type.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("itemType", "phone")

        expect(resultArray.length).toBe(5);
    })

    test("9. Not found item by incorrect type.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("itemType", "qwertyu")

        expect(resultArray.length).toBe(0);
    })

    test("10. Not found item by incorrect data type in querry.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("itemType", 11)

        expect(resultArray.length).toBe(0);
    })

    test("11. Find unique item by correct price.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("price", 910)

        expect(resultArray.length).toBe(1);
    })

    test("12. Find several item with the same price.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("price", 120)

        expect(resultArray.length).toBe(2);
    })

    test("13. Not found item by price.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("price", 111)

        expect(resultArray.length).toBe(0);
    })

    test("14. Not found item by incorrect data type.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("price", "qwert")

        expect(resultArray.length).toBe(0);
    })

    test("15. Not found item by incorrect price: partial coincidence.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("price", "12")

        expect(resultArray.length).toBe(0);
    })

    test("16. Find items by deliveryDays threshold.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("deliveryDays", 1)

        expect(resultArray.length).toBe(3);
    })

    test("17. Find items by deliveryDays threshold: string.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("deliveryDays", "1")

        expect(resultArray.length).toBe(3);
    })

    test("18. Not found items by deliveryDays threshold.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("deliveryDays", 0)

        expect(resultArray.length).toBe(0);
    })

    test("19. Not found items by deliveryDays threshold negative value.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("deliveryDays", -1)

        expect(resultArray.length).toBe(0);
    })

    test("20. Not found items by deliveryDays threshold: incorrect string value.", () => {
        const cart = new MainClass;
        const resultArray = cart.findByParameter("deliveryDays", "qwerty")

        expect(resultArray.length).toBe(0);
    })

})