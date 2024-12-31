import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skills: {
    icon: string;
    name: string;
    percentage: string;
  }[] = [
    {
      icon: this.getIconUrl('html5'),
      name: 'HTML5',
      percentage: '80%',
    },
    {
      icon: this.getIconUrl('css'),
      name: 'CSS',
      percentage: '50%',
    },
    {
      icon: this.getIconUrl('scss'),
      name: 'SCSS',
      percentage: '50%',
    },
    {
      icon: this.getIconUrl('angular'),
      name: 'Angular',
      percentage: '90%',
    },
    {
      icon: this.getIconUrl('angular'),
      name: 'Angular CLI',
      percentage: '70%',
    },
    {
      icon: this.getIconUrl('rxjs'),
      name: 'RxJs',
      percentage: '70%',
    },
    {
      icon: this.getIconUrl('nodejs'),
      name: 'Node.js',
      percentage: '90%',
    },
    {
      icon: this.getIconUrl('typescript'),
      name: 'TypeScript',
      percentage: '80%',
    },
    {
      icon: this.getIconUrl('js'),
      name: 'JavaScript',
      percentage: '80%',
    },
    {
      icon: this.getIconUrl('circle'),
      name: 'Express',
      percentage: '90%',
    },
    {
      icon: this.getIconUrl('chrome'),
      name: 'Chrome Dev Tool',
      percentage: '60%',
    },
    {
      icon: this.getIconUrl('postman'),
      name: 'Postman',
      percentage: '100%',
    },
    {
      icon: this.getIconUrl('git'),
      name: 'Git',
      percentage: '80%',
    },
    {
      icon: this.getIconUrl('cloud'),
      name: 'Azure',
      percentage: '10%',
    },
  ];

  ngOnInit(): void {
    this.skills.sort((a, b) => {
      const x = +a.percentage.replace(/%/g, '');
      const y = +b.percentage.replace(/%/g, '');
      return y - x;
    });
  }

  private getIconUrl(iconName: string) {
    return `assets/icons/${iconName}.svg`;
  }
}
