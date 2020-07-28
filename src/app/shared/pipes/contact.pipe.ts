import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'contactPipe'})

export class ContactPipe implements PipeTransform{
    
    transform(value: number): any{
        let num =  value.toString();
        let v1 = num.slice(0,3);
        let v2 = num.slice(3,6);
        let v3 = num.slice(6,10);  
        
        return '(+91) ' + v1 + '-' + v2 + '-' + v3;
    };
}
