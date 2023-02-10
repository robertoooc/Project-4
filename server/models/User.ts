import e from 'express'
import mongoose, {model, Schema, Model, Document} from 'mongoose'
// import Double from 'mongoose'
// require('@mongoosejs/double')

interface IMistakes extends Document{
    char: string,
    amount: number
}
const Mistakes: Schema= new Schema({
    char: { type: String, lowercase: true },
    amount: {type: Number}
})

interface ITests extends Document{
    wpm: number,
    mistakes: Array<object>
}
const Tests: Schema= new Schema({
    wpm: { type: Number, default: 0 },
    mistakes: [Mistakes]
})

 interface IUser extends Document{
    name: string,
    email: string,
    password: string,
    average: number,
    best: number,
    tests: Array<object>

}

const UserSchema: Schema = new Schema({
    name:{ type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    average: { type: Number, default: 0 }, // will come back and try to convert to Float
    best: { type: Number, default: 0 },
    tests: [Tests]
})

// module.exports = mongoose.model('User', User)
export default mongoose.model<IUser>('User',UserSchema)