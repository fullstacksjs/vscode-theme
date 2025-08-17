import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const statusBar = (colors: UIColors): VSCodeTokens => ({
  'statusBar.foreground': colors.foreground.muted,
  'statusBar.background': colors.background.default,
  'statusBar.border': colors.transparent,

  'statusBar.debuggingBackground': colors.danger.foreground,
  'statusBar.debuggingForeground': colors.danger.onForeground,
  'statusBar.debuggingBorder': colors.transparent,

  'statusBar.noFolderBackground': colors.primary.foreground,
  'statusBar.noFolderForeground': colors.primary.onForeground,
  'statusBar.noFolderBorder': colors.transparent,

  'statusBarItem.hoverBackground': colors.background.hover,
  'statusBarItem.hoverForeground': colors.foreground.support,

  'statusBarItem.activeBackground': colors.background.focus,

  'statusBarItem.remoteBackground': colors.background.default,
  'statusBarItem.remoteForeground': colors.tertiary.foreground,

  'statusBarItem.prominentForeground': colors.primary.onForeground,
  'statusBarItem.prominentBackground': colors.primary.foreground,
  'statusBarItem.prominentHoverForeground': colors.primary.onForeground,
  'statusBarItem.prominentHoverBackground': colors.primary.hover,

  'statusBarItem.remoteHoverBackground': colors.tertiary.foreground,
  'statusBarItem.remoteHoverForeground': colors.tertiary.onForeground,

  'statusBarItem.errorBackground': colors.danger.foreground,
  'statusBarItem.errorForeground': colors.danger.onForeground,
  'statusBarItem.errorHoverBackground': colors.danger.focus,
  'statusBarItem.errorHoverForeground': colors.danger.onForeground,

  'statusBarItem.warningBackground': colors.warning.foreground,
  'statusBarItem.warningForeground': colors.warning.onForeground,
  'statusBarItem.warningHoverBackground': colors.warning.focus,
  'statusBarItem.warningHoverForeground': colors.warning.onForeground,

  'statusBarItem.compactHoverBackground': colors.background.hover,
  'statusBarItem.focusBorder': colors.primary.foreground,
  'statusBar.focusBorder': colors.primary.foreground,

  'statusBarItem.offlineBackground': colors.unknown,
  'statusBarItem.offlineHoverForeground': colors.unknown,
  'statusBarItem.offlineHoverBackground': colors.unknown,
});
