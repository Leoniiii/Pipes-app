import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';


@Pipe({
    name: 'color'
})

export class ColorPipe implements PipeTransform {
    transform(value: any): any {
        return Color[value]
    }
}