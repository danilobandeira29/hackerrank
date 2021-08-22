export default class Bill {
    private readonly itemsEaten: number[];
    private readonly moneyPayed: number;
    private total: number | string;
    private itemsBothEaten: number[];

    constructor(itemsEaten: number[], itemEatenForOnePerson: number, moneyPayed: number) {
        this.itemsEaten = itemsEaten;
        this.itemsBothEaten = this.calculateItemsBothEaten(itemEatenForOnePerson);
        this.moneyPayed = moneyPayed;
        this.total = 0;
    }

    private calculateItemsBothEaten(itemEatenForOnePerson: number) {
        return this.itemsEaten.filter((_, index) => index !== itemEatenForOnePerson);
    }

    calculate() {
        const totalEachPersonWillPay = this.calculateTotalEachPersonWillPay();
        this.calculateRefund(totalEachPersonWillPay);
        this.print();
    }

    private calculateTotalEachPersonWillPay() {
        return this.itemsBothEaten.reduce((accumulator, current) => accumulator += current, 0) / 2;
    }

    private calculateRefund(totalEachPersonWillPay: number) {
        this.total = Math.abs(totalEachPersonWillPay - this.moneyPayed) || "Bon Appetit";
    }

    private print() {
        console.log(this.total);
    }
}
