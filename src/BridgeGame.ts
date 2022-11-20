import { printMap } from "./OutputView.js"
import { log } from "./Util.js"

export default class BridgeGame {
  protected level = 0
  protected gameOver = false
  public tries = 1
  public lastMap: [number, boolean] = [0, false]
  public constructor(public maze: Array<"U" | "D">) {

  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  public move(decision: "U" | "D") {
    const equal = this.maze[this.level] === decision
    this.lastMap = [this.level, equal]
    if (equal) {
      this.level += 1
    } else {
      this.gameOver = true
    }
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  public retry() {
    this.level = 0
    this.tries += 1
    this.gameOver = false
  }

  public isDone() {
    return !this.isOver() && this.maze.length === this.level
  }

  public isOver() {
    return this.gameOver
  }
}