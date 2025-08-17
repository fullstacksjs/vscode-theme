import type { Palette, UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const chart = (colors: UIColors, palette: Palette): VSCodeTokens => ({
  'charts.foreground': colors.foreground.default,
  'charts.lines': colors.border.default,
  'charts.red': palette.red,
  'charts.blue': palette.blue,
  'charts.yellow': palette.yellow,
  'charts.orange': palette.orange,
  'charts.green': palette.green,
  'charts.purple': palette.magenta,
  'chart.line': colors.border.default,
  'chart.axis': colors.border.default,
  'chart.guide': colors.border.default,

  'gauge.background': colors.background.default,
  'gauge.foreground': colors.foreground.default,
  'gauge.border': colors.border.default,
  'gauge.warningBackground': colors.warning.foreground,
  'gauge.warningForeground': colors.warning.onForeground,
  'gauge.errorBackground': colors.danger.foreground,
  'gauge.errorForeground': colors.danger.onForeground,
});
