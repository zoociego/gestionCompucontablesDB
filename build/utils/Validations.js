"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutRegex = void 0;
exports.rutRegex = /^(\d{1,3}(\d{3})*)-?([\dkK])$/;
console.log(exports.rutRegex.test('12345678-9'));
