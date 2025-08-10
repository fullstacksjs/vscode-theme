import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const shell: TokenColor[] = [
  {
    name: 'Shell Keywords',
    scope: 'support.function.builtin.shell',
    settings: {
      foreground: Foregrounds.Red,
    },
  },
  {
    name: 'Shell Keywords',
    scope: 'punctuation.definition.string.heredoc.delimiter.shell',
    settings: {
      foreground: Foregrounds.Orange,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Shell Keywords',
    scope: 'entity.name.command.shell',
    settings: {
      foreground: Foregrounds.Yellow,
      fontStyle: 'bold',
    },
  },
];
