// @ts-nocheck
/* eslint-disable */
/* prettier-ignore */

import * as React from 'react';
import { cn } from '@blackhole/shared/cn';

namespace Namespace {}

export const enum Enum {
  A = 1,
  B = 4,
  C = 'C',
  D = A | B,
}

type Union<
  T extends unknown[],
  U = (args: { x: boolean }) => void | undefined,
> = Enum.A | (Enum.B & Enum.C);
const a: Union<[Enum.A], (args: { x: boolean }) => void | undefined> = Enum.A;

var regex = /^(?<color>\d\d\w)|(?=[12]color-){2,4}.+[]*(?<=a)(?!u)b$/gim;
const urlRegex =
  /^(?<protocol>https?:\/\/)?(?<domain>[a-zA-Z0-9.-]+)(?<path>\/.*)?$/;

const strings = `Template ${Enum.A + 10}` + 'Double' + 'Single';

abstract class BaseClass {
  protected abstract foo: string;
}

interface Interface {
  bar: string;
}

export class Class extends BaseClass implements Interface {
  protected foo: string;
  public bar: string;

  constructor() {
    super();
    this.foo = 'foo';
    this.bar = 'bar';
  }
}

function f<T, K extends keyof T>(x: T): { x: T; y?: K } {
  let y: { foo?: false } | undefined;
  if (x instanceof Class) {
    return y?.foo! as never;
  }
  $label: for (const key in x) {
    if (Object.prototype.hasOwnProperty.call(x, key)) {
      const element = x[key] as unknown as T[Extract<
        (typeof T)[keyof T],
        never
      >];
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

const useRef = <T,>(value: T | null) => 1;

/**
 * Comment
 * @param {HTMLDivElement | undefined} value
 * @returns {number}
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement | undefined>(null);
 * ```
 */
const ref = useRef<HTMLDivElement | undefined>(null);
const el = (
  <div ref={ref}>
    <App className={cn('a', 'b')}></App>
  </div>
);

export default el;
