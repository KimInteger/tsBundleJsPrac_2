export default function makeInputValue(
  type: string,
  value: string,
  id: string,
): string {
  return `<input type='${type}' value='${value}' id='${id}' />`;
}
