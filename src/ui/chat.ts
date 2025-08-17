import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

import { withAlpha } from '../utils.ts';

export const chat = (colors: UIColors): VSCodeTokens => ({
  'chat.requestBorder': withAlpha(colors.tertiary.foreground, 0.3),
  'chat.requestBackground': colors.unknown,
  'chat.slashCommandBackground': colors.selection.default,
  'chat.slashCommandForeground': colors.tertiary.foreground,

  'chat.avatarBackground': colors.unknown,
  'chat.avatarForeground': colors.unknown,
  'chat.editedFileForeground': colors.primary.foreground,
  'chat.linesAddedForeground': colors.success.foreground,
  'chat.linesRemovedForeground': colors.danger.foreground,
  'chat.requestCodeBorder': colors.unknown,
  'chat.requestBubbleBackground': colors.secondary.foreground,
  'chat.requestBubbleHoverBackground': colors.info.background,
  'chat.checkpointSeparator': colors.foreground.muted,

  'inlineChat.background': colors.unknown,
  'inlineChat.foreground': colors.unknown,
  'inlineChat.border': colors.transparent,
  'inlineChat.shadow': colors.transparent,
  'inlineChatInput.border': colors.border.default,
  'inlineChatInput.focusBorder': colors.danger.foreground,
  'inlineChatInput.placeholderForeground': colors.danger.foreground,
  'inlineChatInput.background': colors.danger.foreground,
  'inlineChatDiff.inserted': colors.unknown,
  'inlineChatDiff.removed': colors.unknown,

  'interactive.activeCodeBorder': colors.unknown,
  'interactive.inactiveCodeBorder': colors.unknown,
});
