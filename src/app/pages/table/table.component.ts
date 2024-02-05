import { LocalStorageService } from './../../services/localstorage.service';
import { RemindersreducerService } from './../../services/remindersreducer.service';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ReminderT } from '../../../types/types';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  data?: ReminderT[]

  constructor(private router: Router, private remindersreducerService: RemindersreducerService, private LocalStorageService: LocalStorageService) {
    
   }

  goDeep(id: string) {
    this.router.navigate([`reminder/${id}`])
  }

  ngOnInit() {
    this.data = this.remindersreducerService.getItems()
  }

}
