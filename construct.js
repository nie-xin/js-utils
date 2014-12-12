// Take an element and an array, place the element in the front of the array
function construct (head, tail) {
  return cat([head], _.toArray(tail));
}
