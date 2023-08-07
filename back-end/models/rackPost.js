import mongoose from "mongoose";

const rackPostSchema = mongoose.Schema({
    availableVerticalUnits: Number,
    devices: [{
        deviceType: String,
        modelName: String,
        numberOfPorts: Number,
        verticalSize: Number
    }]
})

const RackPostModal = mongoose.model('RackPostModal', rackPostSchema)
export default RackPostModal
