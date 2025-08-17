import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

import { withAlpha } from '../utils.ts';

export const minimap = (colors: UIColors): VSCodeTokens => ({
  'minimap.findMatchHighlight': colors.background.hover,
  'minimap.selectionHighlight': colors.selection.default,
  'minimap.errorHighlight': colors.danger.foreground,
  'minimap.warningHighlight': colors.warning.foreground,
  'minimap.background': colors.background.elevated,
  'minimap.selectionOccurrenceHighlight': colors.background.hover,
  'minimap.foregroundOpacity': withAlpha(colors.foreground.default, 0.67),
  'minimap.infoHighlight': colors.info.foreground,
  'minimap.chatEditHighlight': colors.background.focus,

  'minimapSlider.background': colors.background.overlay,
  'minimapSlider.hoverBackground': colors.background.hover,
  'minimapSlider.activeBackground': colors.background.focus,
});
