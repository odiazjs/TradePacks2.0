import {Inject, Injectable, Component, OnInit, ViewChild} from '@angular/core'
import {Router, } from "@angular/router"
import {Page} from 'ui/page'
import {screen} from "platform"
import {SignupDTO} from '../../types'
import {LoginService} from './login.service'
import {UserFactory} from '../../factories/user.factory'

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.template.html', 
    styleUrls: ['./login.css'],
    directives: [],
    providers: [LoginService]
})

export class LoginComponent implements OnInit {
    
    public isAuthenticating : boolean
    public heightDIPs       : number
    public widthDIPs        : number
    
constructor (private _router        : Router, 
             private _page          : Page, 
             private _loginService  : LoginService,
             public _userFactory  : UserFactory) {
                     
        this._page.actionBarHidden = true
    }
    
    ngOnInit () {
        this.heightDIPs = screen.mainScreen.heightDIPs
        this.widthDIPs = screen.mainScreen.widthDIPs
    }
    
    login () : void {

            this._page.animate({
                       translate: { x: -this._page.getMeasuredHeight(), y: 0 },
                       duration: 300
                   })
                    .then(() => { this._router.navigate(['/main']) })
    }
    
    signup () : void {
        
        this._page.animate({
                translate: { x: this._page.getMeasuredHeight(), y: 0 },
                duration: 300
            })
            .then(() => { this._router.navigate(['/signup']) })
        
    }
}