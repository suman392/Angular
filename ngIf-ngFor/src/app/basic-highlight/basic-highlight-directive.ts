import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive ({
    selector : '[appBasicHighlight]'
})


export class BasicHighlightDirective implements OnInit{

    constructor(private sunRef : ElementRef){
    
    }
    
    ngOnInit(){
        this.sunRef.nativeElement.style.backgroundColor = 'yellow';

    }
}