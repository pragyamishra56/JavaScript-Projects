let element = document.getElementById("example-element");
let input = document.getElementById("input");
let reset = document.getElementById("reset");
let edit = document.getElementById("edit");

let cmOptions = {
  mode: "css",
  theme: "mdn-like",
};

let cmEditor = CodeMirror(document.body, cmOptions);
cmEditor.setSize("100%", 50);
cmEditor.doc.setValue(cmInitContent);

CodeMirror.hint.css = function (cm) {
  let inner = { from: cm.getCursor(), to: cm.getCursor(), list: [] };

  let currentPos = cm.getCursor();
  let preceding = cm.getRange({ line: currentPos.line, ch: 0 }, currentPos);
  if (preceding == cmMatchToShowCompletions) {
    inner.list = cmCompletionChoices;
  }
  return inner;
};

function applyCode() {
  element.style.cssText = cmEditor.doc.getValue();
}

reset.addEventListener("click", function () {
  cmEditor.doc.setValue(cmInitContent);
  applyCode();
});

function selectValue() {
  let value = cmEditor.doc.getValue();
  let start = value.indexOf(":") + 1;
  if (value.length > start && value[start] === " ") {
    start++;
  }

  let end = value.length - 1;
  if (value.length > 0 && value[end - 1] === ";") {
    end--;
  }

  cmEditor.doc.setSelection({ line: 0, ch: start }, { line: 0, ch: end });
}

edit.addEventListener("click", function () {
  cmEditor.focus();
  selectValue();
});

cmEditor.on("change", applyCode);
window.addEventListener("load", applyCode);

function showCompletions(cm, event) {
  let popupKeyCodes = {
    9: "tab",
    13: "enter",
    27: "escape",
    33: "pageup",
    34: "pagedown",
    35: "end",
    36: "home",
    38: "up",
    40: "down",
  };

  if (!popupKeyCodes[(event.keyCode || event.which).toString()]) {
    CodeMirror.showHint(cm, CodeMirror.hint.css, {
      completeSingle: false,
      closeOnUnfocus: false,
    });
  }
}

cmEditor.on("keyup", showCompletions);