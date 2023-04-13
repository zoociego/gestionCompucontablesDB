"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCompany = exports.newService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("@lib/models");
const newService = (name, type, price, companyId) => {
    const Service = new models_1.ServiceModel({
        DATE: new Date(),
        NAME: name,
        TYPE: type,
        PRICE: price,
        COMPANY_ID: companyId,
    });
    Service.save()
        .then((result) => {
        console.log(result);
    })
        .catch((err) => {
        console.error(err);
    })
        .finally(() => {
        mongoose_1.default.connection.close();
    });
};
exports.newService = newService;
const newCompany = (name, rut, businessActivity, email, phone, siiPassword, previredUser, previredPassword) => {
    const Company = new models_1.CompanyModel({
        CREATED_AT: new Date(),
        STATUS: 'NEW',
        NAME: name,
        RUT: rut,
        BUSINESS_ACTIVITY: businessActivity,
        EMAIL: email,
        PHONE: phone,
        SII_PASSWORD: siiPassword,
        PREVIRED_USER: previredUser,
        PREVIRED_PASSWORD: previredPassword,
    });
    Company.save()
        .then((result) => {
        console.log(result);
    })
        .catch((err) => {
        console.error(err);
    })
        .finally(() => {
        mongoose_1.default.connection.close();
    });
};
exports.newCompany = newCompany;
