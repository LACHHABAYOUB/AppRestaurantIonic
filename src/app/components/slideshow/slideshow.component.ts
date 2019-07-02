import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationStateService } from 'src/app/services/animation.state.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  styles: [`
    :host ::ng-deep ion-slides ::ng-deep .swiper-pagination {
      text-align:right;
      width: 97%;
    },
    :host ::ng-deep ion-slides ::ng-deep .swiper-pagination-bullet {
      width: 11.48px;
      height: 11.48px;
    }
    `
  ]
})
export class SlideshowComponent implements OnInit {
  @Input('open') open: boolean = false;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      autoplay: {
        delay: 2000
      },
    }
  };

  buttonStyle: any = {
    'position': 'absolute',
    'background-color': 'var(--green-light)',
    'color': 'var(--white)',
    'border-radius': '5px',
    'height': '60.19px',
    'width': '407.7px',
    'font-family': 'var(--ion-font-family)',
    'font-size': '37px',
    'font-weight': 'bold',
    'outline': 'none',
    'display': 'flex',
    'justify-content': 'space-around',
    'left': '28%',
    'top': '49%'
  };

  constructor(private router: Router, private _animationStateService: AnimationStateService) { }

  ngOnInit() { }
  AdsImages = [
    "https://www12.0zz0.com/2019/06/07/22/966457111.png",
    "https://www12.0zz0.com/2019/06/07/22/966457111.png",
    "https://www12.0zz0.com/2019/06/07/22/966457111.png"
  ];

  onClick(event) {
    this._animationStateService.slide.mostrar = false;
    this.router.navigate(['/home/produto']);
  }
}
