if (file1 === "in") {
  all = "<h2>" + content[0][1] + "</h2>";
} else all = "<h2>" + content[Number(file1)][Number(file2)] + "</h2>";
header3.innerHTML += all;
