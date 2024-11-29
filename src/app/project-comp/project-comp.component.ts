import { Component } from '@angular/core';
import { CommonprojectcardComponent } from '../commonprojectcard/commonprojectcard.component';

@Component({
  selector: 'app-project-comp',
  standalone: true,
  imports: [CommonprojectcardComponent],
  templateUrl: './project-comp.component.html',
  styleUrl: './project-comp.component.css'
})
export class ProjectCompComponent {

}
