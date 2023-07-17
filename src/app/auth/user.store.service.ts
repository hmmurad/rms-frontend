import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserStoreService {
    private user$ = new BehaviorSubject<any>(null)
    private roles$ = new BehaviorSubject<string>('')
    constructor() { }


    public setUser(user: any) {
        this.user$.next(user)
    }

    public setRoles(roles: any) {
        this.roles$.next(roles)
    }

    public getUserFromStore() {
        return this.user$.asObservable()
    }

    public getRolesFromStore() {
        return this.roles$.asObservable()
    }

}