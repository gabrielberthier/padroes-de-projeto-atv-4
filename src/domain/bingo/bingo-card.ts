import { BingoObserver } from "../../services/bingo/oberver";

export class BingoCard implements BingoObserver {
  private matches: number[] = [];

  constructor(private id: number, private numbers: number[] = []) {
    this.matches = [...this.numbers].sort((a, b) => a - b);
  }

  bingo(message: string) {
    console.log(message);
    console.log(`This id: ${this.id}`);
    console.log(this.numbers);
    console.log(this.matches);
  }

  warn(num: number): boolean {
    if (this.numbers.includes(num)) {
      this.matches.forEach(async (element, index, array) => {
        if (element === num) {
          array[index] = -1;
          console.log(`HEY ${this.id}'S GOT NUMBER ${num}`);
        }
      });
    }

    return this.didIWin();
  }

  didIWin() {
    let totalMatches = 0;
    for (const iterator of this.matches) {
      if (iterator === -1) {
        totalMatches++;
      }
    }
    return totalMatches === this.matches.length;
  }
}
