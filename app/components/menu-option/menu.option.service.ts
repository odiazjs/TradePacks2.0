import MenuOptionFactory from './menu.option.factory'
import {IMenuOption} from '../../../app/types'

export default class MenuOptionService {
    
    public _menuOptions : MenuOptionFactory[]
    
    constructor () {
        
    }
    
    public getOptions () : Promise<{}> {
        
        return new Promise<{}>((resolve, reject) => {
            
            this._menuOptions = this.options().map((_menuOption : IMenuOption) => {
                return new MenuOptionFactory(
                        _menuOption.id,
                        _menuOption.title,
                        _menuOption.display,
                        _menuOption.icon,
                        _menuOption.navigateTo,
                        _menuOption.isEnabled
                    )
            })
            
            resolve(this._menuOptions)
        })        
    }
    
    public options () : [{}] {
        
        return [
            {
                id: 100,
                title: 'Main Menu',
                display: 'Main Menu',
                icon: 'f11b',
                navigateTo: '/main',
                isEnabled: true
            },
            {
                id: 101,
                title: 'My Club',
                display: 'My Club',
                icon: 'f0c0',
                navigateTo: '/myclub',
                isEnabled: true
            },
            {
                id: 102,
                title: 'Browse Packs',
                display: 'Browse Packs',
                icon: 'f002',
                navigateTo: '/browsepacks',
                isEnabled: true
            },
            {
                id: 103,
                title: 'Buy Coins',
                display: 'Buy Coins',
                icon: 'f09d',
                navigateTo: '/buycoins',
                isEnabled: true
            },
            {
                id: 104,
                title: 'Settings',
                display: 'Settings',
                icon: 'f013',
                navigateTo: '/settings',
                isEnabled: true
            },
            {
                id: 105,
                title: 'Logout',
                display: 'Logout',
                icon: 'f011',
                navigateTo: '/',
                isEnabled: true
            }
        ]
        
    }
    
   
}