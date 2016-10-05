
import {SignupDTO} from '../../types'

export class Errors {
    
    private collection  : Map<string, string> = new Map<string, string>()
    public list         : Array<string>       = new Array<string>()

    constructor () {

    }

    public clear () : void {

        if (this.collection.size > 0) {
            this.collection.clear()
        }
        if (this.list.length > 0) {
            this.list = new Array<string>()
        }

    }

    public setForSignup () : void {

    let signupDto : SignupDTO = new SignupDTO()

        this.collection.set('email', 'Invalid email address.')
        this.collection.set('password', 'Password must be at least 6 characters.')
        this.collection.set('passwordRepeat', "Password doesn't match.")
        this.collection.set('username', 'Username must be at least 4 characters.')

    }

    public add (key : string) : void {
        let message = this.collection.get(key)
        this.list.push(message)
    }
}