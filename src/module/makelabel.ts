export default function makeLabel(attr: string, textNode: string): string {
  return `<label for="${attr}">${textNode}</label>`;
}
