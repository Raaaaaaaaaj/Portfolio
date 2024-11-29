import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commonprojectcard',
  standalone: true,
  imports: [],
  templateUrl: './commonprojectcard.component.html',
  styleUrl: './commonprojectcard.component.css'
})
export class CommonprojectcardComponent {
  @Input() img!: {
    src: string,
    alt: string
  };
  @Input({required: true}) projectTitle! : string;
  @Input({required: true}) projectDescription! : string;
  @Input({required: true}) projectRole! : string;
  @Input({required: true}) link! : string;
}
