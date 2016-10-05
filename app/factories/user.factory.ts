import * as Rx from 'rxjs/Rx'
import {Inject, Injectable} from '@angular/core'
import {SignupService} from '../components/signup/signup.service'
import {SignupDTO} from '../types'
import {SignupFactory} from '../components/signup/signup.factory'

@Injectable()
export class UserFactory {
    
    public id               : number
    public email            : string
    public password         : string
    public passwordRepeat   : string
    public firstName        : string
    public lastName         : string
    public userName         : string
    public avatar           : string
    public coins            : number
    
    
    constructor (private _signupService  : SignupService,
                 private _signupFactory  : SignupFactory) {
        
    }
    
    public register () : Rx.Observable<boolean> {

        if (this._signupFactory
                .isValid(this.email, this.userName, this.password, this.passwordRepeat)) {
            
            let dto             = new SignupDTO()
                dto.email       = this.email
                dto.username    = this.userName
                dto.password    = this.password 

            return this._signupService.signup(dto)
                        .map((response : Response) => {
                            return response.status === 200
                        })

        } else {
            return Rx.Observable.create((observer : Rx.Observer<boolean>) => {
                 observer.next(false)
                 observer.complete()
             })
        }
    }

   
}