import { type Component, createEffect, createSignal, For } from 'solid-js';
import { Values } from '../values';

const Cell: Component<{
  v1: any
  v2: any
}> = (props) => {
  const [eq, setEq] = createSignal(false);
  createEffect(() => {
    const v1 = props.v1(), v2 = props.v2();
    // eslint-disable-next-line eqeqeq
    setEq(v1 == v2);
  });

  return (
    <td
      style={{ background: eq() ? 'green' : 'lightgray' }}
    />
  );
};

export const ValueTable: Component = () => {
  const kv = Object.entries(Values);

  return (
    <table class="text-right font-inconsolata mx-auto select-none">
      <tbody>
        <tr>
          <td />
          <For each={kv}>
            {([name]) => (
              <th class="mr-20 font-normal write-vertical-left">
                {name}
                &thinsp;
              </th>
            )}
          </For>
        </tr>
        <For each={kv}>
          {([name, left]) => (
            <>
              <tr>
                <th class="font-normal">
                  {name}
                  &thinsp;
                </th>
                <For each={kv}>
                  {([, up]) => <Cell v1={left} v2={up} />}
                </For>
              </tr>
            </>
          )}
        </For>
      </tbody>
    </table>
  );
};
