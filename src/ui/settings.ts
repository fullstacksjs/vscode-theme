import type { UIColor } from '../types.ts';

import { UIColors } from '../colors.ts';

export const settings: UIColor = {
  'settings.headerForeground': UIColors.Foreground, // The foreground color for a section header or active title.
  'settings.modifiedItemIndicator': UIColors.Primary, // The line that indicates a modified setting.
  'settings.focusedRowBorder': UIColors.Transparent, // The color of the row's top and bottom border when the row is focused.
  'settings.headerBorder': UIColors.Border, // The color of the header container border.

  // 'settings.dropdownBackground': '', // Dropdown background.
  // 'settings.dropdownForeground': '', // Dropdown foreground.
  // 'settings.dropdownBorder': '', // Dropdown border.
  // 'settings.dropdownListBorder': '', // Dropdown list border.
  // 'settings.checkboxBackground': '', // Checkbox background.
  // 'settings.checkboxForeground': '', // Checkbox foreground.
  // 'settings.checkboxBorder': '', // Checkbox border.
  // 'settings.rowHoverBackground': '', // The background color of a settings row when hovered.
  // 'settings.textInputBackground': '', // Text input box background.
  // 'settings.textInputForeground': '', // Text input box foreground.
  // 'settings.textInputBorder': '', // Text input box border.
  // 'settings.numberInputBackground': '', // Number input box background.
  // 'settings.numberInputForeground': '', // Number input box foreground.
  // 'settings.numberInputBorder': '', // Number input box border.
  // 'settings.focusedRowBackground': '', // Background color of a focused setting row.
  // 'settings.sashBorder': '', // The color of the Settings editor splitview sash border.
  // 'settings.settingsHeaderHoverForeground': '', // The foreground color for a section header or hovered title.
};
