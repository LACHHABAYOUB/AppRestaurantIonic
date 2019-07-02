export class Utils {
    static urlService: string = "http://192.168.0.14:8083/v1";

    static formatReal(number: number) {
        const modulo = number % 2;
        let numeroFormatado = '';
        if (modulo === 0) {
            numeroFormatado = `${number},0`;
        } else {
            numeroFormatado = `${number.toFixed(2)}`.replace(/\./g, ',');
        }
        return numeroFormatado;
    }
}
