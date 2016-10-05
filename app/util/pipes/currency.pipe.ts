import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'coins' , pure: false })
export class CoinsPipe implements PipeTransform {
    
    transform(value: Number, decimals: Number) : String {
        return this.formatMoney(value, decimals)
    }
    
    formatMoney (n, c) : String {
        
        var n = n, 
        c = isNaN(c = Math.abs(c)) ? 2 : c, 
        d = d == undefined ? "." : d, 
        t = t == undefined ? "," : t, 
        s = "", 
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
        j = (j = i.length) > 3 ? j % 3 : 0;
            return s + (j ? i.substr(0, j) + t : "") + 
                i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + 
                    (c ? d + Math.abs(n - parseInt(i)).toFixed(c).slice(2) : "");
    }
        
}
 