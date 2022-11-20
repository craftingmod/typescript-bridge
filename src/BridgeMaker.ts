/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 * @param size 다리의 길이
 * @param generateRandomNumber 무작위 값을 생성해주는 함수
 * @returns 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
 */
export function makeBridge(size: number, generateRandomNumber: () => 0 | 1): Array<"U" | "D"> {
  const result = new Array(size)
  for (let i = 0; i < size; i++) {
    result[i] = generateRandomNumber() === 0 ? "U" : "D"
  }
  return result
}