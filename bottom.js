all = "";
if (file1 !== "in")
  if (file === "00-02.html")
    all = "<a href='index.html' class=bottomLeft>← 前に戻る</a>";
  else if (file2 === "01")
    all =
      "<a href='" +
      ("00" + (Number(file1) - 1)).slice(-2) +
      ("00" + (content[Number(file1) - 1].length - 1)).slice(-2) +
      ".html' class=bottomLeft>← 前に戻る</a>";
  else
    all =
      "<a href='" +
      file1 +
      "-" +
      ("00" + (Number(file2) - 1)).slice(-2) +
      ".html' class=bottomLeft>前に戻る →</a>";
all += "<a href='#header' class=bottomCenter>ページトップへ</a>";
if (file1 === "in")
  all += "<a href='00-02.html' class=bottomRight>次へ進む →</a>";
else if (
  !(
    content[Number(file1)].length - 1 == Number(file2) &&
    content[Number(file1) + 1].length <= 1
  )
)
  if (content[Number(file1)].length - 1 == Number(file2))
    all +=
      "<a href='" +
      ("00" + (Number(file1) + 1)).slice(-2) +
      "-01.html' class=bottomRight>次へ進む →</a>";
  else
    all +=
      "<a href='" +
      file1 +
      "-" +
      ("00" + Number(file2 + 1)).slice(-2) +
      ".html' class=bottomRight>次へ進む →</a>";
bottom.innerHTML = all;
