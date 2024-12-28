import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-19-demo';

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'new titile';
    }, 3_000);
  }
}
