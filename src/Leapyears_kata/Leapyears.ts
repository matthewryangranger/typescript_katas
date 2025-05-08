export class Leapyears {
    public revealIfLeapYear(num: number): boolean {
        if (num % 400 === 0) return true
        if (num % 100 === 0) return false;
        return (num % 4 === 0);
    }
}