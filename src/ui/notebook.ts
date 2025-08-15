import type { UIColor } from './UIColor.ts';

import { UIColors } from '../colors.ts';

export const notebook: UIColor = {
  'notebook.editorBackground': false,
  'notebook.cellBorderColor': UIColors.Border,
  'notebook.cellHoverBackground': UIColors.BackgroundHover,
  'notebook.cellInsertionIndicator': UIColors.Unknown,
  'notebook.cellStatusBarItemHoverBackground': UIColors.Unknown,
  'notebook.cellToolbarSeparator': UIColors.Border,
  'notebook.cellEditorBackground': UIColors.BackgroundFocus,
  'notebook.focusedCellBackground': UIColors.BackgroundFocus,
  'notebook.focusedCellBorder': UIColors.Primary,
  'notebook.focusedEditorBorder': UIColors.Border,
  'notebook.inactiveFocusedCellBorder': UIColors.BorderMuted,
  'notebook.inactiveSelectedCellBorder': UIColors.Unknown,
  'notebook.outputContainerBackgroundColor': UIColors.BackgroundFocus,
  'notebook.outputContainerBorderColor': UIColors.Unknown,
  'notebook.selectedCellBackground': UIColors.Unknown,
  'notebook.selectedCellBorder': UIColors.Unknown,
  'notebook.symbolHighlightBackground': UIColors.Unknown,
  'notebookScrollbarSlider.activeBackground': false,
  'notebookScrollbarSlider.background': false,
  'notebookScrollbarSlider.hoverBackground': false,
  'notebookStatusErrorIcon.foreground': false,
  'notebookStatusRunningIcon.foreground': false,
  'notebookStatusSuccessIcon.foreground': false,
  'notebookEditorOverviewRuler.runningCellForeground': false,
};
