"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChromeStorageManager = exports.LocalStorageManager = void 0;
var LocalStorageManager_1 = require("./LocalStorageManager");
Object.defineProperty(exports, "LocalStorageManager", { enumerable: true, get: function () { return __importDefault(LocalStorageManager_1).default; } });
var ChromeStorageManager_1 = require("./ChromeStorageManager");
Object.defineProperty(exports, "ChromeStorageManager", { enumerable: true, get: function () { return ChromeStorageManager_1.ChromeStorageManager; } });
