import { Foregrounds, UIColors } from '../colors.ts';

export const panel = {
  'panel.background': UIColors.Background, // Panel background color.
  'panel.border': UIColors.Border, // Panel border color to separate the panel from the editor.
  'panel.dropBorder': UIColors.Primary, // Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal.
  'panelTitle.activeBorder': UIColors.Primary, // Border color for the active panel title.
  'panelTitle.activeForeground': UIColors.Foreground, // Title color for the active panel.
  'panelTitle.inactiveForeground': Foregrounds.Support, // Title color for the inactive panel.
  'panelTitle.border': UIColors.Border, // Panel title border color on the bottom, separating the title from the views. Panels are shown below the editor area and contain views like output and integrated terminal.
  // 'panelTitleBadge.background': '', // Panel title badge background color. Panels are shown below the editor area and contain views like output and integrated terminal.
  // 'panelTitleBadge.foreground': '', // Panel title badge foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.

  // 'panelInput.border': '', // Input box border for inputs in the panel.
  'panelSection.border': UIColors.Border, // Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
  'panelSection.dropBackground': UIColors.BackgroundOverlay, // Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal.
  'panelSectionHeader.background': UIColors.Background, // Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal.
  // 'panelSectionHeader.foreground': UIColors.Foreground, // Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.
  'panelStickyScroll.background': UIColors.BackgroundElevated, // Background color of sticky scroll in the panel.
  'panelStickyScroll.border': UIColors.Border, // Border color of sticky scroll in the panel.
  // 'panelStickyScroll.shadow': '', // Shadow color of sticky scroll in the panel.
  // 'panelSectionHeader.border': '', // TODO Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
  // 'outputView.background': '', // Output view background color.
  // 'outputViewStickyScroll.background': '', // Output view sticky scroll background color.
};
