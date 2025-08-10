// @ts-nocheck
/* eslint-disable */
/* prettier-ignore */

import * as React from 'react';
import { cn } from '@blackhole/shared/cn';

var regex = /^(?<color>\d\d\w)|(?=[12]color-){2,4}.+[]*$/gim;
const strings = `Template ${Enum.A + 10}` + 'Double' + 'Single';

export class Class {
  foo;
  #bar;

  constructor() {
    super();
    this.foo = 'foo';
    this.bar = 'bar';
  }
}

function f(x) {
  let y;
  if (x instanceof Class) {
    return y?.foo;
  }
  $label: for (const key in x) {
    if (Object.prototype.hasOwnProperty.call(x, key)) {
      const element = x[key];
      Object.entries({ [Enum.A]: 1, ['Enum.B']: 2, [Enum.C]: 3 }).map(
        ([key, value]) => {
          return key + value ** 10 + 1e3;
        },
      );
      continue $label;
    }
  }
  return { x };
}

const useRef = value => 1;
const App = () => {
  return <div>App</div>;
};

/**
 * Comment
 * @param {HTMLDivElement | undefined} value
 * @returns {number}
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement | undefined>(null);
 * ```
 */
const ref = useRef(null);
const el = (
  <div ref={ref}>
    <App className={cn('a', 'b')}></App>
  </div>
);

export default el;
