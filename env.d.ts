/// <reference types="vite/client" />

// global.d.ts 或 index.d.ts 中

interface FilePickerAcceptType {
  description?: string;
  accept: Record<string, string[]>;
}

interface OpenFilePickerOptions {
  multiple?: boolean;
  types?: FilePickerAcceptType[];
  excludeAcceptAllOption?: boolean;
}

interface SaveFilePickerOptions {
  suggestedName?: string;
  types?: FilePickerAcceptType[];
  excludeAcceptAllOption?: boolean;
}

interface FileSystemWritableFileStream extends WritableStream {
  write(data: Blob | BufferSource | string): Promise<void>;
  close(): Promise<void>;
}

interface FileSystemFileHandle {
  kind: 'file';
  name: string;
  getFile(): Promise<File>;
  createWritable(): Promise<FileSystemWritableFileStream>;
}

// global.d.ts

interface CookieStore {
  get(name: string): Promise<CookieListItem | null>;
  getAll(name?: string): Promise<CookieListItem[]>;
  set(name: string, value: string): Promise<void>;
  set(options: CookieInit): Promise<void>;
  delete(name: string): Promise<void>;
  delete(options: CookieStoreDeleteOptions): Promise<void>;
  addEventListener(type: 'change', listener: (event: CookieChangeEvent) => void): void;
  removeEventListener(type: 'change', listener: (event: CookieChangeEvent) => void): void;
}

declare var CookieStore: {
  prototype: CookieStore;
  new (): CookieStore;
};

interface Window {
  cookieStore: CookieStore;
  showOpenFilePicker(options?: OpenFilePickerOptions): Promise<FileSystemFileHandle[]>;
  showSaveFilePicker(options?: SaveFilePickerOptions): Promise<FileSystemFileHandle>;
}
