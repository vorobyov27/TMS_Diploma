import { TItem } from "./data"
import { Data } from "./data"

export let basket: TItem[] = [];

export class MainClass {
    addToBasket (item: TItem) {
        if (item == null || item == undefined) {
            console.log("Nothing is added to cart. Incorrect income data.")
        } else {
            basket.push(item)
            console.log("Basket content is: " + JSON.stringify(basket))
        }
    }

    totalSum(): number {
        if (basket.length > 0) {
            let totalAmount: number = 0;
            basket.forEach(element => {
                totalAmount += element.price
            }) 
            console.log("totalAmount is: " + totalAmount)
            return totalAmount;
        } else {
            return 0
        }
    }

    checkDiscount(orderSum: number): number {
        if (orderSum < 100) {
            return 0
        }
        if (orderSum < 200) {
            return 2
        } else if (orderSum < 1000) {
            return 4
        } else {
            return 5
        }
    }

    removeFromBasket(itemName: string) {
        if (basket.length > 0){
            const removeIndex: number = basket.findIndex(element => {
                return element.name === itemName
            })
            console.log("removeIndex = "+removeIndex)
            if (removeIndex > -1) {
                basket.splice(removeIndex, 1)
            } else {
                console.log(`Cannot find ${itemName} in cart.`)
            }
        } else {
            console.log("Nothing to remove. Cart is empty.")
        }
    }

    checkFinalSum(): number {
        let finalSum: number = 0;
        if (basket.length > 0) {
            const sum = this.totalSum();
            const discount = this.checkDiscount(sum);
            console.log("discount = "+discount)
            finalSum = (sum * (100 - discount))/100;
        }
        console.log("finalSum is: " + finalSum)   
        return finalSum;
    }

    findByParameter(parameterName: string, searchQuery: string|number): TItem[] {
        let result: TItem[] = [];
        switch (parameterName) {
            case 'name': {
                result = Data.filter(el => (el.name.indexOf(searchQuery.toString()) > -1))
                break
            }
            case 'itemType': {
                result = Data.filter(el => (el.itemType === searchQuery))
                break
            }
            case 'price': {
                result = Data.filter(el => (el.price === searchQuery))
                break
            }
            case 'deliveryDays': {
                result = Data.filter(el => (el.deliveryDays <= searchQuery))
                break
            }
            default: {
                console.log("Cannot find items with search parameters")
            }
        }
        console.log("result is: " + JSON.stringify(result)) 
        return result;
    }
}