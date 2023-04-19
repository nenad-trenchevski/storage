export type StorageItems<T> = { [key: string]: T };

export interface IChromeStorageManager {
  /**
   * Sets a single item in the storage.
   * @template T The type of the value being stored.
   * @param key The key of the item to set.
   * @param value The value of the item to set.
   * @returns A Promise that resolves when the item is set.
   */
  setItem<T>(key: string, value: T): Promise<void>;

  /**
   * Retrieves a single item from the storage.
   * @template T The type of the value being retrieved.
   * @param key The key of the item to get.
   * @returns A Promise that resolves with the item value or undefined if not found.
   */
  getItem<T>(key: string): Promise<T | undefined>;

  /**
   * Updates a single item in the storage.
   * @template T The type of the value being updated.
   * @param key The key of the item to update.
   * @param value The new value of the item.
   * @returns A Promise that resolves when the item is updated.
   */
  updateItem<T>(key: string, value: T): Promise<void>;

  /**
   * Removes a single item from the storage.
   * @param key The key of the item to remove.
   * @returns A Promise that resolves when the item is removed.
   */
  removeItem(key: string): Promise<void>;

  /**
   * Sets multiple items in the storage.
   * @template T The type of the values being stored.
   * @param items An object containing key-value pairs (StorageItems) to set in the storage.
   * @returns A Promise that resolves when the items are set.
   */
  setItems<T>(items: StorageItems<T>): Promise<void>;

  /**
   * Retrieves multiple items from the storage.
   * @template T The type of the values being retrieved.
   * @param keys An optional array of keys to get from the storage. If not provided, retrieves all items.
   * @returns A Promise that resolves with an object (StorageItems) containing the key-value pairs.
   */
  getItems<T = any>(keys?: string[]): Promise<StorageItems<T>>;

  /**
   * Updates multiple items in the storage.
   * @template T The type of the values being updated.
   * @param items An object containing key-value pairs (StorageItems) to update in the storage.
   * @returns A Promise that resolves when the items are updated.
   */
  updateItems<T>(items: StorageItems<T>): Promise<void>;

  /**
   * Removes multiple items from the storage.
   * @param keys An array of keys to remove from the storage.
   * @returns A Promise that resolves when the items are removed.
   */
  removeItems(keys: string[]): Promise<void>;

  /**
   * Clears all data from the storage.
   * @returns A Promise that resolves when the storage is cleared.
   */
  clear(): Promise<void>;

  /**
   * Checks if an item exists in the storage.
   * @param key The key of the item to check.
   * @returns A Promise that resolves with a boolean indicating whether the item exists.
   */
  hasItem(key: string): Promise<boolean>;

  /**
   * Retrieves multiple items by their keys and returns an array of values.
   * @template T The type of the values being retrieved.
   * @param keys An array of keys to get from the storage.
   * @returns A Promise that resolves with an array of values.
   */
  getMultipleItems<T = any>(keys: string[]): Promise<T[]>;

  /**
   * Retrieves all keys in the storage.
   * @returns A Promise that resolves with an array of keys.
   */
  getKeys(): Promise<string[]>;
}
