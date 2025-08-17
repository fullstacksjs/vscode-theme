import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const settings = (colors: UIColors): VSCodeTokens => ({
  'settings.headerForeground': colors.foreground.default,
  'settings.modifiedItemIndicator': colors.primary.foreground,
  'settings.focusedRowBorder': colors.transparent,
  'settings.headerBorder': colors.border.default,

  'settings.dropdownBackground': false,
  'settings.dropdownForeground': false,
  'settings.dropdownBorder': false,
  'settings.dropdownListBorder': false,
  'settings.checkboxBackground': false,
  'settings.checkboxForeground': false,
  'settings.checkboxBorder': false,
  'settings.rowHoverBackground': false,
  'settings.textInputBackground': false,
  'settings.textInputForeground': false,
  'settings.textInputBorder': false,
  'settings.numberInputBackground': false,
  'settings.numberInputForeground': false,
  'settings.numberInputBorder': false,
  'settings.focusedRowBackground': false,
  'settings.sashBorder': false,
  'settings.settingsHeaderHoverForeground': false,
});
