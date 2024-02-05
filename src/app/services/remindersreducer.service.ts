import { LocalStorageService } from './localstorage.service';
import { Injectable } from '@angular/core';
import { ReminderT, RemindersT } from '../../types/types';
import { reminders } from '../reminders-mock';

@Injectable({
  providedIn: 'root'
})

export class RemindersreducerService {
  items: RemindersT | null = this.LocalStorageService.getItem("remindersData");

  addToList(reminder: ReminderT) {
    this.items?.list.push(reminder);
  }

  getItems() {   
    return this.items?.list;
  }

  clearList() {
    if (this.items) {
      this.items.list = [];
    }

    return this.items;
  }

  constructor(private LocalStorageService: LocalStorageService) { 
    this.items = reminders // mock-reminders

    //TODO: доделать редюсер
    if (this.items) {
      this.LocalStorageService.setItem("remindersData", this.items)
      return
    }
    this.LocalStorageService.setItem("remindersData", "")
  }

}

