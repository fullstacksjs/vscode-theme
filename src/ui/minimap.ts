import type { UIColor } from './UIColor.ts';

import { UIColors, withAlpha } from '../colors.ts';

export const minimap: UIColor = {
  'minimap.findMatchHighlight': UIColors.BackgroundHover,
  'minimap.selectionHighlight': UIColors.Selection,
  'minimap.errorHighlight': UIColors.Danger,
  'minimap.warningHighlight': UIColors.Warning,
  'minimap.background': UIColors.BackgroundElevated,
  'minimap.selectionOccurrenceHighlight': UIColors.BackgroundHover,
  'minimap.foregroundOpacity': withAlpha(UIColors.Foreground, 0.67),
  'minimap.infoHighlight': UIColors.Info,
  'minimap.chatEditHighlight': UIColors.BackgroundFocus,

  'minimapSlider.background': UIColors.BackgroundOverlay,
  'minimapSlider.hoverBackground': UIColors.BackgroundHover,
  'minimapSlider.activeBackground': UIColors.BackgroundFocus,
};
