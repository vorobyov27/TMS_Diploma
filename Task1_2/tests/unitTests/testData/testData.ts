export class TestInfo {

// Test cases for dataFindResult0 data:
// Search request with unexisted name.
// Search request with extra space in name.
// Not found item by incorrect type.
// Not found item by incorrect data type in querry.
// Not found item by price.
// Not found item by incorrect data type.
// Not found item by incorrect price: partial coincidence.
// Not found items by deliveryDays threshold.
// Not found items by deliveryDays threshold negative value.
// Not found items by deliveryDays threshold: incorrect string value.

    dataFindResult0 = [
        ["name", "qwertyuio"],
        ["name", "Huawei P50 "],
        ["itemType", "qwertyu"],
        ["itemType", 11],
        ["price", 111],
        ["price", "qwert"],
        ["price", "12"],
        ["deliveryDays", 0],
        ["deliveryDays", -1],
        ["deliveryDays", "qwerty"]
    ]


// Test cases for dataFindResult1 data:
// Find item by unique name.
// Search request with correct number type request in querry.
// Find unique item by correct price.

    dataFindResult1 = [
        ["name", "Samsung Galaxy S21"],
        ["name", 21],
        ["price", 910]
    ]    


// Test cases for dataFindResult3 data:
// Find items by partial name.
// Find items by numbers in name.
// Find items by deliveryDays threshold.
// Find items by deliveryDays threshold: string.

    dataFindResult3 = [
        ["name", "Xiaomi"],
        ["name", "6"],
        ["deliveryDays", 1],
        ["deliveryDays", "1"]
    ]
}