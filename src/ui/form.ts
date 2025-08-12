import { Foregrounds, UIColors } from '../colors.ts';

export const form = {
  'button.background': UIColors.Primary, // Button background color.
  'button.foreground': Foregrounds.OnPrimary, // Button foreground color.
  'button.hoverBackground': UIColors.PrimaryHover, // Button background color when hovering.

  'button.secondaryForeground': UIColors.SecondaryForeground, // Secondary button foreground color.
  'button.secondaryBackground': UIColors.Secondary, // Secondary button background color.
  'button.secondaryHoverBackground': UIColors.SecondaryHover, // Secondary button background color when hovering.

  'checkbox.background': UIColors.BackgroundFocus, // Background color of checkbox widget.
  'checkbox.foreground': UIColors.Primary, // Foreground color of checkbox widget.
  'checkbox.disabled.background': UIColors.BackgroundHover, // Background of a disabled checkbox.
  'checkbox.disabled.foreground': Foregrounds.Muted, // Foreground of a disabled checkbox.
  'checkbox.border': UIColors.Transparent, // Border color of checkbox widget.
  'checkbox.selectBackground': UIColors.Primary, // Background color of checkbox widget when the element it's in is selected.
  'checkbox.selectBorder': Foregrounds.OnPrimary, // Border color of checkbox widget when the element it's in is selected.

  'radio.activeForeground': UIColors.Primary, // Foreground color of active radio option.
  'radio.activeBackground': UIColors.BackgroundFocus, // Background color of active radio option.
  'radio.activeBorder': UIColors.Transparent, // Border color of the active radio option.
  'radio.inactiveForeground': Foregrounds.Muted, // Foreground color of inactive radio option.
  'radio.inactiveBackground': UIColors.BackgroundHover, // Background color of inactive radio option.
  'radio.inactiveBorder': UIColors.Transparent, // Border color of the inactive radio option.
  'radio.inactiveHoverBackground': UIColors.BackgroundHover, // Background color of inactive active radio option when hovering.
};
