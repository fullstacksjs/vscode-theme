import type { UIColor } from '../types.ts';

import { UIColors } from '../colors.ts';

export const sidebar: UIColor = {
  'sideBar.background': UIColors.Background, // Side Bar background color.
  'sideBar.foreground': UIColors.Foreground, // Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
  'sideBar.border': UIColors.Border, // Side Bar border color on the side separating the editor.
  'sideBar.dropBackground': UIColors.SelectionInactive, // Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through.
  'sideBarTitle.foreground': UIColors.Foreground, // Side Bar title foreground color.
  'sideBarSectionHeader.background': UIColors.Transparent, // Side Bar section header background color.
  'sideBarSectionHeader.foreground': UIColors.Foreground, // Side Bar section header foreground color.

  'sideBarSectionHeader.border': UIColors.Border, // Side bar section header border color.
  'sideBarActivityBarTop.border': UIColors.Border, // Border color between the activity bar at the top/bottom and the views.

  'sideBarTitle.background': UIColors.Background, // Side bar title background color. The side bar is the container for views like explorer and search.
  'sideBarTitle.border': UIColors.Border, // Side bar title border color on the bottom, separating the title from the views. The side bar is the container for views like explorer and search.

  'sideBarStickyScroll.background': UIColors.Background, // Background color of sticky scroll in the side bar.
  'sideBarStickyScroll.border': UIColors.Border, // Border color of sticky scroll in the side bar.
  'sideBarStickyScroll.shadow': UIColors.Transparent, // Shadow color of sticky scroll in the side bar.
};
