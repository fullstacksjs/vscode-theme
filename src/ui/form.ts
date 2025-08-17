import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const form = (colors: UIColors): VSCodeTokens => ({
  'button.background': colors.primary.foreground,
  'button.foreground': colors.primary.onForeground,
  'button.hoverBackground': colors.primary.hover,

  'button.secondaryForeground': colors.secondary.onForeground,
  'button.secondaryBackground': colors.secondary.foreground,
  'button.secondaryHoverBackground': colors.secondary.hover,

  'checkbox.background': colors.background.focus,
  'checkbox.foreground': colors.primary.foreground,
  'checkbox.disabled.background': colors.background.hover,
  'checkbox.disabled.foreground': colors.foreground.muted,
  'checkbox.border': colors.transparent,
  'checkbox.selectBackground': colors.background.hover,
  'checkbox.selectBorder': colors.border.default,

  'radio.activeForeground': colors.primary.foreground,
  'radio.activeBackground': colors.background.focus,
  'radio.activeBorder': colors.transparent,
  'radio.inactiveForeground': colors.foreground.muted,
  'radio.inactiveBackground': colors.background.hover,
  'radio.inactiveBorder': colors.transparent,
  'radio.inactiveHoverBackground': colors.background.hover,

  'dropdown.background': colors.background.elevated,
  'dropdown.listBackground': colors.background.elevated,
  'dropdown.border': colors.transparent,
  'dropdown.foreground': colors.foreground.default,

  'input.background': colors.background.focus,
  'input.border': colors.transparent,
  'input.foreground': colors.foreground.default,
  'input.placeholderForeground': colors.foreground.muted,

  'inputOption.activeBackground': colors.background.focus,
  'inputOption.activeBorder': colors.transparent,
  'inputOption.activeForeground': colors.foreground.default,
  'inputOption.hoverBackground': colors.background.hover,

  'inputValidation.errorBackground': colors.background.elevated,
  'inputValidation.errorForeground': colors.danger.foreground,
  'inputValidation.errorBorder': colors.danger.foreground,

  'inputValidation.infoBackground': colors.background.elevated,
  'inputValidation.infoForeground': colors.info.foreground,
  'inputValidation.infoBorder': colors.info.foreground,

  'inputValidation.warningBackground': colors.background.elevated,
  'inputValidation.warningForeground': colors.warning.foreground,
  'inputValidation.warningBorder': colors.warning.foreground,

  'progressBar.background': colors.primary.foreground,

  'pickerGroup.border': false,
  'pickerGroup.foreground': false,
  'quickInput.background': false,
  'quickInput.foreground': false,
  'quickInputList.focusBackground': false,
  'quickInputList.focusForeground': false,
  'quickInputList.focusIconForeground': false,
  'quickInputTitle.background': false,
});
