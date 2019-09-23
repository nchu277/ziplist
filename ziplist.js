const list1 = ['a', 'b', 'c'];
const list2= [1, 2, 3];

function zipList(list1, list2) {
  let emptyList = [];
  for(let i = 0; i < (list1.length); i++) {
    emptyList.push(list1[i]);
    emptyList.push(list2[i]);
  }
  return emptyList;
}
console.log(zipList(list1, list2));

function zipListTheSimpleWay(list1, list2) {

  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(list1, list2));