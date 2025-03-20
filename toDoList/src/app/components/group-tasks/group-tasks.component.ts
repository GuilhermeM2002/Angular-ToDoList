import { Component, OnInit } from '@angular/core';
import { ItemTaskComponent } from "../item-task/item-task.component";
import { TaskServiceService } from '../../services/task-service.service';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-group-tasks',
  imports: [CommonModule, ItemTaskComponent, AddTaskComponent],
  templateUrl: './group-tasks.component.html',
  styleUrl: './group-tasks.component.scss'
})
export class GroupTasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskServiceService){}

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
      console.log(data);
    });
  }

  addNewTask(task: Task): void {
    this.taskService.addTask(task).subscribe(task => {
      this.tasks.push(task);
    });
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() =>
      (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }


  toggleCompleted(task: Task){
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe();
  }
}
