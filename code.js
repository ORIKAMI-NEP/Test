$("#code").each(function () {
  let txt = $(this).text();
  let color = [
    /* ============================================================================================

    ソースコード内の特定の単語に色を付与できます
    [*][0]に付与したい色のカラーネーム,またはカラーコード、[*][1~]に色を変えたい単語
    intとpr"int"などその単語が含まれる別の単語が存在する場合、前に@を付けるようにしてください
    文字列に対しては「s@」と「@s」で囲ってください（例：s@"文字列"@s）

    -------------------------------------------------------------------------------------------- */

    ["#4169e1", "class", "public", "private", "static", "\\n"],
    /* 修飾子など⇒青 */

    ["#f0e68c", "main", "System", "out", "println", "printf", "print"],
    /* メソッド名など⇒黄 */

    ["#9932cc", "if", "for", "while", "@do", "switch"],
    /* 制御文など⇒紫(@:do) */

    ["#66cdaa", "@int", "float", "double", "char", "String", "boolean", "void"],
    /* 型など⇒緑(@:int)

    ============================================================================================ */
  ];
  let all = "$(this).html(txt";
  for (let i = 0; i < color.length; i++)
    for (let j = 1; j < color[i].length; j++)
      if (color[i][j].slice(0, 1) === "@")
        all +=
          ".replace(/" +
          color[i][j] +
          "/g,'<span style=\" color:" +
          color[i][0] +
          '">' +
          color[i][j].slice(1) +
          "</span>')";
      else
        all +=
          ".replace(/" +
          color[i][j] +
          "/g,'<span style=\"color:" +
          color[i][0] +
          '">' +
          color[i][j] +
          "</span>')";
  all += ".replace(/s@/g,'<span style=\"color:#f08080\">')";
  all += ".replace(/@s/g,'</span>')";
  all += ".replace(/m@/g,'<span style=\"color:#f0e68c\">')";
  all += ".replace(/@m/g,'</span>')";
  all += ");";
  eval(all);
});
