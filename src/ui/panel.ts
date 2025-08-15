import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const panel: UIColor = {
  'panel.background': UIColors.Background,
  'panel.border': UIColors.Border,
  'panel.dropBorder': UIColors.Primary,
  'panelTitle.activeBorder': UIColors.Primary,
  'panelTitle.activeForeground': UIColors.Foreground,
  'panelTitle.inactiveForeground': Foregrounds.Support,
  'panelTitle.border': UIColors.Border,
  'panelTitleBadge.background': false,
  'panelTitleBadge.foreground': false,
  'panelInput.border': false,
  'panelSection.border': UIColors.Border,
  'panelSection.dropBackground': UIColors.BackgroundOverlay,
  'panelSectionHeader.background': UIColors.Background,
  'panelSectionHeader.foreground': false,
  'panelStickyScroll.background': UIColors.BackgroundElevated,
  'panelStickyScroll.border': UIColors.Border,
  'panelStickyScroll.shadow': false,
  'panelSectionHeader.border': false,
  'outputView.background': false,
  'outputViewStickyScroll.background': false,
};
