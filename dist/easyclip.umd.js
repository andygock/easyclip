(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f():typeof define==='function'&&define.amd?define(f):(g=typeof globalThis!=='undefined'?globalThis:g||self,g.easyclip=f());}(this,(function(){'use strict';const copy = (str) => {
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
};return copy;})));