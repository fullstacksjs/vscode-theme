import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const sidebar = (colors: UIColors): VSCodeTokens => ({
  'sideBar.background': colors.background.default,
  'sideBar.foreground': colors.foreground.default,
  'sideBar.border': colors.border.default,
  'sideBar.dropBackground': colors.selection.inactive,
  'sideBarTitle.foreground': colors.foreground.default,
  'sideBarSectionHeader.background': colors.transparent,
  'sideBarSectionHeader.foreground': colors.foreground.default,

  'sideBarSectionHeader.border': colors.border.default,
  'sideBarActivityBarTop.border': colors.border.default,

  'sideBarTitle.background': colors.background.default,
  'sideBarTitle.border': colors.border.default,

  'sideBarStickyScroll.background': colors.background.default,
  'sideBarStickyScroll.border': colors.border.default,
  'sideBarStickyScroll.shadow': colors.transparent,
});
