"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceSchema = exports.userSchema = exports.BASchema = exports.legalRepSchema = exports.companySchema = exports.serviceSchema = void 0;
const mongoose_1 = require("mongoose");
const mongo_enum_1 = require("@enum/mongo.enum");
const StatusType = {
    type: String,
    enum: mongo_enum_1.Status,
    default: mongo_enum_1.Status.NEW,
};
const ServiceType = {
    type: String,
    enum: mongo_enum_1.Services,
    default: mongo_enum_1.Services.OTHER,
};
const ServicePrice = {
    type: Number,
    default: 0,
};
exports.serviceSchema = new mongoose_1.Schema({
    DATE: Date,
    NAME: String,
    TYPE: ServiceType,
    PRICE: ServicePrice,
    COMPANY_ID: String,
});
exports.companySchema = new mongoose_1.Schema({
    CREATED_AT: Date,
    STATUS: StatusType,
    NAME: String,
    RUT: String,
    BUSINESS_ACTIVITY: String,
    EMAIL: String,
    PHONE: String,
    SII_PASSWORD: String,
    PREVIRED_USER: String,
    PREVIRED_PASSWORD: String,
});
exports.legalRepSchema = new mongoose_1.Schema({
    NAME: String,
    RUT: String,
    EMAIL: String,
    SII_PASSWORD: String,
    COMPANY: String,
});
// bank account schema
exports.BASchema = new mongoose_1.Schema({
    BANK: String,
    ACCOUNT_TYPE: String,
    ACCOUNT_NUMBER: String,
    ACCOUNT_NAME: String,
    COMPANY: String,
});
exports.userSchema = new mongoose_1.Schema({
    NAME: String,
    RUT: String,
    EMAIL: String,
    USER: String,
    PASSWORD: String,
    ROLE: String,
    GENDER: String,
});
exports.invoiceSchema = new mongoose_1.Schema({
    COMPANY: String,
    NUMBER: String,
    DATE: String,
    TYPE: String,
    STATUS: String,
    TOTAL: Number,
    NET: Number,
    TAX: Number,
    TAX_RATE: Number,
    TAX_TYPE: String,
    TAX_EXEMPT: Boolean,
    TAX_EXEMPT_REASON: String,
});
