function appendChildren(parent, ...children) {
  if (!(parent instanceof HTMLElement)) {
    throw new Error("Parent must be a valid HTML element");
  }

  children.forEach(child => {
    if (child instanceof HTMLElement) {
      parent.appendChild(child);
    } else if (typeof child === "string") {
      // if it's text, make a text node
      parent.appendChild(document.createTextNode(child));
    } else {
      console.warn("Skipped invalid child:", child);
    }
  });
}

export {appendChildren}