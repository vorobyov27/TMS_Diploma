import { MainClass } from "../../Shop/mainClass"

describe("Check discount value tests.", () => {

    test("1. Total sum < 100", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(50)
        expect(discountValue).toBe(0);
    });

    [100, 101].forEach(price =>
    test("2. Total sum = from 100 to 200.", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(price)
        expect(discountValue).toBe(2);
    }));

    [200, 201, 999].forEach(price =>
    test("3. Total sum = from 200 to 1000.", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(price)
        expect(discountValue).toBe(4);
    }));

    [1000, 100000, 1000000].forEach(price =>
    test("4. Total sum > 1000.", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(price)
        expect(discountValue).toBe(5);
    }));

    [-1, -99, -100, -101, -200, -201, -999, -1000, -1001].forEach(price =>
    test("4. Negative total sum.", () => {
        const cart = new MainClass;
        const discountValue = cart.checkDiscount(price)
        expect(discountValue).toBe(0);
    }));
})    