(function() {
var works = document.querySelectorAll('#works .work');
var tags = new Array(works.length);
var sel = document.getElementById('sel-work');
var w = 0;
for (w = 0; w < works.length; w += 1) tags[w] = works[w].getElementsByTagName('span');
window.filterWork = function() {
  var tag = sel.options[sel.selectedIndex].value;
  var work, t, matched;
  for (w = 0; w < works.length; w += 1) {
    work = works[w];
    if (!tag || !tag.length) {
      work.hidden = false;
      continue;
    }
    matched = false;
    for (t in tags[w]) if (tags[w][t].className === tag) {
      matched = true;
      break;
    }
    work.hidden = !matched
  }
};
}());
