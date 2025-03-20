import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-task',
  imports: [CommonModule],
  templateUrl: './item-task.component.html',
  styleUrl: './item-task.component.scss'
})
export class ItemTaskComponent {
  @Input() task!: Task;
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToggleCompleted = new EventEmitter<Task>();
  isExpanded = false;

  onDelete(task: Task){
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task){
    this.onToggleCompleted.emit(task)
  }
}
