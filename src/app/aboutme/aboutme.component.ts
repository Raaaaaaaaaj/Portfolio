import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
  isHidden = true; // Initially hidden
  togglexperience() {
    this.isHidden = !this.isHidden; // Toggle visibility
  }
}
