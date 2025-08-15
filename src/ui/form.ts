import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const form: UIColor = {
  'button.background': UIColors.Primary,
  'button.foreground': Foregrounds.OnPrimary,
  'button.hoverBackground': UIColors.PrimaryHover,

  'button.secondaryForeground': UIColors.SecondaryForeground,
  'button.secondaryBackground': UIColors.Secondary,
  'button.secondaryHoverBackground': UIColors.SecondaryHover,

  'checkbox.background': UIColors.BackgroundFocus,
  'checkbox.foreground': UIColors.Primary,
  'checkbox.disabled.background': UIColors.BackgroundHover,
  'checkbox.disabled.foreground': Foregrounds.Muted,
  'checkbox.border': UIColors.Transparent,
  'checkbox.selectBackground': UIColors.BackgroundHover,
  'checkbox.selectBorder': UIColors.Border,

  'radio.activeForeground': UIColors.Primary,
  'radio.activeBackground': UIColors.BackgroundFocus,
  'radio.activeBorder': UIColors.Transparent,
  'radio.inactiveForeground': Foregrounds.Muted,
  'radio.inactiveBackground': UIColors.BackgroundHover,
  'radio.inactiveBorder': UIColors.Transparent,
  'radio.inactiveHoverBackground': UIColors.BackgroundHover,

  'dropdown.background': UIColors.BackgroundElevated,
  'dropdown.listBackground': UIColors.BackgroundElevated,
  'dropdown.border': UIColors.Transparent,
  'dropdown.foreground': Foregrounds.Neutral,

  'input.background': UIColors.BackgroundFocus,
  'input.border': UIColors.Transparent,
  'input.foreground': Foregrounds.Neutral,
  'input.placeholderForeground': Foregrounds.Muted,

  'inputOption.activeBackground': UIColors.BackgroundFocus,
  'inputOption.activeBorder': UIColors.Transparent,
  'inputOption.activeForeground': Foregrounds.Neutral,
  'inputOption.hoverBackground': UIColors.BackgroundHover,

  'inputValidation.errorBackground': UIColors.BackgroundElevated,
  'inputValidation.errorForeground': UIColors.Danger,
  'inputValidation.errorBorder': UIColors.Danger,

  'inputValidation.infoBackground': UIColors.BackgroundElevated,
  'inputValidation.infoForeground': UIColors.Info,
  'inputValidation.infoBorder': UIColors.Info,

  'inputValidation.warningBackground': UIColors.BackgroundElevated,
  'inputValidation.warningForeground': UIColors.Warning,
  'inputValidation.warningBorder': UIColors.Warning,

  'progressBar.background': UIColors.Primary,

  'pickerGroup.border': false,
  'pickerGroup.foreground': false,
  'quickInput.background': false,
  'quickInput.foreground': false,
  'quickInputList.focusBackground': false,
  'quickInputList.focusForeground': false,
  'quickInputList.focusIconForeground': false,
  'quickInputTitle.background': false,
};
