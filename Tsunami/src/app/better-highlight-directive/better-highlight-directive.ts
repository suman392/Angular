import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive ({
    selector : '[appHopeeveryone]'
})

export class BetterHighlightDirective implements OnInit{
    constructor(private sunRef : ElementRef , private renderer : Renderer2){
    }

    ngOnInit(){
    }

    @HostListener('mouseenter') mouseover(eventData : Event){
        this.renderer.setStyle(this.sunRef.nativeElement , 'backgroundColor' , 'pink');
    }

    @HostListener('mouseleave') mouseleave(eventData : Event){
        this.renderer.setStyle(this.sunRef.nativeElement , 'backgroundColor' , 'transparent');
    }
}