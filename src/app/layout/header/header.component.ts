import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";

@Component({
    selector:'hn-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit{
    @ViewChild('inputB') userName1:ElementRef;
    @Input() username:string;
    constructor(){}
    ngOnInit(): void {

       // console.log(this.userName1.nativeElement.textContent);

    }

    ngAfterViewInit(){
        console.log(this.userName1.nativeElement.textContent);

    }
    changeText(InputEl:HTMLInputElement){

        console.log('clicked')
        InputEl.value= 'red'; 
    }
    
}