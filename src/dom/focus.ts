export const focus = (el: HTMLElement): void => {
  if (el.hasAttribute('tabindex')) {
    el.focus();
  } else {
    el.tabIndex = -1;
    el.focus();
    el.removeAttribute('tabindex');
  }
};
