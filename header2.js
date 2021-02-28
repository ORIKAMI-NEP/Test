let file = window.location.href.split("/").pop(),
  file1,
  file2;
file1 = file.slice(0, 2);
file2 = file.slice(3, 5);

if (file1 === "in") all = "<h1>" + content[0][0] + "</h1>";
else if (file1 === "en") all = "<h1>" + content2[0][0] + "</h1>";
else if (file1 === "an") all = "<h1>" + content2[1][0] + "</h1>";
else if (file1 === "de") all = "<h1>" + content2[2][0] + "</h1>";
else all = "<h1>" + content[Number(file1)][0] + "</h1>";
header2.innerHTML += all;
