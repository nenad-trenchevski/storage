"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A service class for managing data in the browser's local storage.
 */
var LocalStorageManager = /** @class */ (function () {
    function LocalStorageManager() {
    }
    LocalStorageManager.prototype.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorageManager.prototype.getItem = function (key) {
        var value = localStorage.getItem(key);
        return value ? JSON.parse(value) : undefined;
    };
    LocalStorageManager.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageManager.prototype.updateItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorageManager.prototype.setItems = function (items) {
        Object.entries(items).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            localStorage.setItem(key, JSON.stringify(value));
        });
    };
    LocalStorageManager.prototype.getItems = function (keys) {
        var result = {};
        if (keys) {
            keys.forEach(function (key) {
                var value = localStorage.getItem(key);
                if (value) {
                    result[key] = JSON.parse(value);
                }
            });
        }
        else {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                if (value) {
                    result[key] = JSON.parse(value);
                }
            }
        }
        return result;
    };
    LocalStorageManager.prototype.updateItems = function (items) {
        Object.entries(items).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            localStorage.setItem(key, JSON.stringify(value));
        });
    };
    LocalStorageManager.prototype.removeItems = function (keys) {
        keys.forEach(function (key) {
            localStorage.removeItem(key);
        });
    };
    LocalStorageManager.prototype.hasItem = function (key) {
        return localStorage.getItem(key) !== null;
    };
    LocalStorageManager.prototype.getMultipleItems = function (keys) {
        return keys.map(function (key) { return JSON.parse(localStorage.getItem(key)); });
    };
    LocalStorageManager.prototype.getKeys = function () {
        var keys = [];
        for (var i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }
        return keys;
    };
    LocalStorageManager.prototype.clear = function () {
        localStorage.clear();
    };
    return LocalStorageManager;
}());
exports.default = LocalStorageManager;
