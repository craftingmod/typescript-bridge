import { printMap } from "./OutputView.js"
import { log } from "./Util.js"

export default class BridgeGame {
  protected level = 0
  protected gameOver = false
  public tries = 1
  protected lastMap: [number, boolean] = [0, false]
  public constructor(protected maze: Array<"U" | "D">) {

  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  public move(decision: "U" | "D") {
    this.lastMap = [this.level, true]
    if (this.maze[this.level] === decision) {
      printMap(this.maze, this.level, true)
      this.level += 1
    } else {
      printMap(this.maze, this.level, false)
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

  public printLastMap() {
    log("최종 게임 결과")
    printMap(this.maze, this.lastMap[0], this.lastMap[1])
  }
}