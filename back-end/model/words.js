import  mongoose  from "mongoose";
import autoIncrement from 'mongoose-auto-increment'

const wordSchema = mongoose.Schema({
    name: String,
    description: String
});

autoIncrement.initialize(mongoose.connection);
wordSchema.plugin(autoIncrement.plugin,'words');

const postWord = mongoose.model('words', wordSchema);

export default postWord;