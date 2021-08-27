import { Component, OnInit } from "@angular/core";

@Component({
    selector:'hn-main',
    //  selector: '[hn-main]',  // selector to use as attribute in html element
    //  selector: '.hn-main',  // selector to use as css class in html element
    templateUrl:'./main.component.html',
    styleUrls:['./main.component.css']
})
export class MainComponent implements OnInit{
    ngOnInit(): void {
    }
    
}