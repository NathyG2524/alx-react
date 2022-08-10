import * as notifi from '../notification.json'
import { normalize, schema } from 'normalizr';


export const  getAllNotificationsByUser =  (userId) => {
    let userNot = []
    notifi.default.map((item) => {
        if (item.author.id == userId){
            userNot.push(item.context)
        }
            
    })
    return userNot
}

const user = new schema.Entity("users")

const message = new schema.Entity("messages", {},{
    idAttribute: "guid"
});

const notification = new schema.Entity("notifications", {
    author: user,
    context: message
})

export const normalizedData = normalize(notifi.default, [notification])

// console.log(normalizedData)

