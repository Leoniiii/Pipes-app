import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {
    transform(value: number): string {
        return value ? 'Vuela' : 'No vuela'
    }

}