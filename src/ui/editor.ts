import type { Palette, UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

import { withAlpha } from '../utils.ts';

export const editor = (colors: UIColors, palette: Palette): VSCodeTokens => ({
  'scrollbar.shadow': colors.transparent,
  'scrollbarSlider.activeBackground': colors.background.focus,
  'scrollbarSlider.background': colors.background.focus,
  'scrollbarSlider.hoverBackground': colors.background.hover,

  'badge.background': colors.secondary.foreground,
  'badge.foreground': colors.secondary.onForeground,

  'activityBarBadge.background': colors.secondary.foreground,
  'activityBarBadge.foreground': colors.secondary.onForeground,

  'editor.background': colors.background.default,
  'editor.foreground': colors.foreground.default,

  'editorLineNumber.foreground': colors.foreground.muted,
  'editorLineNumber.activeForeground': colors.foreground.default,
  'editorLineNumber.dimmedForeground': colors.foreground.muted,
  'editorCursor.background': colors.background.default,
  'editorCursor.foreground': colors.foreground.default,

  'editorMultiCursor.primary.foreground': colors.foreground.default,
  'editorMultiCursor.primary.background': colors.background.default,
  'editorMultiCursor.secondary.foreground': colors.tertiary.foreground,
  'editorMultiCursor.secondary.background': colors.tertiary.onForeground,

  'editor.placeholder.foreground': colors.border.muted,
  'editor.compositionBorder': false,
  'editor.selectionBackground': colors.background.focus,
  'editor.selectionForeground': colors.foreground.default,

  'editor.inactiveSelectionBackground': colors.selection.inactive,
  'editor.selectionHighlightBackground': colors.selection.inactive,

  'editor.selectionHighlightBorder': colors.transparent,
  'editor.wordHighlightTextBackground': colors.selection.inactive,
  'editor.wordHighlightTextBorder': colors.transparent,

  'editor.findMatchBackground': colors.background.hover,
  'editor.findMatchForeground': false,
  'editor.findMatchBorder': colors.transparent,
  'editor.findMatchHighlightForeground': false,
  'editor.findRangeHighlightBackground': colors.foreground.default,
  'editor.findMatchHighlightBorder': colors.transparent,
  'editor.findMatchHighlightBackground': colors.selection.found,

  'editor.wordHighlightBackground': colors.selection.default,
  'editor.wordHighlightStrongBackground': colors.selection.default,
  'editor.wordHighlightStrongBorder': colors.transparent,
  'editor.wordHighlightBorder': colors.transparent,

  'editor.findRangeHighlightBorder': colors.transparent,
  'search.resultsInfoForeground': colors.foreground.muted,
  'searchEditor.findMatchBackground': false,
  'searchEditor.findMatchBorder': false,
  'searchEditor.textInputBorder': colors.border.default,
  'editor.hoverHighlightBackground': colors.background.focus,
  'editor.lineHighlightBackground': colors.background.overlay,
  'editor.lineHighlightBorder': colors.transparent,
  'editor.rangeHighlightBackground': colors.background.overlay,
  'editor.rangeHighlightBorder': colors.transparent,

  'editorWatermark.foreground': false,
  'editorUnicodeHighlight.border': colors.tertiary.foreground,
  'editorUnicodeHighlight.background': colors.transparent,

  'editorLink.activeForeground': colors.link.default,
  'editor.symbolHighlightBackground': colors.transparent,
  'editor.symbolHighlightBorder': colors.tertiary.foreground,

  'editorWhitespace.foreground': colors.selection.default,

  'editorIndentGuide.background1': colors.selection.default,
  'editorIndentGuide.background2': false,
  'editorIndentGuide.background3': false,
  'editorIndentGuide.background4': false,
  'editorIndentGuide.background5': false,
  'editorIndentGuide.background6': false,

  'editorIndentGuide.activeBackground1': colors.foreground.support,
  'editorIndentGuide.activeBackground2': false,
  'editorIndentGuide.activeBackground3': false,
  'editorIndentGuide.activeBackground4': false,
  'editorIndentGuide.activeBackground5': false,
  'editorIndentGuide.activeBackground6': false,

  'editorInlayHint.background': colors.transparent,
  'editorInlayHint.foreground': colors.foreground.muted,
  'editorInlayHint.typeForeground': withAlpha(palette.magenta, 0.7),
  'editorInlayHint.typeBackground': colors.transparent,
  'editorInlayHint.parameterForeground': colors.foreground.muted,
  'editorInlayHint.parameterBackground': colors.transparent,

  'editorRuler.foreground': colors.border.default,
  'editor.linkedEditingBackground': withAlpha(colors.tertiary.foreground, 0.1),

  'editorCodeLens.foreground': colors.foreground.muted,
  'editorLightBulb.foreground': palette.magenta,
  'editorLightBulbAutoFix.foreground': palette.yellow,
  'editorLightBulbAi.foreground': palette.magenta,
  'editorBracketMatch.background': withAlpha(colors.tertiary.foreground, 0.1),
  'editorBracketMatch.border': colors.transparent,

  'editorBracketPairGuide.activeBackground1': false,
  'editorBracketPairGuide.activeBackground2': false,
  'editorBracketPairGuide.activeBackground3': false,
  'editorBracketPairGuide.activeBackground4': false,
  'editorBracketPairGuide.activeBackground5': false,
  'editorBracketPairGuide.activeBackground6': false,
  'editorBracketPairGuide.background1': false,
  'editorBracketPairGuide.background2': false,
  'editorBracketPairGuide.background3': false,
  'editorBracketPairGuide.background4': false,
  'editorBracketPairGuide.background5': false,
  'editorBracketPairGuide.background6': false,

  'editor.foldBackground': colors.transparent,
  'editor.foldPlaceholderForeground': colors.foreground.muted,
  'editorOverviewRuler.background': colors.background.overlay,
  'editorOverviewRuler.border': colors.border.default,
  'editorOverviewRuler.findMatchForeground': withAlpha(
    colors.foreground.default,
    0.5,
  ),
  'editorOverviewRuler.rangeHighlightForeground': colors.background.focus,
  'editorOverviewRuler.selectionHighlightForeground': false,
  'editorOverviewRuler.wordHighlightForeground': colors.selection.found,
  'editorOverviewRuler.wordHighlightStrongForeground': colors.info.foreground,
  'editorOverviewRuler.wordHighlightTextForeground': false,
  'editorOverviewRuler.errorForeground': colors.danger.foreground,
  'editorOverviewRuler.warningForeground': colors.warning.foreground,
  'editorOverviewRuler.infoForeground': colors.info.foreground,
  'editorOverviewRuler.bracketMatchForeground': withAlpha(
    colors.foreground.default,
    0.5,
  ),
  'editorError.foreground': colors.danger.foreground,
  'editorError.border': colors.transparent,
  'editorError.background': colors.transparent,

  'editorWarning.foreground': colors.warning.foreground,
  'editorWarning.border': colors.transparent,
  'editorWarning.background': colors.transparent,

  'editorInfo.foreground': colors.info.foreground,
  'editorInfo.border': colors.transparent,
  'editorInfo.background': colors.transparent,

  'editorHint.foreground': colors.unknown,
  'editorHint.border': colors.transparent,

  'problemsErrorIcon.foreground': colors.danger.foreground,
  'problemsWarningIcon.foreground': colors.warning.foreground,
  'problemsInfoIcon.foreground': colors.info.foreground,

  'editorUnnecessaryCode.border': colors.transparent,
  'editorUnnecessaryCode.opacity': withAlpha(colors.background.default, 0.6),
  'editorGutter.background': colors.transparent,

  'editorGutter.foldingControlForeground': colors.foreground.support,
  'editorGutter.itemGlyphForeground': colors.foreground.support,
  'editorGutter.itemBackground': colors.transparent,

  'editorCommentsWidget.resolvedBorder': colors.border.default,
  'editorCommentsWidget.unresolvedBorder': colors.primary.foreground,
  'editorCommentsWidget.rangeBackground': colors.selection.found,
  'editorCommentsWidget.rangeActiveBackground': colors.transparent,
  'editorCommentsWidget.replyInputBackground': colors.background.focus,

  'inlineEdit.gutterIndicator.primaryBorder': colors.transparent,
  'inlineEdit.gutterIndicator.primaryForeground': colors.tertiary.onForeground,
  'inlineEdit.gutterIndicator.primaryBackground': colors.tertiary.foreground,
  'inlineEdit.gutterIndicator.secondaryBorder': colors.transparent,
  'inlineEdit.gutterIndicator.secondaryForeground':
    colors.secondary.onForeground,
  'inlineEdit.gutterIndicator.secondaryBackground': colors.secondary.foreground,
  'inlineEdit.gutterIndicator.successfulBorder': colors.transparent,
  'inlineEdit.gutterIndicator.successfulForeground':
    colors.success.onForeground,
  'inlineEdit.gutterIndicator.successfulBackground': colors.success.foreground,
  'inlineEdit.gutterIndicator.background': colors.selection.default,

  'inlineEdit.originalBackground': colors.selection.default,
  'inlineEdit.modifiedBackground': withAlpha(colors.danger.foreground, 0.5),
  'inlineEdit.originalChangedLineBackground': false,
  'inlineEdit.originalChangedTextBackground': withAlpha(
    colors.danger.foreground,
    0.3,
  ),
  'inlineEdit.modifiedChangedLineBackground': withAlpha(
    colors.success.foreground,
    0.3,
  ),
  'inlineEdit.modifiedChangedTextBackground': withAlpha(
    colors.success.foreground,
    0.3,
  ),
  'inlineEdit.originalBorder': colors.transparent,
  'inlineEdit.modifiedBorder': colors.transparent,
  'inlineEdit.tabWillAcceptModifiedBorder': colors.success.foreground,
  'inlineEdit.tabWillAcceptOriginalBorder': colors.border.default,
});
