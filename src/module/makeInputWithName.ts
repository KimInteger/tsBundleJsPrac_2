export default function makeInputName(
  type: string,
  name: string,
  id: string,
): string {
  return `<input type='${type}' name='${name}' id='${id}' />`;
}
