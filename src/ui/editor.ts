import type { UIColor } from '../types.ts';

import { Foregrounds, ShellColors, UIColors, withAlpha } from '../colors.ts';

export const editor: UIColor = {
  'scrollbar.shadow': UIColors.Transparent,
  'scrollbarSlider.activeBackground': UIColors.BackgroundFocus,
  'scrollbarSlider.background': UIColors.BackgroundFocus,
  'scrollbarSlider.hoverBackground': UIColors.BackgroundHover,

  'badge.background': UIColors.Secondary,
  'badge.foreground': Foregrounds.OnSecondary,

  'activityBarBadge.background': UIColors.Secondary, // Activity notification badge background color.
  'activityBarBadge.foreground': Foregrounds.OnSecondary, // Activity notification badge foreground color.

  'editor.background': UIColors.Background, // Editor background color.
  'editor.foreground': UIColors.Foreground, // Editor default foreground color.

  'editorLineNumber.foreground': Foregrounds.Muted, // Color of editor line numbers.
  'editorLineNumber.activeForeground': UIColors.Foreground, // Color of the active editor line number.
  'editorLineNumber.dimmedForeground': Foregrounds.Muted, // Color of the final editor line when editor.renderFinalNewline is set to dimmed.
  'editorCursor.background': UIColors.Background, // The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
  'editorCursor.foreground': UIColors.Foreground, // Color of the editor cursor.

  'editorMultiCursor.primary.foreground': UIColors.Foreground, // Color of the primary editor cursor when multiple cursors are present.
  'editorMultiCursor.primary.background': UIColors.Background, // The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
  'editorMultiCursor.secondary.foreground': UIColors.Tertiary, // Color of secondary editor cursors when multiple cursors are present.
  'editorMultiCursor.secondary.background': Foregrounds.OnTertiary, // The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.

  'editor.placeholder.foreground': UIColors.BorderMuted, // Foreground color of the placeholder text in the editor.
  // 'editor.compositionBorder': UIColors.Danger, // The border color for an IME composition.
  'editor.selectionBackground': UIColors.BackgroundFocus, // Color of the editor selection.
  'editor.selectionForeground': UIColors.Foreground, // Color of the selected text for high contrast.

  'editor.inactiveSelectionBackground': UIColors.SelectionInactive, // Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
  'editor.selectionHighlightBackground': UIColors.SelectionInactive, // Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.

  'editor.selectionHighlightBorder': UIColors.Transparent, // Border color for regions with the same content as the selection.
  'editor.wordHighlightTextBackground': UIColors.SelectionInactive, // Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
  'editor.wordHighlightTextBorder': UIColors.Transparent, // Border color of a textual occurrence for a symbol.

  'editor.findMatchBackground': UIColors.BackgroundHover, // Color of the current search match.
  // 'editor.findMatchForeground': UIColors.Foreground, // Text color of the current search match.
  'editor.findMatchBorder': UIColors.Transparent, // Border color of the current search match.
  // 'editor.findMatchHighlightForeground': UIColors.Foreground, // Foreground color of the other search matches.
  'editor.findRangeHighlightBackground': UIColors.Foreground, // Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.
  'editor.findMatchHighlightBorder': UIColors.Transparent, // Border color of the other search matches.
  'editor.findMatchHighlightBackground': UIColors.SelectionFound, // Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.

  'editor.wordHighlightBackground': UIColors.Selection, // Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
  'editor.wordHighlightStrongBackground': UIColors.Selection, // Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
  'editor.wordHighlightStrongBorder': UIColors.Transparent, // Border color of a symbol during write-access, for example when writing to a variable.
  'editor.wordHighlightBorder': UIColors.Transparent, // Border color of a symbol during read-access, for example when reading a variable.

  'editor.findRangeHighlightBorder': UIColors.Transparent, // Border color the range limiting the search (Enable 'Find in Selection' in the find widget).
  'search.resultsInfoForeground': Foregrounds.Muted, // Color of the text in the search viewlet's completion message. For example, this color is used in the text that says "{x} results in {y} files".
  // 'searchEditor.findMatchBackground': UIColors.Transparent, // Color of the editor's results.
  // 'searchEditor.findMatchBorder': UIColors.Transparent, // Border color of the editor's results.
  'searchEditor.textInputBorder': UIColors.Border, // Search editor text input box border.
  'editor.hoverHighlightBackground': UIColors.BackgroundFocus, // Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.
  'editor.lineHighlightBackground': UIColors.BackgroundOverlay, // Background color for the highlight of line at the cursor position.
  'editor.lineHighlightBorder': UIColors.Transparent, // Background color for the border around the line at the cursor position.
  'editor.rangeHighlightBackground': UIColors.BackgroundOverlay, // Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
  'editor.rangeHighlightBorder': UIColors.Transparent, // Background color of the border around highlighted ranges.

  // 'editorWatermark.foreground': Foregrounds.Muted, // Foreground color for the labels in the editor watermark.
  'editorUnicodeHighlight.border': UIColors.Tertiary, // Border color used to highlight unicode characters.
  'editorUnicodeHighlight.background': UIColors.Transparent, // Background color used to highlight unicode characters.

  'editorLink.activeForeground': UIColors.Link, // Color of active links.
  'editor.symbolHighlightBackground': UIColors.Transparent, // Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
  'editor.symbolHighlightBorder': UIColors.TertiaryForeground, // Background color of the border around highlighted symbols.

  'editorWhitespace.foreground': UIColors.Selection, // Color of whitespace characters in the editor.

  'editorIndentGuide.background1': UIColors.Selection, // Color of the editor indentation guides (1).
  // 'editorIndentGuide.background2': UIColors.Selection, // Color of the editor indentation guides (2).
  // 'editorIndentGuide.background3': UIColors.Selection, // Color of the editor indentation guides (3).
  // 'editorIndentGuide.background4': UIColors.Selection, // Color of the editor indentation guides (4).
  // 'editorIndentGuide.background5': UIColors.Selection, // Color of the editor indentation guides (5).
  // 'editorIndentGuide.background6': UIColors.Selection, // Color of the editor indentation guides (6).

  'editorIndentGuide.activeBackground1': Foregrounds.Support, // Color of the active editor indentation guides (1).
  // 'editorIndentGuide.activeBackground2': Foregrounds.Support, // Color of the active editor indentation guides (2).
  // 'editorIndentGuide.activeBackground3': Foregrounds.Support, // Color of the active editor indentation guides (3).
  // 'editorIndentGuide.activeBackground4': Foregrounds.Support, // Color of the active editor indentation guides (4).
  // 'editorIndentGuide.activeBackground5': Foregrounds.Support, // Color of the editor indentation guides (5).
  // 'editorIndentGuide.activeBackground6': Foregrounds.Support, // Color of the editor indentation guides (6).

  'editorInlayHint.background': UIColors.Transparent, // Background color of inline hints.
  'editorInlayHint.foreground': Foregrounds.Muted, // Foreground color of inline hints.
  'editorInlayHint.typeForeground': withAlpha(Foregrounds.Magenta, 0.7), // Foreground color of inline hints for types
  'editorInlayHint.typeBackground': UIColors.Transparent, // Background color of inline hints for types
  'editorInlayHint.parameterForeground': Foregrounds.Muted, // Foreground color of inline hints for parameters
  'editorInlayHint.parameterBackground': UIColors.Transparent, // Background color of inline hints for parameters

  'editorRuler.foreground': UIColors.Border, // Color of the editor rulers.
  'editor.linkedEditingBackground': withAlpha(UIColors.Tertiary, 0.1), // Background color when the editor is in linked editing mode.

  'editorCodeLens.foreground': Foregrounds.Muted, // Foreground color of an editor CodeLens.
  'editorLightBulb.foreground': Foregrounds.Magenta, // The color used for the lightbulb actions icon.
  'editorLightBulbAutoFix.foreground': Foregrounds.Yellow, // The color used for the lightbulb auto fix actions icon.
  'editorLightBulbAi.foreground': Foregrounds.Magenta, // The color used for the lightbulb AI icon.
  'editorBracketMatch.background': withAlpha(UIColors.Tertiary, 0.1), // Background color behind matching brackets.
  'editorBracketMatch.border': UIColors.Transparent, // Color for matching brackets boxes

  // 'editorBracketPairGuide.activeBackground1': UIColors.Danger, // Background color of active bracket pair guides (1). Requires enabling bracket pair guides.
  // 'editorBracketPairGuide.activeBackground2': UIColors.Danger, // Background color of active bracket pair guides (2). Requires enabling bracket pair guides.
  // 'editorBracketPairGuide.activeBackground3': UIColors.Danger, // Background color of active bracket pair guides (3). Requires enabling bracket pair guides.
  // 'editorBracketPairGuide.activeBackground4': UIColors.Danger, // Background color of active bracket pair guides (4). Requires enabling bracket pair guides.
  // 'editorBracketPairGuide.activeBackground5': UIColors.Danger, // Background color of active bracket pair guides (5). Requires enabling bracket pair guides.
  // 'editorBracketPairGuide.activeBackground6': UIColors.Danger, // Background color of active bracket pair guides (6). Requires enabling bracket pair guides.
  // 'editorBracketPairGuide.background1': UIColors.Danger, // Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.
  // 'editorBracketPairGuide.background2': UIColors.Danger, // Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.
  // 'editorBracketPairGuide.background3': UIColors.Danger, // Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.
  // 'editorBracketPairGuide.background4': UIColors.Danger, // Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.
  // 'editorBracketPairGuide.background5': UIColors.Danger, // Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.
  // 'editorBracketPairGuide.background6': UIColors.Danger, // Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.

  'editor.foldBackground': UIColors.Transparent, // Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.
  'editor.foldPlaceholderForeground': Foregrounds.Muted, // Color of the collapsed text after the first line of a folded range.
  'editorOverviewRuler.background': UIColors.BackgroundOverlay, // Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor.
  'editorOverviewRuler.border': UIColors.Border, // Color of the overview ruler border.
  'editorOverviewRuler.findMatchForeground': withAlpha(
    UIColors.Foreground,
    0.5,
  ), // Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
  'editorOverviewRuler.rangeHighlightForeground': UIColors.BackgroundFocus, // Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
  // 'editorOverviewRuler.selectionHighlightForeground': UIColors.Danger, // Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
  'editorOverviewRuler.wordHighlightForeground': UIColors.SelectionFound, // Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
  'editorOverviewRuler.wordHighlightStrongForeground': UIColors.Info, // Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
  // 'editorOverviewRuler.wordHighlightTextForeground': UIColors.Danger, // Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
  'editorOverviewRuler.errorForeground': UIColors.Danger, // Overview ruler marker color for errors.
  'editorOverviewRuler.warningForeground': UIColors.Warning, // Overview ruler marker color for warnings.
  'editorOverviewRuler.infoForeground': UIColors.Info, // Overview ruler marker color for infos.
  'editorOverviewRuler.bracketMatchForeground': withAlpha(
    UIColors.Foreground,
    0.5,
  ), // Overview ruler marker color for matching brackets.
  'editorError.foreground': UIColors.Danger, // Foreground color of error squiggles in the editor.
  'editorError.border': UIColors.Transparent, // Border color of error boxes in the editor.
  'editorError.background': UIColors.Transparent, // Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.

  'editorWarning.foreground': UIColors.Warning, // Foreground color of warning squiggles in the editor.
  'editorWarning.border': UIColors.Transparent, // Border color of warning boxes in the editor.
  'editorWarning.background': UIColors.Transparent, // Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.

  'editorInfo.foreground': UIColors.Info, // Foreground color of info squiggles in the editor.
  'editorInfo.border': UIColors.Transparent, // Border color of info boxes in the editor.
  'editorInfo.background': UIColors.Transparent, // Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.

  // 'editorHint.foreground': UIColors.Tertiary, // TODO: Foreground color of hints in the editor.
  'editorHint.border': UIColors.Transparent, // Border color of hint boxes in the editor.

  'problemsErrorIcon.foreground': UIColors.Danger, // The color used for the problems error icon.
  'problemsWarningIcon.foreground': UIColors.Warning, // The color used for the problems warning icon.
  'problemsInfoIcon.foreground': UIColors.Info, // The color used for the problems info icon.

  'editorUnnecessaryCode.border': UIColors.Transparent, // Border color of unnecessary (unused) source code in the editor.
  'editorUnnecessaryCode.opacity': withAlpha(UIColors.Background, 0.6), // Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity. For high contrast themes, use the "editorUnnecessaryCode.border" theme color to underline unnecessary code instead of fading it out.
  'editorGutter.background': UIColors.Transparent, // Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.

  'editorGutter.foldingControlForeground': Foregrounds.Support, // Color of the folding control in the editor gutter.
  'editorGutter.itemGlyphForeground': Foregrounds.Support, // Editor gutter decoration color for gutter item glyphs.
  'editorGutter.itemBackground': UIColors.Transparent, // Editor gutter decoration color for gutter item background. This color should be opaque.

  'editorCommentsWidget.resolvedBorder': UIColors.Border, // Color of borders and arrow for resolved comments.
  'editorCommentsWidget.unresolvedBorder': UIColors.Primary, // Color of borders and arrow for unresolved comments.
  'editorCommentsWidget.rangeBackground': UIColors.SelectionFound, // Color of background for comment ranges.
  'editorCommentsWidget.rangeActiveBackground': UIColors.Transparent, // Color of background for currently selected or hovered comment range.
  'editorCommentsWidget.replyInputBackground': UIColors.BackgroundFocus, // Background color for comment reply input box.

  'inlineEdit.gutterIndicator.primaryBorder': UIColors.Transparent, // Border color for the primary inline edit gutter indicator.
  'inlineEdit.gutterIndicator.primaryForeground': Foregrounds.OnTertiary, // Foreground color for the primary inline edit gutter indicator.
  'inlineEdit.gutterIndicator.primaryBackground': UIColors.Tertiary, // Background color for the primary inline edit gutter indicator.
  'inlineEdit.gutterIndicator.secondaryBorder': UIColors.Transparent, // Border color for the secondary inline edit gutter indicator.
  'inlineEdit.gutterIndicator.secondaryForeground': Foregrounds.OnSecondary, // Foreground color for the secondary inline edit gutter indicator.
  'inlineEdit.gutterIndicator.secondaryBackground': UIColors.Secondary, // Background color for the secondary inline edit gutter indicator.
  'inlineEdit.gutterIndicator.successfulBorder': UIColors.Transparent, // Border color for the successful inline edit gutter indicator.
  'inlineEdit.gutterIndicator.successfulForeground': Foregrounds.OnSecondary, // Foreground color for the successful inline edit gutter indicator.
  'inlineEdit.gutterIndicator.successfulBackground': UIColors.Success, // Background color for the successful inline edit gutter indicator.
  'inlineEdit.gutterIndicator.background': UIColors.Selection, // Background color for the inline edit gutter indicator.

  'inlineEdit.originalBackground': UIColors.Selection, // Background color for the original text in inline edits.
  'inlineEdit.modifiedBackground': withAlpha(UIColors.Danger, 0.5), // Background color for the modified text in inline edits.
  // 'inlineEdit.originalChangedLineBackground': UIColors.Danger, // Background color for the changed lines in the original text of inline edits.
  'inlineEdit.originalChangedTextBackground': withAlpha(UIColors.Danger, 0.3), // Overlay color for the changed text in the original text of inline edits.
  'inlineEdit.modifiedChangedLineBackground': withAlpha(UIColors.Success, 0.3), // Background color for the changed lines in the modified text of inline edits.
  'inlineEdit.modifiedChangedTextBackground': withAlpha(UIColors.Success, 0.3), // Overlay color for the changed text in the modified text of inline edits.
  'inlineEdit.originalBorder': UIColors.Transparent, // Border color for the original text in inline edits.
  'inlineEdit.modifiedBorder': UIColors.Transparent, // Border color for the modified text in inline edits.
  'inlineEdit.tabWillAcceptModifiedBorder': UIColors.Success, // Modified border color for the inline edits widget when tab will accept it.
  'inlineEdit.tabWillAcceptOriginalBorder': UIColors.Border, // Original border color for the inline edits widget over the original text when tab will accept it.
};
