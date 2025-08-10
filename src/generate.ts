import fs from 'node:fs';

import type { VsCodeTheme } from './types.ts';

import { semanticTokenColors } from './semanticColors.ts';

const theme: VsCodeTheme = {
  $schema: 'vscode://schemas/color-theme',
  name: 'FullstacksJS',
  semanticHighlighting: true,
  semanticTokenColors,
  tokenColors: [],
  colors: {},
};

fs.writeFileSync('themes/generated/main.json', JSON.stringify(theme, null, 2));
