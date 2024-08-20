import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-tools',
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css'
})
export class TechToolsComponent {
  technologies = [
    { name: 'Angular', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' },
    { name: 'React', icon: 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png' },
    { name: 'Node.js', icon: 'https://logowik.com/content/uploads/images/nodejs.jpg' },
    { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
    { name: 'Python', icon: 'path/to/python-icon.svg' },
    { name: 'Docker', icon: 'path/to/docker-icon.svg' },
    { name: 'AWS', icon: 'path/to/aws-icon.svg' },
    { name: 'Git', icon: 'path/to/git-icon.svg' },
    // Add more technologies as needed
  ];
}
