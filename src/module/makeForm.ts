import setID from './setId';

function makeForm(innerHtml: string): void {
  let result: HTMLFormElement = document.createElement('form');
  setID(result, 'start-form');
  result.innerHTML = innerHtml;
}
