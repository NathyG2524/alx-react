/*

Create a function named mergeDeeplyElements
It accepts two arguments page1 and page2. Both are objects
It should return a List containing the values of the two pages
If two values are the same, page2 values should be used.
Requirements:
Use list and map from the Immutable.js library
*/
import { Map } from 'immutable';


export function mergeDeeplyElements(page1, page2) {
  const page1map = Map(page1);
  const page2map = Map(page2);

  return page1map.mergeDeeply(page2map);
}
