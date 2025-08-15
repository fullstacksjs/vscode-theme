import { Foregrounds, UIColors, withAlpha } from '../colors.ts';

export const chat = {
  'chat.requestBorder': withAlpha(UIColors.Tertiary, 0.3),
  'chat.requestBackground': UIColors.Unknown,
  'chat.slashCommandBackground': UIColors.Selection,
  'chat.slashCommandForeground': UIColors.Tertiary,

  'chat.avatarBackground': UIColors.Unknown,
  'chat.avatarForeground': UIColors.Unknown,
  'chat.editedFileForeground': UIColors.Primary,
  'chat.linesAddedForeground': UIColors.Success,
  'chat.linesRemovedForeground': UIColors.Danger,
  'chat.requestCodeBorder': UIColors.Unknown,
  'chat.requestBubbleBackground': UIColors.Secondary,
  'chat.requestBubbleHoverBackground': UIColors.BackgroundInfo,
  'chat.checkpointSeparator': Foregrounds.Muted,

  'inlineChat.background': UIColors.Unknown,
  'inlineChat.foreground': UIColors.Unknown,
  'inlineChat.border': UIColors.Transparent,
  'inlineChat.shadow': UIColors.Transparent,
  'inlineChatInput.border': UIColors.Border,
  'inlineChatInput.focusBorder': UIColors.Danger,
  'inlineChatInput.placeholderForeground': UIColors.Danger,
  'inlineChatInput.background': UIColors.Danger,
  'inlineChatDiff.inserted': UIColors.Unknown,
  'inlineChatDiff.removed': UIColors.Unknown,

  'interactive.activeCodeBorder': UIColors.Unknown,
  'interactive.inactiveCodeBorder': UIColors.Unknown,
};
