import {Inject, Injectable, Injector, Provider} from '@angular/core'
import * as Rx from 'rxjs/Rx'
import {Response} from '@angular/http'
import {SignupDTO} from '../../types'
import {Errors} from '../../util/errors/errors'

@Injectable()
export class SignupFactory {

    public errors : Errors = new Errors()

    constructor () {

    }
    
    public isValid (email: string, username: string, 
                    password: string, passwordRepeat: string) : boolean {
        
        this.errors.clear()
        this.errors.setForSignup()

        if (!this.validateEmail(email)) {
            this.errors.add('email')
        }

        if (!this.validateUsername(username)) {
            this.errors.add('username')
        }

        if (!this.validatePassword(password, passwordRepeat)) {
            this.errors.add('password')
        }

        return this.errors.list.length == 0 

    }
    
    private validateEmail (email : string) : boolean {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return reg.test(email)
    }

    private validateUsername (username : string) : boolean {
        return username && username.length >= 4
    }

    private validatePassword (password : string, passwordRepeat: string) : boolean {
        return (password && passwordRepeat 
                    && password.length >= 6) 
                        && (password === passwordRepeat)
    }
    
    
}