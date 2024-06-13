import mongoose, { mongo } from "mongoose";

async function connect() {
    mongoose.connect('mongodb+srv://princemods1:banco123@cluster0.yq5rkbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

    return mongoose.connection
}

export default connect