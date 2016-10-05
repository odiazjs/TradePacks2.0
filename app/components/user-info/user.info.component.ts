import {topmost} from "ui/frame";
import {Page} from "ui/page";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";
import {Inject, Injectable, Component, OnInit, ViewChild, Input} from '@angular/core'
import {CoinsPipe} from '../../util/pipes/currency.pipe'
import {UserService} from './user.service'
import {UserFactory} from '../../factories/user.factory'

@Component({
    moduleId: module.id,
    selector: 'user-info',
    templateUrl: './user.info.template.html',
    styleUrls: ['./user.info.css'],
    providers : [],
    pipes: [CoinsPipe]
})

@Injectable()
export class UserInfoComponent implements OnInit{ 
    
    constructor (private page : Page,
                 public user : UserFactory,
                 private _userService : UserService) {
        
    }
    
    ngOnInit () {

        this._userService.getUser()
            .then((_userFactory : UserFactory) => {  
                this.user = _userFactory
            })
        
    }

    public goToAvatar () : void {

        let avatar = this.page.getViewById('avatar')
            avatar.animate({
                scale: { x: 1.2, y: 1.2 },
                duration: 100,
                iterations: 2
            })
                .then(() => {
                    avatar.animate({
                        scale: { x: 1.0, y: 1.0 },
                        duration: 50
                    })
                })

    }
    
}