import type { Palette, UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const scm = (colors: UIColors, palette: Palette): VSCodeTokens => {
  const added = colors.success.foreground;
  const modified = colors.warning.foreground;
  const deleted = colors.danger.foreground;

  return {
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

    'gitDecoration.submoduleResourceForeground': palette.blue['600'],
    'gitDecoration.conflictingResourceForeground': palette.magenta['600'],
    'gitDecoration.ignoredResourceForeground': colors.foreground.muted,

    'editorOverviewRuler.modifiedForeground': modified,
    'editorOverviewRuler.addedForeground': added,
    'editorOverviewRuler.deletedForeground': deleted,

    'editorOverviewRuler.inlineChatInserted': added,
    'editorOverviewRuler.inlineChatRemoved': deleted,

    'editorGutter.commentRangeForeground': colors.border.default,
    'editorGutter.commentGlyphForeground': colors.foreground.default,
    'editorGutter.commentUnresolvedGlyphForeground': colors.tertiary.foreground,

    'diffEditor.insertedTextBackground': colors.success.background,
    'diffEditor.insertedTextBorder': colors.transparent,
    'diffEditor.removedTextBackground': colors.danger.background,
    'diffEditor.removedTextBorder': colors.transparent,
    'diffEditor.border': colors.transparent,
    'diffEditor.diagonalFill': colors.selection.default,
    'diffEditor.insertedLineBackground': colors.success.background,
    'diffEditor.removedLineBackground': colors.danger.background,
    'diffEditorGutter.insertedLineBackground': colors.success.background,
    'diffEditorGutter.removedLineBackground': colors.danger.background,
    'diffEditorOverview.insertedForeground': colors.success.foreground,
    'diffEditorOverview.removedForeground': colors.danger.foreground,

    'diffEditor.unchangedRegionBackground': colors.background.focus,
    'diffEditor.unchangedRegionForeground': colors.foreground.default,
    'diffEditor.unchangedCodeBackground': colors.unknown,
    'diffEditor.unchangedRegionShadow': colors.transparent,
    'diffEditor.move.border': colors.border.default,
    'diffEditor.moveActive.border': colors.unknown,
    'multiDiffEditor.headerBackground': colors.background.default,
    'multiDiffEditor.background': colors.background.default,
    'multiDiffEditor.border': colors.border.default,

    'merge.currentHeaderBackground': colors.tertiary.focus,
    'merge.currentContentBackground': colors.tertiary.background,
    'merge.incomingHeaderBackground': colors.info.focus,
    'merge.incomingContentBackground': colors.info.background,
    'merge.border': colors.transparent,
    'merge.commonContentBackground': colors.selection.default,
    'merge.commonHeaderBackground': colors.selection.focus,

    'editorOverviewRuler.currentContentForeground': false,
    'editorOverviewRuler.incomingContentForeground': false,
    'editorOverviewRuler.commonContentForeground': false,
    'editorOverviewRuler.commentForeground': false,
    'editorOverviewRuler.commentUnresolvedForeground': false,

    'mergeEditor.change.background': colors.success.background,
    'mergeEditor.change.word.background': colors.success.background,
    'mergeEditor.conflict.unhandledUnfocused.border': colors.danger.foreground,
    'mergeEditor.conflict.unhandledFocused.border': colors.danger.foreground,
    'mergeEditor.conflict.handledUnfocused.border': colors.success.background,
    'mergeEditor.conflict.handledFocused.border': colors.success.foreground,
    'mergeEditor.conflict.handled.minimapOverViewRuler':
      colors.success.foreground,
    'mergeEditor.conflict.unhandled.minimapOverViewRuler':
      colors.danger.foreground,
    'mergeEditor.conflictingLines.background': colors.unknown,
    'mergeEditor.changeBase.background': colors.unknown,
    'mergeEditor.changeBase.word.background': colors.unknown,
    'mergeEditor.conflict.input1.background': colors.unknown,
    'mergeEditor.conflict.input2.background': colors.unknown,

    'scmGraph.historyItemRefColor': colors.success.foreground,
    'scmGraph.historyItemRemoteRefColor': colors.tertiary.foreground,
    'scmGraph.foreground1': palette.blue,
    'scmGraph.foreground2': palette.green,
    'scmGraph.foreground3': palette.yellow,
    'scmGraph.foreground4': palette.red,
    'scmGraph.foreground5': palette.cyan,
    'scmGraph.historyItemHoverLabelForeground': colors.unknown,
    'scmGraph.historyItemHoverAdditionsForeground': colors.unknown,
    'scmGraph.historyItemHoverDeletionsForeground': colors.unknown,
    'scmGraph.historyItemBaseRefColor': colors.unknown,
    'scmGraph.historyItemHoverDefaultLabelForeground':
      colors.secondary.onForeground,
    'scmGraph.historyItemHoverDefaultLabelBackground':
      colors.secondary.foreground,

    'commentsView.resolvedIcon': colors.success.foreground,
    'commentsView.unresolvedIcon': colors.warning.foreground,
  };
};
