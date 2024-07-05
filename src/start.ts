const root: HTMLElement = document.getElementById('root') as HTMLDivElement;

function hOneTag(textNode: string): string {
  let result: string = `<h1>${textNode}</h1>`;
  return result;
}

function plusAll(elements: string): void {
  root.innerHTML = hOneTag(elements);
}

document.addEventListener('DOMContentLoaded', (): void => {
  plusAll('hellow script');
});
