import { Component } from '@angular/core';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details: string[];
}

@Component({
  selector: 'app-personal-intro',
  templateUrl: './personal-intro.component.html',
  styleUrl: './personal-intro.component.css'
})
export class PersonalIntroComponent {
  experienceItems: ExperienceItem[] = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Innovators Inc.',
      period: 'Jan 2020 - Present',
      responsibilities: [
        'Lead a team of 5 developers in creating responsive web applications',
        'Implemented CI/CD pipelines, improving deployment efficiency by 40%',
        'Architected scalable solutions using Angular and Node.js'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: 'Mar 2017 - Dec 2019',
      responsibilities: [
        'Developed and maintained multiple client websites using React and Express',
        'Optimized database queries, reducing load times by 30%',
        'Collaborated with UX designers to implement intuitive user interfaces'
      ]
    }
  ];

  educationItems: EducationItem[] = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Tech University',
      year: '2017',
      details: [
        'Specialized in Artificial Intelligence and Machine Learning',
        'Thesis: "Implementing Neural Networks for Predictive Maintenance"',
        'GPA: 3.8/4.0'
      ]
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'State College of Technology',
      year: '2015',
      details: [
        'Minor in Data Science',
        'Capstone Project: Developed a real-time traffic monitoring system',
        'Dean\'s List for 6 consecutive semesters'
      ]
    }
  ];
}
