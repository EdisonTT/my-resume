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
}
