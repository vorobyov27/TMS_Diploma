import { MainClass } from "../Shop/mainClass"
import { Data } from "../Shop/data"
import { clearCart } from "../helpers/clearCartHelper";
import { basket } from "../Shop/mainClass";

describe("Add to Cart tests", () => {
    afterEach(() => {
        clearCart()
    })

    test("1. Add item to cart. Check cart content.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[1]);
        expect(basket.length).toBe(1);
    })

    test("2. Add several different items to cart. Check cart content.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[1]);
        cart.addToBasket(Data[2]);
        expect(basket.length).toBe(2);
    })

    test("3. Add the same item to cart several times. Check cart content.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[1]);
        cart.addToBasket(Data[1]);
        cart.addToBasket(Data[1]);
        expect(basket.length).toBe(3);
    })

    test("4. Add unexistent item.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[999]);
        console.log("cart = "+ JSON.stringify(basket))
        expect(basket.length).toBe(0);
    })
});
