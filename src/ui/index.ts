import type { UIColor } from '../types.ts';

import { activityBar } from './activity-bar.ts';
import { base } from './base.ts';
import { bracket } from './bracket.ts';
import { chat } from './chat.ts';
import { editorWidget } from './editor-widget.ts';
import { editor } from './editor.ts';
import { form } from './form.ts';
import { list } from './list.ts';
import { minimap } from './minimap.ts';
import { scm } from './scm.ts';
import { sidebar } from './sidebar.ts';
import { statusBar } from './status-bar.ts';
import { tabs } from './tabs.ts';
import { terminal } from './terminal.ts';
import { text } from './text.ts';

export const colors: UIColor = {
  ...terminal,
  ...bracket,
  ...scm,
  ...editor,
  ...statusBar,
  ...base,
  ...text,
  ...form,
  ...list,
  ...activityBar,
  ...sidebar,
  ...minimap,
  ...tabs,
  ...chat,
  ...editorWidget,
};
