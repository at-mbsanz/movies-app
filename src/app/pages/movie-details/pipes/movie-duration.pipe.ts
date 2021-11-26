import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieDuration',
})
export class MovieDurationPipe implements PipeTransform {
  transform(durationInMinutes: number): string {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes - hours * 60;
    return `${hours}h ${minutes}m`;
  }
}
