import fs from 'node:fs';

import type { VsCodeTheme } from './types.ts';

import { semanticTokenColors } from './semanticColors.ts';
import * as sources from './sources/index.ts';
import { base } from './ui/base.ts';
import { bracket } from './ui/bracket.ts';
import { editor } from './ui/editor.ts';
import { scm } from './ui/scm.ts';
import { statusBar } from './ui/status-bar.ts';
import { terminal } from './ui/terminal.ts';
import { text } from './ui/text.ts';

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
    ...editor,
    ...statusBar,
    ...base,
    ...text,
  },
};

fs.writeFileSync('themes/generated/main.json', JSON.stringify(theme, null, 2));
