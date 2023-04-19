# Storage Manager

Storage Manager is a simple npm package that provides two TypeScript services to manage key-value storage in web applications:

1. **LocalStorageManager**: A wrapper around the browser's built-in `localStorage` API.
2. **ChromeStorageManager**: A wrapper around the `chrome.storage` API for use in Chrome extensions.

## Installation

To install the package, run the following command:

```bash
npm install --save storage-manager
```

## API Documentation

Both **LocalStorageManager** and **ChromeStorageManager** share the same API, which consists of the following methods (usage of Promises only for ChromeStorageManager):

- `setItem<T>(key: string, value: T): Promise<void>`
- `getItem<T>(key: string): Promise<T | undefined>`
- `removeItem(key: string): Promise<void>`
- `clear(): Promise<void>`
- `hasItem(key: string): Promise<boolean>`
- `updateItem<T>(key: string, value: T): Promise<void>`
- `setItems<T>(items: StorageItems<T>): Promise<void>`
- `getItems<T = any>(keys?: string[]): Promise<StorageItems<T>>`
- `updateItems<T>(items: StorageItems<T>): Promise<void>`
- `removeItems(keys: string[]): Promise<void>`
- `getMultipleItems<T = any>(keys: string[]): Promise<T[]>`
- `getKeys(): Promise<string[]>`

For detailed descriptions of each method, please refer to the TypeScript source code, which includes comments and type annotations.
