function getFirstSelector(s) {
  return document.querySelector(s);
}

function nestedTarget(){
  return document.querySelector('#nested .target');}

function increaseRankBy(n){
  const ranked = document.querySelectorAll('.ranked-list');
  const len = ranked.length;
  for (let i=0; i<len; i++){
    let children = ranked[i].children;
    const clen = children.length;
    for (let x=0; x<clen; x++){
      children[x].innerHTML = parseInt(children[x].innerHTML) + n;}
  }}

function deepestChild(){
  let node = document.getElementById('grand-node');
  let next = node.children[0];
  while (next){
    node = next;
    next = node.children[0];}
  return node;}
