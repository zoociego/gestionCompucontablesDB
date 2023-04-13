"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectWithMongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: '../.env',
});
const uri = process.env.MONGO_DB_URI || '';
// MongoDB connection
const connectWithMongoose = () => {
    mongoose_1.default
        .connect(uri)
        .then(() => {
        console.log('DB is connected');
    })
        .catch((err) => {
        console.error(err);
    });
};
exports.connectWithMongoose = connectWithMongoose;
