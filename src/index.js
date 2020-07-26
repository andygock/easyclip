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

export default copy;
