export type StorageItems<T> = { [key: string]: T };

export interface ILocalStorageManager {
  /**
   * Sets an item in the storage.
   * @template T The type of the value being set.
   * @param key The key of the item to set.
   * @param value The value to set.
   */
  setItem<T>(key: string, value: T): void;

  /**
   * Updates an item in the storage.
   * @template T The type of the value being updated.
   * @param key The key of the item to updated.
   * @param value The value to updated.
   */
  updateItem<T>(key: string, value: T): void;

  /**
   * Retrieves an item from the storage.
   * @template T The type of the value being retrieved.
   * @param key The key of the item to get.
   * @returns The value, or undefined if the item does not exist.
   */
  getItem<T>(key: string): T | undefined;

  /**
   * Removes an item from the storage.
   * @param key The key of the item to remove.
   */
  removeItem(key: string): void;

  /**
   * Sets multiple items in the storage.
   * @template T The type of the values being set.
   * @param items An object containing key-value pairs to set in the storage.
   */
  setItems<T>(items: StorageItems<T>): void;

  /**
   * Retrieves multiple items from the storage.
   * @template T The type of the values being retrieved.
   * @param keys An optional array of keys to get from the storage. If not provided, all items are retrieved.
   * @returns An object containing the key-value pairs.
   */
  getItems<T = any>(keys?: string[]): StorageItems<T>;

  /**
   * Updates multiple items in the storage.
   * @template T The type of the values being updated.
   * @param items An object containing key-value pairs to update in the storage.
   */
  updateItems<T>(items: StorageItems<T>): void;

  /**
   * Removes multiple items from the storage.
   * @param keys An array of keys to remove from the storage.
   */
  removeItems(keys: string[]): void;

  /**
   * Checks if an item exists in the storage.
   * @param key The key of the item to check.
   * @returns A boolean indicating whether the item exists.
   */
  hasItem(key: string): boolean;

  /**
   * Retrieves multiple items by their keys and returns an array of values.
   * @template T The type of the values being retrieved.
   * @param keys An array of keys to get from the storage.
   * @returns An array of values.
   */
  getMultipleItems<T = any>(keys: string[]): T[];

  /**
   * Retrieves all keys in the storage.
   * @returns An array of keys.
   */
  getKeys(): string[];

  /**
   * Clears all items from the storage.
   */
  clear(): void;
}
