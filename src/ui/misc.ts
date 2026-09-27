import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const misc = (colors: UIColors): VSCodeTokens => ({
  'simpleFindWidget.sashBorder': colors.unknown,
  'actionBar.toggledBackground': colors.unknown,
  'ports.iconRunningProcessForeground': colors.unknown,

  'welcomePage.background': colors.background.default,
  'welcomePage.progress.background': colors.background.focus,
  'welcomePage.progress.foreground': colors.primary.foreground,
  'welcomePage.tileBackground': colors.background.elevated,
  'welcomePage.tileHoverBackground': colors.background.hover,
  'welcomePage.tileBorder': colors.border.default,
  'walkThrough.embeddedEditorBackground': colors.background.elevated,
  'walkthrough.stepTitle.foreground': colors.foreground.default,
});
