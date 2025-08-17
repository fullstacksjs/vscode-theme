import type { Palette, UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

import { defaultColors, defaultPalette } from '../colors.ts';
import { activityBar } from './activity-bar.ts';
import { banner } from './banner.ts';
import { base } from './base.ts';
import { bracket } from './bracket.ts';
import { chart } from './chart.ts';
import { chat } from './chat.ts';
import { commandCenter } from './command-center.ts';
import { debug } from './debug.ts';
import { editorWidget } from './editor-widget.ts';
import { editor } from './editor.ts';
import { extensions } from './extensions.ts';
import { form } from './form.ts';
import { key } from './key.ts';
import { list } from './list.ts';
import { minimap } from './minimap.ts';
import { misc } from './misc.ts';
import { notebook } from './notebook.ts';
import { notification } from './notification.ts';
import { panel } from './panel.ts';
import { peekView } from './peek-view.ts';
import { scm } from './scm.ts';
import { settings } from './settings.ts';
import { sidebar } from './sidebar.ts';
import { statusBar } from './status-bar.ts';
import { symbol } from './symbol.ts';
import { tabs } from './tabs.ts';
import { terminal } from './terminal.ts';
import { test } from './test.ts';
import { text } from './text.ts';
import { titleBar } from './title-bar.ts';

const generators = [
  terminal,
  bracket,
  scm,
  editor,
  statusBar,
  base,
  text,
  form,
  list,
  activityBar,
  sidebar,
  minimap,
  tabs,
  chat,
  editorWidget,
  peekView,
  panel,
  titleBar,
  commandCenter,
  notification,
  banner,
  extensions,
  key,
  debug,
  test,
  settings,
  symbol,
  notebook,
  chart,
  misc,
];

export function generateColors({
  colors,
  palette,
}: {
  colors: UIColors;
  palette: Palette;
}) {
  return generators
    .map(generator => generator(colors, palette))
    .reduce((acc, color) => {
      const filtered = Object.fromEntries<VSCodeTokens>(
        Object.entries(color).filter(
          ([_, value]) => value && value !== 'unknown',
        ),
      );
      return { ...acc, ...filtered };
    });
}
