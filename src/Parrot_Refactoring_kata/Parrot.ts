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
                return (this.isNailed) ? 0 : Math.min(24, this.voltage * 12);
        }
    }

    public getCry(): String {
        switch (this.parrotType) {
            case ParrotTypes.EUROPEAN:
                let parrot3 = new EuropeanParrot();
                return parrot3.getCry();
            case ParrotTypes.AFRICAN:
                let parrot = new AfricanParrot();
                return parrot.getCry();
            case ParrotTypes.NORWEGIAN_BLUE:
                return this.voltage > 0 ? "Bzzzzzz" : "...";
        }
    }

}