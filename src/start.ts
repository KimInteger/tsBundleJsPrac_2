import hOneTag from './module/hOneTag';

const root: HTMLElement = document.getElementById('root') as HTMLDivElement;

function plusAll(elements: string): void {
  root.innerHTML = hOneTag(elements);
}

document.addEventListener('DOMContentLoaded', (): void => {
  plusAll('hellow script');
});
