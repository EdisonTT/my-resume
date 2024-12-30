import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  public expandTCS = false;
  public expandEY = false;

  expandHandler(company: 'EY' | 'TCS') {
    if (company === 'EY') {
      this.expandEY = !this.expandEY;
      this.expandTCS = false;
      return;
    }
    this.expandEY = false;
    this.expandTCS = !this.expandTCS;
  }
}
