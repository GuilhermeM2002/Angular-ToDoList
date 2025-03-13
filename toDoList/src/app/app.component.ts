import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { GroupTasksComponent } from "./components/group-tasks/group-tasks.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, GroupTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'toDoList';
}
