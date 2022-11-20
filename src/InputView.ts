import { log, readLine } from "./Util.js"

export async function readBridgeSize() {
  log("다리의 길이를 입력해주세요.")
  const bridgeLength = Number(await readLine())
  if (Number.isNaN(bridgeLength) || bridgeLength < 3 || bridgeLength > 20) {
    throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.")
  }
  return bridgeLength
}
/**
 * 사용자가 이동할 칸을 입력받는다.
 */
export async function readMoving() {
  log("이동할 칸을 선택해주세요. (위: U, 아래: D)")
  const moving = await readLine()
  if (moving !== "U" && moving !== "D") {
    throw new Error("[ERROR] 이동할 칸은 U 또는 D여야 합니다.")
  }
  return moving as "U" | "D"
}
/**
  * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
  */
export async function readGameCommand() {
  log("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)")
  const isRetry = await readLine()
  if (isRetry !== "R" && isRetry !== "Q") {
    throw new Error("[ERROR] 입력은 R 또는 Q여야 합니다.")
  }
  return isRetry as "R" | "Q"
}