import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    public searchValue: string = "";

    constructor(private route: Router) {}
    ngOnInit() {

    }

    public search() {
        this.route.navigate(['/search'], {
            queryParams: {
                'userId': this.searchValue
            }
        });
    }
}