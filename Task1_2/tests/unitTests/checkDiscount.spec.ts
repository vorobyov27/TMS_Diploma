import { MainClass } from "../../Shop/mainClass"

describe("Check discount value tests.", () => {

    test("1. Total sum < 100", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(50)
        expect(discountValue).toBe(0);
    })

    test("2. Total sum = 100", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(100)
        expect(discountValue).toBe(2);
    })

    test("3. Total sum = from 100 to 200.", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(101)
        expect(discountValue).toBe(2);
    })

    test("4. Total sum = 200.", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(200)
        expect(discountValue).toBe(4);
    })

    test("5. Total sum = from 200 to 1000.", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(999)
        expect(discountValue).toBe(4);
    })

    test("6. Total sum = 1000.", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(1000)
        expect(discountValue).toBe(5);
    })

    test("7. Total sum > 100000.", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(100000)
        expect(discountValue).toBe(5);
    })

    test("8. Negative total sum.", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(-1)
        expect(discountValue).toBe(0);
    })

    test("9. Negative total sum > - 99", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(-99)
        expect(discountValue).toBe(0);
    })

    test("10. Negative total sum < - 100", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(-101)
        expect(discountValue).toBe(0);
    })

    test("11. Negative total sum < - 1000", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(-1001)
        expect(discountValue).toBe(0);
    })
})    