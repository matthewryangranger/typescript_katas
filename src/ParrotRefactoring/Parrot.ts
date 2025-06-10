export interface ParrotInterface {
    getSpeed(): number;

    getCry(): string;
}

export class EuropeanParrot implements ParrotInterface {
    public getSpeed(): number {
        return 12;
    };

    getCry(): string {
        return "Sqoork!";
    };
};

export class AfricanParrot implements ParrotInterface {
    private coconutCount: number;

    constructor(CNutCount: number = 0) {
        this.coconutCount = CNutCount;
    }

    public getSpeed(): number {
        return Math.max(0, 12 - 9 * this.coconutCount);
    };

    getCry(): string {
        return "Sqaark!";
    };
};

export class NorwegianBlueParrot implements ParrotInterface {
    private isNailed: boolean;
    private voltage: number;

    constructor(isNailedBool: boolean = false, volts: number = 0) {
        this.isNailed = isNailedBool;
        this.voltage = volts;
    }

    public getSpeed(): number {
        return (this.isNailed) ? 0 : Math.min(24, this.voltage * 12);
    };

    getCry(): string {
        return this.voltage > 0 ? "Bzzzzzz" : "...";
    };
};