import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HellowworldComponent } from './hellowworld/hellowworld.component'; 
import { HellowworldsComponent } from './hellowworlds/hellowworlds.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HellowworldComponent,HellowworldsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
