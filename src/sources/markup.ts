import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const xml: TokenColor[] = [
  {
    name: 'JSX Components',
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
  {
    name: 'Tags',
    scope:
      'entity.name.tag.localname.xml, entity.name.tag.html, entity.name.tag.tsx',
    settings: {
      fontStyle: 'bold',
    },
  },
];
