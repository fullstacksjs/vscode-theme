import type { UIColor } from '../types.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const statusBar: UIColor = {
  'statusBar.foreground': Foregrounds.Neutral,
  'statusBar.background': UIColors.Background,
  'statusBar.border': UIColors.Transparent,

  'statusBar.debuggingBackground': UIColors.Danger,
  'statusBar.debuggingForeground': Foregrounds.OnDanger,
  'statusBar.debuggingBorder': UIColors.Transparent,

  'statusBar.noFolderBackground': UIColors.Primary,
  'statusBar.noFolderForeground': Foregrounds.OnPrimary,
  'statusBar.noFolderBorder': UIColors.Transparent,

  'statusBarItem.hoverBackground': UIColors.BackgroundHover,
  'statusBarItem.activeBackground': UIColors.BackgroundFocus,

  'statusBarItem.remoteBackground': UIColors.Background,
  'statusBarItem.remoteForeground': Foregrounds.Magenta,
};
