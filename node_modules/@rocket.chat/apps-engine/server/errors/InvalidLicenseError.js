"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidLicenseError extends Error {
    constructor(validationResult) {
        super('Invalid app license');
        this.validationResult = validationResult;
    }
}
exports.InvalidLicenseError = InvalidLicenseError;

//# sourceMappingURL=InvalidLicenseError.js.map
