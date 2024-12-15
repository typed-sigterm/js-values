import type { DataType } from 'csstype';
import { type Component, createEffect, createSignal, For } from 'solid-js';
import { Colors, Values } from '../values';

const Cell: Component<{
  v1: any
  v2: any
}> = (props) => {
  const [color, setColor] = createSignal<DataType.Color>(Colors.else);
  createEffect(() => {
    const v1 = props.v1(), v2 = props.v2();
    // eslint-disable-next-line eqeqeq
    const eq3 = v1 === v2, eq2 = v1 == v2, le = v1 <= v2, ge = v1 >= v2;
    if (eq3)
      setColor(Colors.eq3);
    else if (eq2)
      setColor(Colors.eq2);
    else if (le && ge)
      setColor(Colors['le+ge']);
    else if (le)
      setColor(Colors.le);
    else if (ge)
      setColor(Colors.ge);
  });

  return (
    <td style={{ background: color() }} />
  );
};

export const ValueTable: Component = () => {
  const kv = Object.entries(Values);

  return (
    <table class="text-right mx-auto">
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
