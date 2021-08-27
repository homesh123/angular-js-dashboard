import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector:'[app-tooltip]'
})

export class TooltipDirective implements OnInit{
    constructor(private el:ElementRef){}
    
    ngOnInit(){
        this.el.nativeElement.style.backgroundColor = "green";
    }

    @HostListener('click') myclick(eventData:Event){
        if(this.el.nativeElement.style.backgroundColor == 'red'){
            this.el.nativeElement.style.backgroundColor = 'green'
        }else{
            this.el.nativeElement.style.backgroundColor = 'red'
        }
    }
}