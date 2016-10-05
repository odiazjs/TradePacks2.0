import {Inject, Injectable, Component, OnInit, ViewChild} from '@angular/core'
import {Router} from "@angular/router"
import {Page} from 'ui/page'
import {screen} from "platform"
import {SignupDTO} from '../../types'
import {SignupFactory} from '../../components/signup/signup.factory'
import {UserFactory} from '../../factories/user.factory'
import {Errors} from '../../util/errors/errors'

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: './signup.template.html', 
    styleUrls: ['./signup.css'],
    directives: [],
    providers: [] 
})

@Injectable()
export class SignupComponent implements OnInit {
    
    private errors : Errors
    public isRegistering : boolean = false
    
    constructor (private _router         : Router, 
                 private _page           : Page,
                 private _userFactory    : UserFactory,
                 private _signupFactory  : SignupFactory) {
                     
        this._page.actionBarHidden = true
        this.errors = new Errors()
        this.errors.clear()
    }
    
    ngOnInit () {
        
    }
    
    register () : void {
        
        this._userFactory.register()
            .subscribe((ok : boolean) => {
                if (ok) {
                    this.isRegistering = false
                    this._router.navigate(['/'])
                } else {
                    let signup = this._page.getViewById('signup')
                    signup.animate({
                        translate: { x: 5, y: 0 },
                        duration: 125,
                        iterations: 4
                    })
                    .then(() => { signup.translateX = 0 })
                }
            })
       
    }
    
    cancel () : void {
        
        this._page.animate({
                translate: { x: -this._page.getMeasuredHeight(), y: 0 },
                duration: 300
            })
            .then(() => { this._router.navigate(['/']) })
    }
    
}