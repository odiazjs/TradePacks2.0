import {Router} from "@angular/router"

export default class MenuOptionFactory {
    
    private id : number
    private title : string
    private display : string
    private icon : string
    public navigateTo : string
    private isEnabled : boolean
    
    constructor (id: number, 
                 title: string, 
                 display: string, 
                 icon: string, 
                 navigateTo: string, 
                 isEnabled: boolean = true) {
        
        this.id = id
        this.title = title
        this.display = display
        this.icon = icon 
        this.navigateTo = navigateTo 
        this.isEnabled = isEnabled
        
    }
    
    navigate (_router : Router) : void {
        _router.navigate([this.navigateTo])
    }
    
}