import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  //MULTICASTING RXJS

  constructor() {}

  toggleAddTask(): void {
    //! Applicare sul pulsante ADD
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    //! Applicare sul componente in cui ADD deve funzionare. Torna un OBS.
    return this.subject.asObservable();
    // ritorna il valore true/false come observable della proprietà showAddTask
  }

  //! SUBJECT di onToggle equivale al subject di toggleAddTask. Il valore viene riportato con .next => opposto della proprietà
}
