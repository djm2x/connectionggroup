import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { LoaderInterceptor } from './loader-interceptor';
import { routerTransition } from './animations';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('tabAnimation', [
        state('show', style({
            opacity: 1,
        })),
        state('hide', style({
            opacity: 0,
        })),
        transition('show => hide', animate('700ms ease-in-out')),
        transition('hide => show', animate('700ms 0ms ease-in-out'))
    ]),
  ]
})
export class LoaderComponent implements OnInit {
  isActive = false;
  constructor(public loader: LoaderService) { }

  ngOnInit() {
    // this.loader.isLoading.subscribe(
    //   r => {
    //     console.log('loader = ', r);
    //   },
    //   e => console.log(e)
    // );
    this.loader.isLoading.subscribe(r => {
      this.isActive = r;
    });
  }
}
