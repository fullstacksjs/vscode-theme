import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const jsx: TokenColor[] = [
  {
    name: 'Tag',
    scope: 'support.class.component.tsx, support.class.component.js.jsx',
    settings: {
      foreground: Foregrounds.Orange,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Embedded',
    scope: 'punctuation.section.embedded',
    settings: {
      foreground: Foregrounds.Red,
    },
  },
];
