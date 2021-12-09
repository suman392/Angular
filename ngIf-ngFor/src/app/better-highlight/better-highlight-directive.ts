import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive ({
    selector : '[appBetterhighlight]'
})

export class BetterHighlightDirective implements OnInit {

    @Input() defaultColor : string ='transparent';
    @Input() highlightColor : string = 'red';

    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

    constructor ( private moonRef : ElementRef , private renderer : Renderer2) {
    }
    ngOnInit(){
        // this.moonRef.nativeElement.style.backgroundColor = "blue";
        this.backgroundColor = this.defaultColor ; // so that blue color will be there in the begnning.
    }

    @HostListener('mouseenter') mouseover(eventData :Event){
        // this.renderer.setStyle(this.moonRef.nativeElement, 'backgroundColor', 'blue'); //hostlistener
        // this.backgroundColor = "orange"; //hostbinding
        this.backgroundColor = this.highlightColor; //binding
    }

    @HostListener('mouseleave') mouseleave(eventData :Event){
        // this.renderer.setStyle(this.moonRef.nativeElement, 'backgroundColor', 'transparent'); //hostlistener
        // this.backgroundColor = "transparent";//hostbinding
        this.backgroundColor = this.defaultColor ; //binding
    }

    
}