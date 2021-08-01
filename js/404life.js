var text_1 = '此皮肤站已经搬迁至新的服务器，请访问:"skin.xpla.top"。',
text_2 = 'This website has been relocated to a new server, please visit:"skin.xpla.top".';
repeat(text_1, 1);
setTimeout(function () {
  repeat(text_2, 2);
}, text_1.length * 100 + 1000);

function repeat(text, n) {
  var i = 0,
  repeatable = setInterval(function () {
    $('#text_' + n).text($('#text_' + n).text() + text[i]);
    i++;
    if (i >= text.length) {
      clearInterval(repeatable);
    }
  }, 100);
}
//# sourceURL=pen.js