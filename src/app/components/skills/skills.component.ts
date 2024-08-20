import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    {
      name: 'Front-end',
      items: [
        'HTML5 & CSS3',
        'JavaScript (ES6+)',
        'Angular',
        'React',
        'Tailwind CSS'
      ]
    },
    {
      name: 'Back-end',
      items: [
        'Node.js',
        'Express.js',
        'Python',
        'Django',
        'RESTful APIs'
      ]
    },
    {
      name: 'DevOps',
      items: [
        'Git',
        'Docker',
        'CI/CD',
        'AWS',
        'Kubernetes'
      ]
    }
  ];

  selectedSkillIndex = 0;
  selectedSkill = this.skills[0];

  selectSkill(index: number) {
    this.selectedSkillIndex = index;
    this.selectedSkill = this.skills[index];
  }
}
