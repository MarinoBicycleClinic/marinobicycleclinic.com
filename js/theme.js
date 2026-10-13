(function () {
  'use strict';

  var storageKey = 'marino-theme';
  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  var preference;

  try {
    preference = localStorage.getItem(storageKey);
  } catch (error) {
    // The toggle still works when browser storage is unavailable.
  }
  if (preference !== 'light' && preference !== 'dark') preference = null;

  function applyTheme() {
    var dark = preference ? preference === 'dark' : systemTheme.matches;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    var button = document.querySelector('.theme-toggle');
    if (button) {
      button.hidden = false;
      button.setAttribute('aria-pressed', String(dark));
      button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  // Apply before the styles load to avoid a flash of the wrong theme.
  applyTheme();
  systemTheme.addEventListener('change', applyTheme);

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme();
    document.querySelector('.theme-toggle').addEventListener('click', function () {
      preference = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(storageKey, preference);
      } catch (error) {
        // Keep the choice for this page even if it cannot be saved.
      }
      applyTheme();
    });
  });
}());
