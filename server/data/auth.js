import Mongoose from 'mongoose'
import {useVirtualId} from '../database/database.js';

const userSchema = new Mongoose.Schema({ // 스키마를 코드로 저장함으로써 데이터의 일관성을 높일 수 있다.
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    eml: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    url: String
})

useVirtualId(userSchema);
const User = Mongoose.model('User', userSchema);

export async function findByUsername(username) {
    return User.findOne({ username })
}

export async function findById(id) {
    return User.findById(id)
}

export async function createUser(user) {
    return new User(user).save().then((data) => data.id)
}
