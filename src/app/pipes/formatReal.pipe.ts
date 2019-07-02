import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'FormatReal' })
export class FormatReal implements PipeTransform {
    transform(value: number): string {
        return this.formatReal(value);
    }

    private formatReal(number: number) {
        const modulo = number % 2;
        let numeroFormatado = '';
        if (modulo === 0) {
            numeroFormatado = `${number},00`;
        } else {
            numeroFormatado = `${number.toFixed(2)}`.replace(/\./g, ',');
        }
        return numeroFormatado;
    }
}
