import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-task'; // rimosso con la creazione del Servizio
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  // TASKS del file mock-task
  fixTasks: Task[] = TASKS;
  fixTasksObs: Task[] = [];
  // TASKS del Database dinamico con Http method
  tasks: Task[] = []; // creato con la creazione del servizio

  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks() -> NO OBSERVABLE
    this.taskService.getTasks().subscribe(tasks => this.fixTasksObs = tasks) //! -> OBSERVABLE CON FIXTASK
    this.taskService.getTasksHttp().subscribe((tasks) => (this.tasks = tasks)); //! ASYNCRO
    console.log(this.tasks);
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
        // filtra i task e mostra quelli che non combaciano con quello cancellato
      );
  }

  reminder(task: Task) {
    task.reminder = !task.reminder;
    console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    console.log(task);
    this.taskService
      .addNewTask(task)
      .subscribe((task) => this.tasks.push(task));
  }
}
