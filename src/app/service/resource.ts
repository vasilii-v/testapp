import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrder } from '../interface/IOrder';
import { EnvService } from './env.service';
import { IUser } from '../interface/IUser';

@Injectable({
    providedIn: 'root'
})

export class Resource {
    private baseUrl = this.envService.getBaseUrl();
    private usersUrl = this.envService.getUsersUrl();

    constructor(private api: HttpClient,
                private envService: EnvService) {}
    
    public getOrders(valueParam: string): Observable<IOrder> {
        return this.api.get(`${this.baseUrl}${valueParam}`) as Observable<IOrder>;
    }

    public getUsers(valueParam: string): Observable<IUser> {
        return this.api.get(`${this.usersUrl}${valueParam}`) as Observable<IUser>;
    }
}