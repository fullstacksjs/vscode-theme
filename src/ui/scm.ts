import type { UIColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

const added = Foregrounds.Green;
const modified = Foregrounds.Orange;
const deleted = Foregrounds.Red;

export const scm: UIColor = {
  'gitDecoration.deletedResourceForeground': deleted,
  'gitDecoration.stageDeletedResourceForeground': deleted,
  'editorGutter.deletedBackground': deleted,
  'minimapGutter.deletedBackground': deleted,

  'gitDecoration.modifiedResourceForeground': modified,
  'gitDecoration.stageModifiedResourceForeground': modified,
  'editorGutter.modifiedBackground': modified,
  'minimapGutter.modifiedBackground': modified,

  'gitDecoration.untrackedResourceForeground': added,
  'gitDecoration.addedResourceForeground': added,
  'editorGutter.addedBackground': added,
  'minimapGutter.addedBackground': added,

  'gitDecoration.submoduleResourceForeground': Foregrounds.Blue,
  'gitDecoration.conflictingResourceForeground': Foregrounds.Magenta,
  'gitDecoration.ignoredResourceForeground': Foregrounds.Muted,
};
