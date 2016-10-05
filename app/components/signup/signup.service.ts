import * as Rx from 'rxjs/Rx'
import {SignupDTO} from '../../types'
import {Http, Response} from '@angular/http'
import {Inject, Injectable} from '@angular/core'

@Injectable()
export class SignupService {
    
    private baseUrl : string = 'http://192.168.56.1:9000'
    private url     : string
    
    constructor (private _http : Http) {
        
    }
    
    signup (dto : SignupDTO) : Rx.Observable<{}> {
        
        this.url = this.baseUrl + '/signup'
        return this._http.post(this.url, dto).map((response : Response) => {
                        return response 
                    })
    }
    
}