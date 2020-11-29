import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from '../../service/resource';
import { IUser } from '../../interface/IUser';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
    public usersList: IUser[] = [];
    public isLoadingData = false;
    private userId: string = "";

    constructor(private acitveRoute: ActivatedRoute,
                private resourceService: Resource) {}

    ngOnInit() {
        this.userId = this.acitveRoute.snapshot.queryParams.userId;
        this.isLoadingData = true;
        this.resourceService.getUsers(this.userId).subscribe((data: any) => {
            // делаем искусственную задержу что бы увидеть спиннер загрузки
            setTimeout(() => {                
                this.usersList = data as IUser[];
                this.isLoadingData = false;
            }, 5000);
        }, (error) => {
            console.log("error data => ", error);
        });        
    }

    public getUserId() {
        return this.userId;
    }
}