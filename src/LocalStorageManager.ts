import { ILocalStorageManager, StorageItems } from "./ILocalStorageManager";

/**
 * A service class for managing data in the browser's local storage.
 */
export class LocalStorageManager implements ILocalStorageManager {
  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem<T>(key: string): T | undefined {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : undefined;
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public updateItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public setItems<T>(items: StorageItems<T>): void {
    Object.entries(items).forEach(([key, value]: [string, any]) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  }

  public getItems<T = any>(keys?: string[]): StorageItems<T> {
    const result: StorageItems<T> = {};
    if (keys) {
      keys.forEach((key) => {
        const value = localStorage.getItem(key);
        if (value) {
          result[key] = JSON.parse(value) as T;
        }
      });
    } else {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i) as string;
        const value = localStorage.getItem(key);
        if (value) {
          result[key] = JSON.parse(value) as T;
        }
      }
    }
    return result;
  }

  public updateItems<T>(items: StorageItems<T>): void {
    Object.entries(items).forEach(([key, value]: [string, any]) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  }

  public removeItems(keys: string[]): void {
    keys.forEach((key) => {
      localStorage.removeItem(key);
    });
  }

  public hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  public getMultipleItems<T = any>(keys: string[]): T[] {
    return keys.map(
      (key) => JSON.parse(localStorage.getItem(key) as string) as T
    );
  }

  public getKeys(): string[] {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i) as string);
    }
    return keys;
  }

  public clear(): void {
    localStorage.clear();
  }
}
