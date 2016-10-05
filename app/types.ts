import {Inject, Injectable} from '@angular/core'

export interface IMenuOption {
     id : number
     title : string
     display : string
     icon : string
     navigateTo : string
     isEnabled : boolean
}

@Injectable()
export class SignupDTO {
    
    constructor () {
        
    }
    
    public email          : string
    public username       : string
    public password       : string
    public passwordRepeat : string
    
}

export interface ErrorMessage {
    value : string
}