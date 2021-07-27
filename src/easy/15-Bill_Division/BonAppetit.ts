export default class BonAppetit {
    bill: number[];
    annaDidNotEat: number;
    moneyPayed: number;

    constructor (bill: number[], annaDidNotEat: number, moneyPayed: number) {
        this.bill = bill;
        this.annaDidNotEat = annaDidNotEat;
        this.moneyPayed = moneyPayed;
    }

    calculateBill(){
        const bothEats = this.bill.filter((_, index) => index !== this.annaDidNotEat);
        const totalEachPay = bothEats.reduce((accumulator, current) => accumulator += current, 0) / 2;
        return console.log(this.refundToAnna(totalEachPay) || "Bon Appetit");
    }

    refundToAnna(totalEachPay: number) {
        return Math.abs(totalEachPay - this.moneyPayed);
    }
}