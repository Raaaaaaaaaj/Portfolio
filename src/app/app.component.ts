import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { BodycomponentComponent } from './bodycomponent/bodycomponent.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectCompComponent } from './project-comp/project-comp.component';
import { EducationComponent } from './education/education.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    BodycomponentComponent, 
    AboutmeComponent, 
    ProjectCompComponent, 
    FooterComponent, 
    EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
