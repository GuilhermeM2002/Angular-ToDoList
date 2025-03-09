import { Component, Input } from '@angular/core';
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
}
