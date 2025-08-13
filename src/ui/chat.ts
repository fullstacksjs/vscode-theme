import { Foregrounds, UIColors, withAlpha } from '../colors.ts';

export const chat = {
  'chat.requestBorder': withAlpha(UIColors.Tertiary, 0.3), // The border color of a chat request.
  // 'chat.requestBackground': UIColors.Success, // TODO: The background color of a chat request.
  'chat.slashCommandBackground': UIColors.Selection, // The background color of a chat slash command.
  'chat.slashCommandForeground': UIColors.Tertiary, // The foreground color of a chat slash command.

  // 'chat.avatarBackground': UIColors.Danger, // TODO: The background color of a chat avatar.
  // 'chat.avatarForeground': UIColors.Danger, // TODO: The foreground color of a chat avatar.
  'chat.editedFileForeground': UIColors.Primary, // The foreground color of a chat edited file in the edited file list.
  'chat.linesAddedForeground': UIColors.Success, // Foreground color of lines added in chat code block pill.
  'chat.linesRemovedForeground': UIColors.Danger, // Foreground color of lines removed in chat code block pill.
  // 'chat.requestCodeBorder': UIColors.Danger, // TODO: Border color of code blocks within the chat request bubble.
  'chat.requestBubbleBackground': UIColors.Secondary, // TODO: Background color of the chat request bubble.
  'chat.requestBubbleHoverBackground': UIColors.BackgroundInfo, // TODO: Background color of the chat request bubble on hover.
  'chat.checkpointSeparator': Foregrounds.Muted, // Chat checkpoint separator color.
};
