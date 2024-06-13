import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum: ['Masculino', 'Feminino', 'Outro'],
        required: true,
    },
    ageRange: {
        type: String,
        enum: ['0 - 12 anos', '13 - 17 anos', '18 - 64 anos', '65 anos ou mais'],
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { versionKey: false });

const User = mongoose.model('User', UserSchema);

export default User;
