import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const terraform: TokenColor[] = [
  {
    name: 'Terraform Keywords',
    scope: 'entity.name.type.terraform',
    settings: {
      foreground: Foregrounds.Red,
    },
  },
];
