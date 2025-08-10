import fs from 'node:fs';

import type { VsCodeTheme } from './types.ts';

import { semanticTokenColors } from './semanticColors.ts';
import * as sources from './sources/index.ts';
import { bracket } from './ui/bracket.ts';
import { scm } from './ui/scm.ts';
import { terminal } from './ui/terminal.ts';

const theme: VsCodeTheme = {
  $schema: 'vscode://schemas/color-theme',
  name: 'FullstacksJS',
  semanticHighlighting: true,
  semanticTokenColors,
  tokenColors: Object.values(sources).flat(),
  colors: {
    ...terminal,
    ...bracket,
    ...scm,
  },
};

fs.writeFileSync('themes/generated/main.json', JSON.stringify(theme, null, 2));
