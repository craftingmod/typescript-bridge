import BridgeGame from "./BridgeGame.js";
import { makeBridge } from "./BridgeMaker.js";
import { generate } from "./BridgeRandomNumberGenerator.js";
import { readBridgeSize, readGameCommand, readMoving } from "./InputView.js";
import { printMap, printResult } from "./OutputView.js";
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
      printMap(game.maze, game.lastMap[0], game.lastMap[1])
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
    log("최종 게임 결과")
    printMap(game.maze, game.lastMap[0], game.lastMap[1])
    log("")
    printResult(!game.isOver(), game.tries)
  }
}