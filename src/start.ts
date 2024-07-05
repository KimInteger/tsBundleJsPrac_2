import './style/start.css';

import hOneTag from './module/hOneTag';
import makeDiv from './module/makeDiv';
import setID from './module/setId';
import makeForm from './module/makeForm';

const root: HTMLElement = document.getElementById('root') as HTMLDivElement;

function plusAll(elements: string): void {
  root.innerHTML = hOneTag(elements);
  let linkDiv = makeDiv();
  setID(linkDiv, 'link');
  makeForm(linkDiv);
  root.appendChild(linkDiv);
}

document.addEventListener('DOMContentLoaded', (): void => {
  plusAll('어서와요 뚝딱상점!');
});
