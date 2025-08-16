// @ts-nocheck
/* eslint-disable */
/* prettier-ignore */

import * as React from 'react';
import { cn } from '@blackhole/shared/cn';

const Enum = {
  A: 1,
  B: 2,
  C: 3,
};

var regex = /^(?<color>\d\d\w)|(?=[12]color-){2,4}.+[]*$/gim;
const strings = `Template ${Enum.A + 10}` + 'Double' + 'Single';

@Decorator
export class Class {
  foo;
  #bar;

  constructor() {
    super();
    this.foo = 'foo';
    this.bar = 'bar';
  }

  @Decorator(1, 2, 3)
  method() {
    return this.foo;
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

const a = null;
const b = undefined;
const c = 0;
const d = false;
const e = true;
const f = 'string';
const g = 1;
const h = 1.1;
const i = 1n;
const k = 0x123;
const l = 0o123;
const m = 1_000_000;
const n = 0b1010_0110;
const o = 1e3;
const j = Symbol('symbol');

export default el;
