import { Component, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isSmallScreen:boolean= false
  constructor(private breakpointObserver: BreakpointObserver) {
      this.breakpointObserver.observe('(max-width: 767px)').subscribe(result => {
        this.isSmallScreen = result.matches;
      });
  }
}
