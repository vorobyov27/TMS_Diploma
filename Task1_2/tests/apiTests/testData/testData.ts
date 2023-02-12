export class PetInfo {
    curDate: number = Date.now();
    addPet = {
        "id": 9,
        "category": {
            "id": this.curDate,
            "name": `pet${this.curDate}`
        },
        "name": "TMSpet",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": this.curDate,
                "name": "TMS_pet"
            }
        ],
        "status": "available"
    }

    addOrder = {
        "id": 9,
        "petId": this.curDate,
        "quantity": 1,
        "shipDate": "2028-02-08T22:14:39.532Z",
        "status": "placed",
        "complete": true
      }

      testUser = {
        "id": 123,
        "username": "tms_nickname",
        "firstName": "tms_fn",
        "lastName": "tms_sn",
        "email": "tms@mail.tms",
        "password": "password123",
        "phone": "123456",
        "userStatus": 1
      }
}