let file = window.location.href.split("/").pop(),
  file1,
  file2;
file1 = file.slice(0, 2);
file2 = file.slice(3, 5);

if (file1 === "in") {
  all = "<h1>" + content[0][0] + "</h1>";
} else all = "<h1>" + content[Number(file1)][0] + "</h1>";
header2.innerHTML += all;
