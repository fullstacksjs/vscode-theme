import fs from 'node:fs';
import path from 'node:path';

import type { ColorConfig } from './ui/VSCodeToken.ts';

export function deepMerge<T extends object>(obj1: T, obj2: DeepPartial<T>): T {
  const result: any = { ...obj1 };

  for (const key in obj2) {
    if (Object.hasOwn(obj2, key)) {
      const val1 = (obj1 as any)?.[key];
      const val2 = (obj2 as any)[key];

      if (typeof val2 === 'object' && typeof val1 === 'object') {
        result[key] = deepMerge(val1, val2);
      } else {
        result[key] = val2;
      }
    }
  }

  return result as T;
}

export function kebabCase(str: string) {
  return str.split(' ').join('-').toLowerCase();
}

export function writeJSON(p: string, content: object) {
  fs.writeFileSync(
    path.join(process.cwd(), p),
    `${JSON.stringify(content, null, 2)}\n`,
  );
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export function withAlpha(hex: ColorConfig, alpha: number) {
  return `${hex}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, '0')}`;
}
