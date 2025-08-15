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
  'checkbox.selectBackground': UIColors.BackgroundHover, // Background color of checkbox widget when the element it's in is selected.
  'checkbox.selectBorder': UIColors.Border, // Border color of checkbox widget when the element it's in is selected.

  'radio.activeForeground': UIColors.Primary, // Foreground color of active radio option.
  'radio.activeBackground': UIColors.BackgroundFocus, // Background color of active radio option.
  'radio.activeBorder': UIColors.Transparent, // Border color of the active radio option.
  'radio.inactiveForeground': Foregrounds.Muted, // Foreground color of inactive radio option.
  'radio.inactiveBackground': UIColors.BackgroundHover, // Background color of inactive radio option.
  'radio.inactiveBorder': UIColors.Transparent, // Border color of the inactive radio option.
  'radio.inactiveHoverBackground': UIColors.BackgroundHover, // Background color of inactive active radio option when hovering.

  'dropdown.background': UIColors.BackgroundElevated, // Dropdown background.
  'dropdown.listBackground': UIColors.BackgroundElevated, // Dropdown list background.
  'dropdown.border': UIColors.Transparent, // Dropdown border.
  'dropdown.foreground': Foregrounds.Neutral, // Dropdown foreground.

  'input.background': UIColors.BackgroundFocus, // Input box background.
  'input.border': UIColors.Transparent, // Input box border.
  'input.foreground': Foregrounds.Neutral, // Input box foreground.
  'input.placeholderForeground': Foregrounds.Muted, // Input box foreground color for placeholder text.

  'inputOption.activeBackground': UIColors.BackgroundFocus, // Background color of activated options in input fields.
  'inputOption.activeBorder': UIColors.Transparent, // Border color of activated options in input fields.
  'inputOption.activeForeground': Foregrounds.Neutral, // Foreground color of activated options in input fields.
  'inputOption.hoverBackground': UIColors.BackgroundHover, // Background color of activated options in input fields.

  'inputValidation.errorBackground': UIColors.BackgroundElevated, // Input validation background color for error severity.
  'inputValidation.errorForeground': UIColors.Danger, // Input validation foreground color for error severity.
  'inputValidation.errorBorder': UIColors.Danger, // Input validation border color for error severity.

  'inputValidation.infoBackground': UIColors.BackgroundElevated, // Input validation background color for information severity.
  'inputValidation.infoForeground': UIColors.Info, // Input validation foreground color for information severity.
  'inputValidation.infoBorder': UIColors.Info, // Input validation border color for information severity.

  'inputValidation.warningBackground': UIColors.BackgroundElevated, // Input validation background color for information warning.
  'inputValidation.warningForeground': UIColors.Warning, // Input validation foreground color for warning severity.
  'inputValidation.warningBorder': UIColors.Warning, // Input validation border color for warning severity.

  'progressBar.background': UIColors.Primary, // Background color of the progress bar shown for long running operations.

  // 'pickerGroup.border': '', // Quick picker (Quick Open) color for grouping borders.
  // 'pickerGroup.foreground': '', // Quick picker (Quick Open) color for grouping labels.
  // 'quickInput.background': '', // Quick input background color. The quick input widget is the container for views like the color theme picker.
  // 'quickInput.foreground': '', // Quick input foreground color. The quick input widget is the container for views like the color theme picker.
  // 'quickInputList.focusBackground': '', // Quick picker background color for the focused item.
  // 'quickInputList.focusForeground': '', // Quick picker foreground color for the focused item.
  // 'quickInputList.focusIconForeground': '', // Quick picker icon foreground color for the focused item.
  // 'quickInputTitle.background': '', // Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette
};
