import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  constructor() { }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data) as T;
    }
    return null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}