import { MainClass } from "../Shop/mainClass"
import { Data } from "../Shop/data"
import { basket } from "../Shop/mainClass";
import { clearCart } from "../helpers/clearCartHelper";

describe("Remove from cart tests.", () => {
    afterEach(() => {
        clearCart()
    })

    test("1. Remove last item from cart.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[1]);
        cart.removeFromBasket("iPhone 13")

        expect(basket.length).toBe(0);
    })

    test("2. Remove not last item from cart.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[0]);
        cart.addToBasket(Data[1]);
        cart.removeFromBasket("iPhone 13")

        expect(basket.length).toBe(1);
    })

    test("3. Remove one of duplicates from cart.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[1]);
        cart.addToBasket(Data[1]);
        cart.removeFromBasket("iPhone 13")

        expect(basket.length).toBe(1);
    })

    test("4. Remove several items from cart.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[0]);
        cart.addToBasket(Data[1]);
        cart.addToBasket(Data[4]);
        cart.removeFromBasket("iPhone 13")
        cart.removeFromBasket("Samsung Galaxy S21")

        expect(basket.length).toBe(1);
    })

    test("5. Call remove function for empty cart.", () => {
        const cart = new MainClass;
        cart.removeFromBasket("iPhone 13")

        expect(basket.length).toBe(0);
    })

    test("6. Remove unexisted item from cart.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[0]);
        cart.removeFromBasket("qwer12345678")

        expect(basket.length).toBe(1);
    })

    test("7. Try to remove partialy correct name", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[0]);
        cart.removeFromBasket("Samsung Galaxy S")

        expect(basket.length).toBe(1);
    })
})    