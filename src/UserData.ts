import {UserAddress} from "./UserAddress";
import {JSONInteger, JSONObject, JSONSchema, JSONString} from "tabbouleh";

@JSONSchema<UserData>({
    title: 'User form',
    description: 'All the user data',
    required: ['name', 'age', 'address']
})
export class UserData {

    @JSONString({
        title: 'lastname',
        minLength: 3
    })
    name: string;

    @JSONInteger({
        minimum: 0
    })
    age: number;

    @JSONObject(() => UserAddress)
    address: UserAddress;

}