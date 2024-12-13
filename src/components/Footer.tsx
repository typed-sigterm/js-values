import type { Component } from 'solid-js';

export const Footer: Component = () => {
  return (
    <footer class="mt-6 mx-4">
      <hr />
      Under&nbsp;
      <a href="http://mit-license.org/" target="_blank">
        the MIT license
      </a>
      . Copyright &copy; 2024-present&nbsp;
      <a href="https://www.typed-sigterm.me/" target="_blank">
        Typed SIGTERM
      </a>
    </footer>
  );
};
