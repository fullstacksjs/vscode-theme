import type { UIColor } from '../types.ts';

import { Foregrounds, UIColors } from '../colors.ts';

const added = Foregrounds.Green;
const modified = Foregrounds.Orange;
const deleted = Foregrounds.Red;

export const scm: UIColor = {
  'gitDecoration.deletedResourceForeground': deleted,
  'gitDecoration.stageDeletedResourceForeground': deleted,
  'editorGutter.deletedBackground': deleted,
  'minimapGutter.deletedBackground': deleted,
  'editorGutter.deletedSecondaryBackground': deleted, // Editor gutter secondary background color for lines that are deleted.

  'gitDecoration.modifiedResourceForeground': modified,
  'gitDecoration.stageModifiedResourceForeground': modified,
  'editorGutter.modifiedBackground': modified,
  'minimapGutter.modifiedBackground': modified,
  'editorGutter.modifiedSecondaryBackground': modified, // Editor gutter secondary background color for lines that are modified.

  'gitDecoration.untrackedResourceForeground': added,
  'gitDecoration.addedResourceForeground': added,
  'editorGutter.addedBackground': added,
  'minimapGutter.addedBackground': added,
  'editorGutter.addedSecondaryBackground': added, // Editor gutter secondary background color for lines that are added.

  'gitDecoration.submoduleResourceForeground': Foregrounds.Blue,
  'gitDecoration.conflictingResourceForeground': Foregrounds.Magenta,
  'gitDecoration.ignoredResourceForeground': Foregrounds.Muted,

  'editorOverviewRuler.modifiedForeground': modified, // Overview ruler marker color for modified content.
  'editorOverviewRuler.addedForeground': added, // Overview ruler marker color for added content.
  'editorOverviewRuler.deletedForeground': deleted, // Overview ruler marker color for deleted content.

  'editorOverviewRuler.inlineChatInserted': added, // Overview ruler marker color for inline chat inserted content.
  'editorOverviewRuler.inlineChatRemoved': deleted, // Overview ruler marker color for inline chat removed content.

  'editorGutter.commentRangeForeground': UIColors.Border, // Editor gutter decoration color for commenting ranges.
  'editorGutter.commentGlyphForeground': UIColors.Foreground, // Editor gutter decoration color for commenting glyphs.
  'editorGutter.commentUnresolvedGlyphForeground': UIColors.Tertiary, // Editor gutter decoration color for commenting glyphs for unresolved comment threads.

  'diffEditor.insertedTextBackground': UIColors.BackgroundSuccess, // Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
  'diffEditor.insertedTextBorder': UIColors.Transparent, // Outline color for the text that got inserted.
  'diffEditor.removedTextBackground': UIColors.BackgroundDanger, // Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
  'diffEditor.removedTextBorder': UIColors.Transparent, // Outline color for text that got removed.
  'diffEditor.border': UIColors.Transparent, // Border color between the two text editors.
  'diffEditor.diagonalFill': UIColors.Selection, // Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
  'diffEditor.insertedLineBackground': UIColors.BackgroundSuccess, // Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.
  'diffEditor.removedLineBackground': UIColors.BackgroundDanger, // Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.
  'diffEditorGutter.insertedLineBackground': UIColors.BackgroundSuccess, // Background color for the margin where lines got inserted.
  'diffEditorGutter.removedLineBackground': UIColors.BackgroundDanger, // Background color for the margin where lines got removed.
  'diffEditorOverview.insertedForeground': UIColors.Success, // Diff overview ruler foreground for inserted content.
  'diffEditorOverview.removedForeground': UIColors.Danger, // Diff overview ruler foreground for removed content.

  // 'diffEditor.unchangedRegionBackground': UIColors.BackgroundInfo, // TODO: The color of unchanged blocks in diff editor.
  // 'diffEditor.unchangedRegionForeground': UIColors.Foreground, // TODO: The foreground color of unchanged blocks in the diff editor.
  // 'diffEditor.unchangedCodeBackground': UIColors.BackgroundInfo, // TODO: The background color of unchanged code in the diff editor.
  'diffEditor.unchangedRegionShadow': UIColors.Transparent, // The color of the shadow around unchanged region widgets.
  'diffEditor.move.border': UIColors.Transparent, // The border color for text that got moved in the diff editor.
  // 'diffEditor.moveActive.border': '', // The active border color for text that got moved in the diff editor.
  // 'multiDiffEditor.headerBackground': '', // The background color of the diff editor's header
  // 'multiDiffEditor.background': '', // The background color of the multi file diff editor
  // 'multiDiffEditor.border': '', // The border color of the multi file diff editor
};
