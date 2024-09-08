import mongoose from "mongoose";


const connectDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`)
        console.log(`\n MONGODB connected!!! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR!!! ", error)
        process.exit(1)
    }
}
export default connectDatabasecc