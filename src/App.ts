import BridgeGame from "./BridgeGame.js";
import { makeBridge } from "./BridgeMaker.js";
import { generate } from "./BridgeRandomNumberGenerator.js";
import { readBridgeSize, readGameCommand, readMoving } from "./InputView.js";
import { printResult } from "./OutputView.js";
import { log, readLine } from "./Util.js";

export default class App {
  public async play() {
    log("다리 건너기 게임을 시작합니다.")
    log("")
    const bridgeSize = await readBridgeSize()
    const maze = makeBridge(bridgeSize, generate)
    const game = new BridgeGame(maze)
    while (!game.isDone()) {
      log("")
      const input = await readMoving()
      game.move(input)
      if (game.isOver()) {
        const shouldRetry = await readGameCommand()
        if (shouldRetry === "Q") {
          break
        }
        game.retry()
        continue
      }
    }
    log("")
    game.printLastMap()
    log("")
    printResult(!game.isOver(), game.tries)
  }
}