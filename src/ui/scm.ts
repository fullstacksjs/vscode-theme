import type { UIColor } from './UIColor.ts';

import { Foregrounds, ShellColors, UIColors } from '../colors.ts';

const added = Foregrounds.Green;
const modified = Foregrounds.Orange;
const deleted = Foregrounds.Red;

export const scm: UIColor = {
  'gitDecoration.deletedResourceForeground': deleted,
  'gitDecoration.stageDeletedResourceForeground': deleted,
  'editorGutter.deletedBackground': deleted,
  'minimapGutter.deletedBackground': deleted,
  'editorGutter.deletedSecondaryBackground': deleted,

  'gitDecoration.modifiedResourceForeground': modified,
  'gitDecoration.stageModifiedResourceForeground': modified,
  'editorGutter.modifiedBackground': modified,
  'minimapGutter.modifiedBackground': modified,
  'editorGutter.modifiedSecondaryBackground': modified,

  'gitDecoration.untrackedResourceForeground': added,
  'gitDecoration.addedResourceForeground': added,
  'editorGutter.addedBackground': added,
  'minimapGutter.addedBackground': added,
  'editorGutter.addedSecondaryBackground': added,

  'gitDecoration.submoduleResourceForeground': Foregrounds.Blue,
  'gitDecoration.conflictingResourceForeground': Foregrounds.Magenta,
  'gitDecoration.ignoredResourceForeground': Foregrounds.Muted,

  'editorOverviewRuler.modifiedForeground': modified,
  'editorOverviewRuler.addedForeground': added,
  'editorOverviewRuler.deletedForeground': deleted,

  'editorOverviewRuler.inlineChatInserted': added, // Overview ruler marker color for inline chat inserted content.
  'editorOverviewRuler.inlineChatRemoved': deleted, // Overview ruler marker color for inline chat removed content.

  'editorGutter.commentRangeForeground': UIColors.Border,
  'editorGutter.commentGlyphForeground': UIColors.Foreground,
  'editorGutter.commentUnresolvedGlyphForeground': UIColors.Tertiary,

  'diffEditor.insertedTextBackground': UIColors.BackgroundSuccess,
  'diffEditor.insertedTextBorder': UIColors.Transparent,
  'diffEditor.removedTextBackground': UIColors.BackgroundDanger,
  'diffEditor.removedTextBorder': UIColors.Transparent,
  'diffEditor.border': UIColors.Transparent,
  'diffEditor.diagonalFill': UIColors.Selection,
  'diffEditor.insertedLineBackground': UIColors.BackgroundSuccess,
  'diffEditor.removedLineBackground': UIColors.BackgroundDanger,
  'diffEditorGutter.insertedLineBackground': UIColors.BackgroundSuccess,
  'diffEditorGutter.removedLineBackground': UIColors.BackgroundDanger,
  'diffEditorOverview.insertedForeground': UIColors.Success,
  'diffEditorOverview.removedForeground': UIColors.Danger,

  'diffEditor.unchangedRegionBackground': UIColors.BackgroundFocus,
  'diffEditor.unchangedRegionForeground': UIColors.Foreground,
  'diffEditor.unchangedCodeBackground': UIColors.Unknown,
  'diffEditor.unchangedRegionShadow': UIColors.Transparent,
  'diffEditor.move.border': UIColors.Border,
  'diffEditor.moveActive.border': UIColors.Unknown,
  'multiDiffEditor.headerBackground': UIColors.Background,
  'multiDiffEditor.background': UIColors.Background,
  'multiDiffEditor.border': UIColors.Border,

  'merge.currentHeaderBackground': UIColors.BackgroundTertiaryFocus,
  'merge.currentContentBackground': UIColors.BackgroundTertiary,
  'merge.incomingHeaderBackground': UIColors.BackgroundInfoFocus,
  'merge.incomingContentBackground': UIColors.BackgroundInfo,
  'merge.border': UIColors.Transparent,
  'merge.commonContentBackground': UIColors.Selection,
  'merge.commonHeaderBackground': UIColors.SelectionFocus,
  'editorOverviewRuler.currentContentForeground': false,
  'editorOverviewRuler.incomingContentForeground': false,
  'editorOverviewRuler.commonContentForeground': false,
  'editorOverviewRuler.commentForeground': false,
  'editorOverviewRuler.commentUnresolvedForeground': false,

  'mergeEditor.change.background': UIColors.BackgroundSuccess,
  'mergeEditor.change.word.background': UIColors.BackgroundSuccess,
  'mergeEditor.conflict.unhandledUnfocused.border': UIColors.Danger,
  'mergeEditor.conflict.unhandledFocused.border': UIColors.Danger,
  'mergeEditor.conflict.handledUnfocused.border': UIColors.BackgroundSuccess,
  'mergeEditor.conflict.handledFocused.border': UIColors.Success,
  'mergeEditor.conflict.handled.minimapOverViewRuler': UIColors.Success,
  'mergeEditor.conflict.unhandled.minimapOverViewRuler': UIColors.Danger,
  'mergeEditor.conflictingLines.background': UIColors.Unknown,
  'mergeEditor.changeBase.background': UIColors.Unknown,
  'mergeEditor.changeBase.word.background': UIColors.Unknown,
  'mergeEditor.conflict.input1.background': UIColors.Unknown,
  'mergeEditor.conflict.input2.background': UIColors.Unknown,

  'scmGraph.historyItemRefColor': Foregrounds.Green,
  'scmGraph.historyItemRemoteRefColor': Foregrounds.Magenta,
  'scmGraph.foreground1': ShellColors.BrightBlue,
  'scmGraph.foreground2': ShellColors.BrightGreen,
  'scmGraph.foreground3': ShellColors.BrightYellow,
  'scmGraph.foreground4': ShellColors.BrightRed,
  'scmGraph.foreground5': ShellColors.BrightCyan,
  'scmGraph.historyItemHoverLabelForeground': UIColors.Unknown,
  'scmGraph.historyItemHoverAdditionsForeground': UIColors.Unknown,
  'scmGraph.historyItemHoverDeletionsForeground': UIColors.Unknown,
  'scmGraph.historyItemBaseRefColor': UIColors.Unknown,
  'scmGraph.historyItemHoverDefaultLabelForeground': Foregrounds.OnSecondary,
  'scmGraph.historyItemHoverDefaultLabelBackground': UIColors.Secondary,
};
