"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectDB_1 = require("@utils/connectDB");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
(0, connectDB_1.connectWithMongoose)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.get('/ping', (_req, res) => {
    res.send('pong');
});
