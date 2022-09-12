const mongoose = require('mongoose')
const DB_STRING = 'mongodb+srv://mshailyn:bVC0Ia0ybFIRNXmA@cluster0.4ygox.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
