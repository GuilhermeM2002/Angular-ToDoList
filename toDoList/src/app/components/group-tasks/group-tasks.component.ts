import { Component } from '@angular/core';
import { ItemTaskComponent } from "../item-task/item-task.component";
import { TaskServiceService } from '../../services/task-service.service';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group-tasks',
  imports: [CommonModule ,ItemTaskComponent],
  templateUrl: './group-tasks.component.html',
  styleUrl: './group-tasks.component.scss'
})
export class GroupTasksComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskServiceService){}

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
      console.log(data);
    });
  }
}
