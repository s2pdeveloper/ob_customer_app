import { Directive, ElementRef, Renderer2,AfterViewInit,Input } from '@angular/core';
import {DomController} from '@ionic/angular'

@Directive({
    selector: '[parallax-header]',
    host: {
        '(ionScroll)': 'onContentScroll($event)'
        // '(window:resize)': 'onWindowResize($event)'
    }
})
export class ParallaxHeader {

    // header: any;
    // headerHeight: any;
    // translateAmt: any;
    // scaleAmt: any;
    
    @Input('parallaxHeader') imagePath: string;
	@Input('parallaxHeight') parallaxHeight: number;
	private headerHeight: number;
	private header: HTMLDivElement;
  	private mainContent: HTMLDivElement;

    constructor(public element: ElementRef, public renderer: Renderer2,
        private domCtrl: DomController) { }
    

//     ngOnInit() {

//         const content = this.element.nativeElement;
//         if (content) {
//             this.header = content.getElementsByClassName('header-image')[0];
//             const mainContent = content.getElementsByClassName('main-content')[0];

//             this.headerHeight = this.header?.clientHeight;
//             if (this.header) {
//                 this.renderer.setStyle(this.header, 'webkitTransformOrigin', 'center bottom');
//                 this.renderer.setStyle(this.header, 'background-size', 'cover');
//             }
//             if (mainContent) {
//                 this.renderer.setStyle(mainContent, 'position', 'absolute');
//             }
//         }
//     }

//     onWindowResize(ev) {
//         this.headerHeight = this.header.clientHeight;
//     }

//     onContentScroll(ev) {
//         if (ev) {
//             this.updateParallaxHeader(ev);
//         }
//     }

//     updateParallaxHeader(ev) {

//         if (ev.detail.scrollTop >= 0) {
//             this.translateAmt = ev.detail.scrollTop / 2;
//             this.scaleAmt = 1;
//         } else {
//             this.translateAmt = 0;
//             this.scaleAmt = -ev.detail.scrollTop / this.headerHeight + 1;
//         }
//         this.renderer.setStyle(
//             this.header,
//             'webkitTransform',
//             'translate3d(0,' + this.translateAmt +
//             'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
//     }

// }
ngAfterViewInit(){
    this.headerHeight = this.parallaxHeight;
    this.mainContent = this.element.nativeElement.querySelector('.main-content');
    this.domCtrl.write(() => {
        this.header = this.renderer.createElement('div');
        this.renderer.insertBefore(this.element.nativeElement, this.header, this.element.nativeElement.firstChild);
        this.renderer.setStyle(this.header, 'background-image', 'url(' + this.imagePath + ')');
        this.renderer.setStyle(this.header, 'height', this.headerHeight + 'px');
        this.renderer.setStyle(this.header, 'background-size', 'cover');
    });

}
onContentScroll(ev){
    this.domCtrl.read(() => {
      let translateAmt, scaleAmt;
      // Already scrolled past the point at which the header image is visible
      if(ev.detail.scrollTop > this.parallaxHeight){
        return;
      }
      if(ev.detail.scrollTop >= 0){
          translateAmt = -(ev.detail.scrollTop / 2);
          scaleAmt = 1;
      } else {
          translateAmt = 0;
          scaleAmt = -ev.detail.scrollTop / this.headerHeight + 1;
      }
      this.domCtrl.write(() => {
        this.renderer.setStyle(this.header, 'transform', 'translate3d(0,'+translateAmt+'px,0) scale('+scaleAmt+','+scaleAmt+')');
        this.renderer.setStyle(this.mainContent, 'transform', 'translate3d(0, '+(-ev.detail.scrollTop) + 'px, 0');
      });
    });
}

}
