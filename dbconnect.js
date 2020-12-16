import mongoose from 'mongoose'

export default function() {
    
    const uri = process.env.DB_URI;

    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }); 

    return mongoose.connection;
}