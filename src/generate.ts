import type { Palette, UIColors } from './colors.ts';
import type { DeepPartial } from './utils.ts';

import packageJson from '../package.json' with { type: 'json' };
import { defaultColors, defaultPalette } from './colors.ts';
import { semanticTokenColors } from './semanticColors.ts';
import * as sources from './sources/index.ts';
import { generateColors } from './ui/generateColors.ts';
import { deepMerge, kebabCase, withAlpha, writeJSON } from './utils.ts';

packageJson.contributes.themes = [
  {
    label: 'FullstacksJS (Legacy)',
    uiTheme: 'vs-dark',
    path: './themes/legacy.json',
  },
];

interface ThemeConfig {
  name: string;
  colors: DeepPartial<UIColors>;
  palette: DeepPartial<Palette>;
}

const generate = ({ colors, name, palette }: ThemeConfig) => {
  const path = `themes/generated/${kebabCase(name)}.json`;
  writeJSON(path, {
    $schema: 'vscode://schemas/color-theme',
    name: 'FullstacksJS',
    semanticHighlighting: true,
    semanticTokenColors,
    tokenColors: Object.values(sources).flat(),
    colors: generateColors({
      colors: deepMerge(defaultColors, colors),
      palette: deepMerge(defaultPalette, palette),
    }),
  });

  packageJson.contributes.themes.push({
    label: `FullstacksJS (${name})`,
    uiTheme: 'vs-dark',
    path,
  });
  writeJSON('package.json', packageJson);
};

const themes: ThemeConfig[] = [
  { name: 'Main', colors: {}, palette: {} },
  {
    name: 'Dark',
    colors: {
      background: {
        default: '#0e0e0e',
        elevated: '#141414',
        focus: '#000000',
        hover: withAlpha('#000000', 0.4),
        overlay: withAlpha('#000000', 0.7),
      },
      selection: {
        found: withAlpha('#4f2933', 0.3),
      },
      warning: {
        foreground: '#ffb300',
        focus: '#ffb300',
      },
    },
    palette: {},
  },
  {
    name: 'Warm',
    colors: {
      background: {
        default: '#282828',
        elevated: '#3c3836',
        focus: withAlpha('#000000', 0.4),
        hover: withAlpha('#FFFFFF', 0.4),
        overlay: withAlpha('#000000', 0.2),
      },
      border: {},
    },
    palette: {},
  },
];

for (const theme of themes) {
  generate(theme);
}
