import { MainClass } from "../Shop/mainClass"
import { Data } from "../Shop/data"
import { clearCart } from "../helpers/clearCartHelper";

describe("Total sum tests.", () => {
    afterEach(() => {
        clearCart()
    })

    test("1. Check total sum for 1 item in cart.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[1]);
        const sum = cart.totalSum()
        expect(sum).toBe(1300);
    })

    test("2. Check total sum for several different items in cart.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[0]);
        cart.addToBasket(Data[1]);
        cart.addToBasket(Data[2]);
        const sum = cart.totalSum()
        expect(sum).toBe(3400);
    })

    test("3. Check total sum for item added in cart several times.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[0]);
        cart.addToBasket(Data[0]);
        cart.addToBasket(Data[0]);
        cart.addToBasket(Data[0]);
        const sum = cart.totalSum()
        expect(sum).toBe(4800);
    })

    test("4. Check total sum for cart with duplicates.", () => {
        const cart = new MainClass;
        cart.addToBasket(Data[0]);
        cart.addToBasket(Data[0]);
        cart.addToBasket(Data[1]);
        cart.addToBasket(Data[1]);
        const sum = cart.totalSum()
        expect(sum).toBe(5000);
    })

    test("5. Check total sum for empty cart.", () => {
        const cart = new MainClass;
        const sum = cart.totalSum()
        expect(sum).toBe(0);
    })
})    