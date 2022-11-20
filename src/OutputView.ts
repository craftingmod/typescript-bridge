import { log } from "./Util.js"

/**
 * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
 * <p>
 * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
 */
export function printMap(maze: Array<"U" | "D">, position: number, isLastO = true) {
  const upMaze = maze.filter((v, i) => {
    return i <= position
  }).map((v, i) => {
    if (i === position) {
      return v === "U" ? (isLastO ? "O" : " ") : (isLastO ? " " : "X")
    }
    return v === "U" ? "O" : " "
  })
  const downMaze = maze.filter((v, i) => {
    return i <= position
  }).map((v, i) => {
    if (i === position) {
      return v === "D" ? (isLastO ? "O" : " ") : (isLastO ? " " : "X")
    }
    return v === "D" ? "O" : " "
  })
  // UP 부분
  log(`[ ${upMaze.join(" | ")} ]`)
  // DOWN 부분
  log(`[ ${downMaze.join(" | ")} ]`)
}
/**
 * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
 * <p>
 * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
 */
export function printResult(success: boolean, totalTries: number) {
  log(`게임 성공 여부: ${success ? "성공" : "실패"}`)
  log(`총 시도한 횟수: ${totalTries}`)
}