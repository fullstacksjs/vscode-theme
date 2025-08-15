import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const statusBar: UIColor = {
  'statusBar.foreground': Foregrounds.Muted,
  'statusBar.background': UIColors.Background,
  'statusBar.border': UIColors.Transparent,

  'statusBar.debuggingBackground': UIColors.Danger,
  'statusBar.debuggingForeground': Foregrounds.OnDanger,
  'statusBar.debuggingBorder': UIColors.Transparent,

  'statusBar.noFolderBackground': UIColors.Primary,
  'statusBar.noFolderForeground': Foregrounds.OnPrimary,
  'statusBar.noFolderBorder': UIColors.Transparent,

  'statusBarItem.hoverBackground': UIColors.BackgroundHover,
  'statusBarItem.hoverForeground': Foregrounds.Support,

  'statusBarItem.activeBackground': UIColors.BackgroundFocus,

  'statusBarItem.remoteBackground': UIColors.Background,
  'statusBarItem.remoteForeground': Foregrounds.Magenta,

  'statusBarItem.prominentForeground': Foregrounds.OnPrimary,
  'statusBarItem.prominentBackground': UIColors.Primary,
  'statusBarItem.prominentHoverForeground': Foregrounds.OnPrimary,
  'statusBarItem.prominentHoverBackground': UIColors.PrimaryHover,

  'statusBarItem.remoteHoverBackground': UIColors.Tertiary,
  'statusBarItem.remoteHoverForeground': Foregrounds.OnTertiary,

  'statusBarItem.errorBackground': UIColors.Danger,
  'statusBarItem.errorForeground': Foregrounds.OnDanger,
  'statusBarItem.errorHoverBackground': UIColors.BackgroundDangerFocus,
  'statusBarItem.errorHoverForeground': Foregrounds.OnDanger,

  'statusBarItem.warningBackground': UIColors.Warning,
  'statusBarItem.warningForeground': Foregrounds.OnWarning,
  'statusBarItem.warningHoverBackground': UIColors.BackgroundWarningFocus,
  'statusBarItem.warningHoverForeground': Foregrounds.OnWarning,

  'statusBarItem.compactHoverBackground': UIColors.BackgroundHover,
  'statusBarItem.focusBorder': UIColors.Primary,
  'statusBar.focusBorder': UIColors.Primary,

  'statusBarItem.offlineBackground': UIColors.Unknown,
  'statusBarItem.offlineHoverForeground': UIColors.Unknown,
  'statusBarItem.offlineHoverBackground': UIColors.Unknown,
};
