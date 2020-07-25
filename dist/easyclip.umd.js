(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.easyclip = factory());
}(this, (function () { 'use strict';

  const copy = (str) => {
    // create dummy textarea with copy string inside
    const el = document.createElement("textarea");
    el.setAttribute("readonly", "");
    el.style.display = "hidden";
    el.value = str;

    // add dummy element to DOM, select and copy to clipboard
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return copy;

})));
