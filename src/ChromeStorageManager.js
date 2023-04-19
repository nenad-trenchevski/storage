"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChromeStorageManager = void 0;
var ChromeStorageManager = /** @class */ (function () {
    function ChromeStorageManager(storage) {
        if (storage === void 0) { storage = chrome.storage.local; }
        this.storage = storage;
    }
    ChromeStorageManager.prototype.setItem = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                return [2 /*return*/, this._set((_a = {}, _a[key] = value, _a))];
            });
        });
    };
    ChromeStorageManager.prototype.getItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._get([key])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result[key]];
                }
            });
        });
    };
    ChromeStorageManager.prototype.removeItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._remove([key])];
            });
        });
    };
    ChromeStorageManager.prototype.updateItem = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.setItem(key, value)];
            });
        });
    };
    ChromeStorageManager.prototype.setItems = function (items) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._set(items)];
            });
        });
    };
    ChromeStorageManager.prototype.getItems = function (keys) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._get(keys)];
            });
        });
    };
    ChromeStorageManager.prototype.updateItems = function (items) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.setItems(items)];
            });
        });
    };
    ChromeStorageManager.prototype.removeItems = function (keys) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._remove(keys)];
            });
        });
    };
    ChromeStorageManager.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._clear()];
            });
        });
    };
    ChromeStorageManager.prototype.hasItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._get([key])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, key in result];
                }
            });
        });
    };
    ChromeStorageManager.prototype.getMultipleItems = function (keys) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._get(keys)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, keys.map(function (key) { return result[key]; })];
                }
            });
        });
    };
    ChromeStorageManager.prototype.getKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.storage.get(null, function (result) {
                            if (chrome.runtime.lastError) {
                                reject(chrome.runtime.lastError);
                            }
                            else {
                                resolve(Object.keys(result));
                            }
                        });
                    })];
            });
        });
    };
    ChromeStorageManager.prototype._set = function (items) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.set(items, function () {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                }
                else {
                    resolve();
                }
            });
        });
    };
    ChromeStorageManager.prototype._get = function (keys) {
        var _this = this;
        if (keys === void 0) { keys = []; }
        return new Promise(function (resolve, reject) {
            _this.storage.get(keys, function (result) {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    ChromeStorageManager.prototype._remove = function (keys) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.remove(keys, function () {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                }
                else {
                    resolve();
                }
            });
        });
    };
    ChromeStorageManager.prototype._clear = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.clear(function () {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                }
                else {
                    resolve();
                }
            });
        });
    };
    return ChromeStorageManager;
}());
exports.ChromeStorageManager = ChromeStorageManager;
