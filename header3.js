if (file1 === "in") all = "<h2>" + content[0][1] + "</h2>";
else if (file1 === "en") all = "<h2>" + content2[0][1] + "</h2>";
else if (file1 === "an") all = "<h2>" + content2[1][1] + "</h2>";
else if (file1 === "de") all = "<h2>" + content2[2][1] + "</h2>";
else all = "<h2>" + content[Number(file1)][Number(file2)] + "</h2>";
header3.innerHTML += all;
