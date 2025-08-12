import type { UIColor } from '../types.ts';

import { base } from './base.ts';
import { bracket } from './bracket.ts';
import { editor } from './editor.ts';
import { form } from './form.ts';
import { scm } from './scm.ts';
import { statusBar } from './status-bar.ts';
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
};
