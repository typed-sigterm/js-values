import { type Component, For } from 'solid-js';
import { Colors } from '../values';

const LegendLabels = {
  [Colors.eq3]: '===',
  [Colors.eq2]: '==',
  [Colors['le+ge']]: '<= && >=',
  [Colors.le]: '<=',
  [Colors.ge]: '>=',
  [Colors.else]: 'else',
};

export const Legend: Component = () => {
  return (
    <div class="flex justify-center mx-auto mt-4 gap-8">
      <For each={Object.values(Colors)}>
        {color => (
          <div class="flex">
            <div class="w-4 h-4 mr-1" style={{ background: color }} />
            <span>{LegendLabels[color]}</span>
          </div>
        )}
      </For>
    </div>
  );
};
