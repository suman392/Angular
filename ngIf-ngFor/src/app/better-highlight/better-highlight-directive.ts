import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive ({
    selector : '[appBetterhighlight]'
})

export class BetterHighlightDirective implements OnInit {
    constructor ( private moonRef : ElementRef , private renderer : Renderer2) {
    }
    ngOnInit(){
        // this.moonRef.nativeElement.style.backgroundColor = "blue";
    }

    @HostListener('mouseenter') mouseover(eventData :Event){
        this.renderer.setStyle(this.moonRef.nativeElement, 'backgroundColor', 'blue');
    }

    @HostListener('mouseleave') mouseleave(eventData :Event){
        this.renderer.setStyle(this.moonRef.nativeElement, 'backgroundColor', 'transparent');
    }

    
}