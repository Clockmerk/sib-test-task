import { RemindersreducerService } from './../../services/remindersreducer.service';
import { RouterLink } from '@angular/router';
import { TableComponent } from './../table/table.component';
import { Component, Input } from '@angular/core';
import { ReminderT } from '../../../types/types';


@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [TableComponent, RouterLink],
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.css'
})

export class ReminderComponent {
  @Input() id?: string;
  data?: ReminderT[] =  this.remindersreducerService.getItems()
  reminder?: ReminderT
  
  constructor(private remindersreducerService: RemindersreducerService) {}
  
  ngOnInit() {
    this.reminder = this.data?.find((item) => this.id === item.about)
  }

  editReminder() {
    //TODO: изменение напоминания
  }

}


