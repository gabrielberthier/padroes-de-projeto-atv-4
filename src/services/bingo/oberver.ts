export interface BingoObserver {
  warn(value: number): boolean;
  bingo(message: string): void;
}
