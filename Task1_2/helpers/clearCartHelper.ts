import { basket } from "../Shop/mainClass";

export function clearCart() {
    const initialArrayLenght = basket.length;
    for (let i = 0; i < initialArrayLenght; i++) {
        basket.shift()
    }
}