const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        //Returns a promise, wait for the promise to resolve
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        //After resolving, print out the log
        console.log('MongoDB connected...');
    } catch (error) {
        console.error(error.message);

        //Exit the process with code failure
        process.exit(1);
    }
}

module.exports = connectDB;