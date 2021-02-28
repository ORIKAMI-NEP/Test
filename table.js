all = "<h1>もくじ</h1><nav class=table>";
for (let i = 0; i < content.length; i++) {
  all += "<h4>" + content[i][0] + "</h4><ol>";
  for (let j = 1; j < content[i].length; j++) {
    all += "<li><a href=";
    if (i == 0 && j == 1) all += "index";
    else all += ("00" + i).slice(-2) + "-" + ("00" + j).slice(-2);
    all += ".html>" + content[i][j] + "</a></li>";
  }
  all += "</ol></nav>";
}
table.innerHTML += all;
