import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const notebook = (colors: UIColors): VSCodeTokens => ({
  'notebook.editorBackground': false,
  'notebook.cellBorderColor': colors.border.muted,
  'notebook.cellHoverBackground': colors.background.hover,
  'notebook.cellInsertionIndicator': colors.unknown,
  'notebook.cellStatusBarItemHoverBackground': colors.unknown,
  'notebook.cellToolbarSeparator': colors.border.default,
  'notebook.cellEditorBackground': colors.background.default,
  'notebook.focusedCellBackground': colors.background.focus,
  'notebook.focusedCellBorder': colors.primary.foreground,
  'notebook.focusedEditorBorder': colors.border.invert,
  'notebook.inactiveFocusedCellBorder': colors.border.muted,
  'notebook.inactiveSelectedCellBorder': colors.unknown,
  'notebook.outputContainerBackgroundColor': colors.background.focus,
  'notebook.outputContainerBorderColor': colors.unknown,
  'notebook.selectedCellBackground': colors.unknown,
  'notebook.selectedCellBorder': colors.unknown,
  'notebook.symbolHighlightBackground': colors.unknown,
  'notebookScrollbarSlider.activeBackground': false,
  'notebookScrollbarSlider.background': false,
  'notebookScrollbarSlider.hoverBackground': false,
  'notebookStatusErrorIcon.foreground': false,
  'notebookStatusRunningIcon.foreground': false,
  'notebookStatusSuccessIcon.foreground': false,
  'notebookEditorOverviewRuler.runningCellForeground': false,
});
