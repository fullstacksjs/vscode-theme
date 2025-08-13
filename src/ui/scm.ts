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
};
