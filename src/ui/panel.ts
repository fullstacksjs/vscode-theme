import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const panel = (colors: UIColors): VSCodeTokens => ({
  'panel.background': colors.background.default,
  'panel.border': colors.border.default,
  'panel.dropBorder': colors.primary.foreground,
  'panelTitle.activeBorder': colors.primary.foreground,
  'panelTitle.activeForeground': colors.foreground.default,
  'panelTitle.inactiveForeground': colors.foreground.support,
  'panelTitle.border': colors.border.default,
  'panelTitleBadge.background': false,
  'panelTitleBadge.foreground': false,
  'panelInput.border': false,
  'panelSection.border': colors.border.default,
  'panelSection.dropBackground': colors.background.overlay,
  'panelSectionHeader.background': colors.background.default,
  'panelSectionHeader.foreground': false,
  'panelStickyScroll.background': colors.background.elevated,
  'panelStickyScroll.border': colors.border.default,
  'panelStickyScroll.shadow': false,
  'panelSectionHeader.border': false,
  'outputView.background': false,
  'outputViewStickyScroll.background': false,
});
