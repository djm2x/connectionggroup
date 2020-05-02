import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Front';

  constructor(public theme: ThemeService) { }

  ngOnInit() {

    this.theme.changeTheme('dark-theme');

  }
}
