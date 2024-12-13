import type { Component } from 'solid-js';

export const Header: Component = () => {
  return (
    <header class="flex flex-row justify-between mx-4">
      <h1 class="select-none">
        <span class="inline-block h-[1.1em] w-[1.1em] mr-2 v-top i-logos-javascript" aria-label="JS" />
        <span>values</span>
      </h1>
      <div>
        <a href="https://github.com/typed-sigterm/js-values" target="_blank">
          <span class="inline-block text-3xl h-full i-logos-github-icon"></span>
        </a>
      </div>
    </header>
  );
};
