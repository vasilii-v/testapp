import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class EnvService {
    constructor() {}
    
    public getBaseUrl(): string {
        return `http://helloworld.zakupki360.ru/api/orders?SearchString=`;
    }

    public getUsersUrl(): string {
        return `http://jsonplaceholder.typicode.com/posts?userId=`
    }
}