export default class Bill {
    private readonly itemsEaten: number[];
    private readonly moneyPayed: number;
    private refund: number | string;
    private itemsBothEaten: number[];

    constructor(itemsEaten: number[], itemEatenForOnePerson: number, moneyPayed: number) {
        this.itemsEaten = itemsEaten;
        this.itemsBothEaten = this.calculateItemsBothEaten(itemEatenForOnePerson);
        this.moneyPayed = moneyPayed;
        this.refund = 0;
    }

    private calculateItemsBothEaten(itemEatenForOnePerson: number) {
        return this.itemsEaten.filter((_, index) => index !== itemEatenForOnePerson);
    }

    calculate() {
        const refundEachPersonWillPay = this.calculateTotalEachPersonWillPay();
        this.calculateRefund(refundEachPersonWillPay);
        this.print();
    }

    private calculateTotalEachPersonWillPay() {
        return this.itemsBothEaten.reduce((accumulator, current) => accumulator += current, 0) / 2;
    }

    private calculateRefund(refundEachPersonWillPay: number) {
        this.refund = Math.abs(refundEachPersonWillPay - this.moneyPayed) || "Bon Appetit";
    }

    private print() {
        console.log(this.refund);
    }
}
