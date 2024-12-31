import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PATH } from './const';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  navigateToExperience() {
    this._router.navigate([PATH.EXPERIENCE]);
  }
  navigateToHome() {
    this._router.navigate([PATH.HOME]);
  }

  navigateToEducation() {
    this._router.navigate([PATH.EDUCATION]);
  }

  navigateToSkills() {
    this._router.navigate([PATH.SKILLS]);
  }

  openInNewTab(to: 'linkedin' | 'github') {
    const links = {
      linkedin: 'https://www.linkedin.com/in/edison-t-t/',
      github: 'https://github.com/EdisonTT',
    };
    const url = links[to];
    if (!url) return;
    window.open(url, '_blank');
  }
}
