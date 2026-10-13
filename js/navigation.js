(function () {
  'use strict';

  var nav = document.querySelector('.fh5co-nav');
  var button = nav.querySelector('.menu-toggle');

  function setOpen(open) {
    nav.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
  }

  button.hidden = false;
  nav.classList.add('menu-ready');
  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('menu-open')) {
      setOpen(false);
      button.focus();
    }
  });
  window.matchMedia('(max-width: 768px)').addEventListener('change', function () {
    setOpen(false);
  });
}());
