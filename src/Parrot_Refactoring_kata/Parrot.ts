export enum ParrotTypes {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE,
}

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
}

export class AfricanParrot implements ParrotInterface {
    private coconutCount: number;
    constructor(private CNutCount: number = 0) {
        this.coconutCount = CNutCount;
    }
    public getSpeed(): number {
        return Math.max(0, 12 - 9 * this.coconutCount);
    };

    getCry(): string {
        return "Sqaark!";
    };
}

export class NorwegianBlueParrot implements ParrotInterface {
    private isNailed: boolean;
    private voltage: number;
    constructor(private isNailedBool: boolean = false, private volts: number = 0){
        this.isNailed = isNailedBool;
        this.voltage = volts;
    }
    public getSpeed(): number {
        return (this.isNailed) ? 0 : Math.min(24, this.voltage * 12);
    };

    getCry(): string {
        return  this.voltage > 0 ? "Bzzzzzz" : "...";
    };
}

export class Parrot {
    constructor(private parrotType: ParrotTypes,
                private numberOfCoconuts: number,
                private voltage: number,
                private isNailed: boolean) {
    }

    public getSpeed(): number {
        switch (this.parrotType) {
            case ParrotTypes.EUROPEAN:
                let parrot = new EuropeanParrot();
                return parrot.getSpeed();
            case ParrotTypes.AFRICAN:
                let parrot2 = new AfricanParrot(this.numberOfCoconuts);
                return parrot2.getSpeed();
            case ParrotTypes.NORWEGIAN_BLUE:
                let parrot3 = new NorwegianBlueParrot(this.isNailed, this.voltage);
                return parrot3.getSpeed();
        }
    }

    public getCry(): String {
        switch (this.parrotType) {
            case ParrotTypes.EUROPEAN:
                let parrot2 = new EuropeanParrot();
                return parrot2.getCry();
            case ParrotTypes.AFRICAN:
                let parrot = new AfricanParrot();
                return parrot.getCry();
            case ParrotTypes.NORWEGIAN_BLUE:
                let parrot3 = new NorwegianBlueParrot(this.isNailed, this.voltage);
                return parrot3.getCry();
        }
    }

}