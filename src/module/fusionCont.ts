import makeDiv from './makeDiv';
import setClass from './setClass';

export default function fusionCont(
  className: string,
  innerHTML1: string,
  innerHTML2: string,
): void {
  let classDiv: HTMLDivElement = makeDiv();
  setClass(classDiv, className);
  classDiv.innerHTML = innerHTML1 + innerHTML2;
}
