import { fromJS } from "immutable"

export default function accessImmutableObject(object, array) {
    const obj = fromJS(object)
    const name = obj.getIn(array)
    return name
}

console.log(accessImmutableObject({
    name: {
         first: "Guillaume",
         last: "Salva"
    }
}, ['name', 'first']))