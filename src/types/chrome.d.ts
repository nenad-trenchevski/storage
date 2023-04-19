declare namespace chrome {
  namespace storage {
    interface StorageArea {
      [key: string]: any;
    }

    const local: StorageArea;
  }

  namespace runtime {
    const lastError: any;
  }
}
