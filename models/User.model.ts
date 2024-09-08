import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    wallet: {
        id: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        usdBalance: {
            type: Number,
            default: 1200
        },
        rewards: {
            amount: {
                type: Number,
                default: 0
            },
            lastUpdated: {
                type: Date,
                default: Date.now()
            }
        }
    }
});

export const UserModel = mongoose.model("User", UserSchema);
