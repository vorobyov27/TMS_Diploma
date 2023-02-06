import { MainClass } from "../Shop/mainClass"
import { Data } from "../Shop/data"
import { clearCart } from "../helpers/clearCartHelper";

describe("Check final sum value tests.", () => {
    afterEach(() => {
        clearCart()
    })

    test("1. Final sum without discount.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[12]);
        const finalSum = cart.checkFinalSum();

        expect(finalSum).toBe(45);
    })

    test("2. Final sum with 2% discount.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[8]);
        const finalSum = cart.checkFinalSum();

        expect(finalSum).toBe(117.6);
    })

    test("3. Final sum with 4% discount.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[9]);
        const finalSum = cart.checkFinalSum();

        expect(finalSum).toBe(403.2);
    })

    test("4. Final sum with 5% discount.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[0]);
        const finalSum = cart.checkFinalSum();

        expect(finalSum).toBe(1140);
    })

    test("5. Empty cart.", () => {
        const cart = new MainClass;
        const finalSum = cart.checkFinalSum();

        expect(finalSum).toBe(0);
    })

})    