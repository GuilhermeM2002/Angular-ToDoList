import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Task>();

  task: string = '';
  category: string = '';
  completed: boolean = false;
  showAddTask: boolean = true;

  onSubmit(){
    if(!this.task) {
      alert('Adicione uma tarefa!')
      return;
    }

    const newTask: Task = {
      task: this.task,
      category: this.category,
      completed: this.completed,
    }

    this.onAddTask.emit(newTask);

    this.task = '';
    this.category = '';
    this.completed = false;
  }
}
