import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayus'
})
export class MayusPipe implements PipeTransform {
    
    transform(value: string, transform: boolean = true): string {
        return transform ? value.toUpperCase() : value.toLowerCase();
    }
}