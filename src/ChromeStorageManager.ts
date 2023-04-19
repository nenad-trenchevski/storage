import { IChromeStorageManager } from "./IChromeStorageManager";

/**
 * A service class for managing data in the browser's Chrome storage API.
 */

type StorageItems<T> = { [key: string]: T };

export class ChromeStorageManager implements IChromeStorageManager {
  constructor(
    private storage: chrome.storage.StorageArea = chrome.storage.local
  ) {}

  public async setItem<T>(key: string, value: T): Promise<void> {
    return this._set({ [key]: value });
  }

  public async getItem<T>(key: string): Promise<T | undefined> {
    const result = await this._get([key]);
    return result[key];
  }

  public async removeItem(key: string): Promise<void> {
    return this._remove([key]);
  }

  public async updateItem<T>(key: string, value: T): Promise<void> {
    return this.setItem(key, value);
  }

  public async setItems<T>(items: StorageItems<T>): Promise<void> {
    return this._set(items);
  }

  public async getItems<T = any>(keys?: string[]): Promise<StorageItems<T>> {
    return this._get(keys);
  }

  public async updateItems<T>(items: StorageItems<T>): Promise<void> {
    return this.setItems(items);
  }

  public async removeItems(keys: string[]): Promise<void> {
    return this._remove(keys);
  }

  public async clear(): Promise<void> {
    return this._clear();
  }

  public async hasItem(key: string): Promise<boolean> {
    const result = await this._get([key]);
    return key in result;
  }

  public async getMultipleItems<T = any>(keys: string[]): Promise<T[]> {
    const result = await this._get(keys);
    return keys.map((key) => result[key]);
  }

  public async getKeys(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.storage.get(null, (result: Record<string, any>) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(Object.keys(result));
        }
      });
    });
  }

  private _set<T>(items: StorageItems<T>): Promise<void> {
    return new Promise((resolve, reject) => {
      this.storage.set(items, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });
  }

  private _get<T = any>(keys: string[] = []): Promise<StorageItems<T>> {
    return new Promise((resolve, reject) => {
      this.storage.get(keys, (result: Record<string, any>) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(result);
        }
      });
    });
  }

  private _remove(keys: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.storage.remove(keys, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });
  }

  private _clear(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.storage.clear(() => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });
  }
}
