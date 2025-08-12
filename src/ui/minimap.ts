import type { UIColor } from '../types.ts';

import { UIColors } from '../colors.ts';

export const minimap: UIColor = {
  'minimap.findMatchHighlight': UIColors.BackgroundHover, // Highlight color for matches from search within files.
  'minimap.selectionHighlight': UIColors.Selection, // Highlight color for the editor selection.
  'minimap.errorHighlight': UIColors.Danger, // Highlight color for errors within the editor.
  'minimap.warningHighlight': UIColors.Warning, // Highlight color for warnings within the editor.
  'minimap.background': UIColors.BackgroundElevated, // Minimap background color.
  'minimap.selectionOccurrenceHighlight': UIColors.BackgroundHover, // Minimap marker color for repeating editor selections.
  'minimap.foregroundOpacity': '#000000aa', // Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.
  'minimap.infoHighlight': UIColors.Info, // Minimap marker color for infos.
  'minimap.chatEditHighlight': UIColors.BackgroundFocus, // Color of pending edit regions in the minimap.

  'minimapSlider.background': UIColors.BackgroundOverlay, // Minimap slider background color.
  'minimapSlider.hoverBackground': UIColors.BackgroundHover, // Minimap slider background color when hovering.
  'minimapSlider.activeBackground': UIColors.BackgroundFocus, // Minimap slider background color when clicked on.
};
