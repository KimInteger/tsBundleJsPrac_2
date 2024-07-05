import setID from './setId';
import fusionCont from './fusionCont';
import makeLabel from './makelabel';
import makeInputName from './makeInputWithName';
import makeInputValue from './makeInputWithValue';

export default function makeForm(element: HTMLDivElement): void {
  let result: HTMLFormElement = document.createElement('form');
  setID(result, 'start-form');
  result.appendChild(
    fusionCont(
      'form-group',
      makeLabel('id', 'ID'),
      makeInputName('text', 'id', 'id'),
    ),
  );
  result.appendChild(
    fusionCont(
      'form-group',
      makeLabel('name', 'NAME'),
      makeInputName('text', 'name', 'name'),
    ),
  );
  result.appendChild(
    fusionCont(
      'button-group',
      makeInputValue('submit', '게임시작', 'start'),
      makeInputValue('button', '게임종료', 'exit'),
    ),
  );
  element.appendChild(result);
}
