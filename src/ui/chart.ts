import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const chart: UIColor = {
  'charts.foreground': UIColors.Foreground,
  'charts.lines': UIColors.Border,
  'charts.red': Foregrounds.Red,
  'charts.blue': Foregrounds.Blue,
  'charts.yellow': Foregrounds.Yellow,
  'charts.orange': Foregrounds.Orange,
  'charts.green': Foregrounds.Green,
  'charts.purple': Foregrounds.Magenta,
  'chart.line': UIColors.Border,
  'chart.axis': UIColors.Border,
  'chart.guide': UIColors.Border,

  'gauge.background': UIColors.Background,
  'gauge.foreground': UIColors.Foreground,
  'gauge.border': UIColors.Border,
  'gauge.warningBackground': UIColors.Warning,
  'gauge.warningForeground': Foregrounds.OnWarning,
  'gauge.errorBackground': UIColors.Danger,
  'gauge.errorForeground': Foregrounds.OnDanger,
};
