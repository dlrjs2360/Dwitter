import Mongoose from 'mongoose'
import {config} from '../config.js';

export async function connectDB() {
    return Mongoose.connect(config.db.host, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}

export function useVirtualId(schema) {

    // _id -> id 데이터베이스에는 _id로 저장되지만 사용자가 불러올떄는 id라는 가상의 이름을 적용해준다.
    schema
        .virtual('id')
        .get(function () {
            return this
                ._id
                .toString()
        })
    schema.set('toJSON', {virtuals: true}) // json으로 변환할 때 가상의 요소도 포함시켜준다.
    schema.set('toObject', {virtuals: true}) // log에도 요소를 포함시켜준다.
}

// ToDo(dlrjs) remove


export function getTweets() {
    return db.collection('tweets');
}
