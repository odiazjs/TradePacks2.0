import { Inject, Injectable, Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import {Router, } from "@angular/router"
import { Page } from 'ui/page'
import { Color } from 'color'
import { TextField } from 'ui/text-field'
import { screen } from "platform"
import {SignupDTO} from '../../types'
import {LoginService} from './login.service'
import {UserFactory} from '../../factories/user.factory'
import { setHintColor } from '../../util/nativeElements'

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
    @ViewChild("usernameTxt") public usernameView : ElementRef
    @ViewChild("passwordTxt") public passwordView : ElementRef
    
constructor (private _router        : Router, 
             private _page          : Page, 
             private _loginService  : LoginService,
             public _userFactory  : UserFactory) {
                     
        this._page.actionBarHidden = true
        
    }
    
    ngOnInit () {
        this.heightDIPs = screen.mainScreen.heightDIPs
        this.widthDIPs = screen.mainScreen.widthDIPs
        let usernameView = <TextField>this.usernameView.nativeElement
        let passwordView = <TextField>this.passwordView.nativeElement
        setHintColor( { view: usernameView, color: new Color('#8f9090') } )
        setHintColor( { view: passwordView, color: new Color('#8f9090') } )
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

    socialAuth ( id: string ) : void {
        let social = this._page.getViewById(id)
            social.animate({
                scale: { x: 1.2, y: 1.2 },
                duration: 100,
                iterations: 2
            })
                .then(() => {
                    social.animate({
                        scale: { x: 1.0, y: 1.0 },
                        duration: 50
                    })
                })
    }
}