import type { SemanticTokenColors } from './types.ts';

import { Foregrounds } from './colors.ts';

/**
 * doc: {@link https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#predefined-textmate-scope-mappings}
 */
export const semanticTokenColors: SemanticTokenColors = {
  type: {
    foreground: Foregrounds.Neutral,
  },
  typeParameter: {
    foreground: Foregrounds.Neutral,
  },
  namespace: {
    foreground: Foregrounds.Neutral,
  },
  enum: {
    foreground: Foregrounds.Neutral,
  },
  enumMember: {
    foreground: Foregrounds.Magenta,
  },
  interface: {
    foreground: Foregrounds.Neutral,
  },
  class: {
    foreground: Foregrounds.Neutral,
  },
  annotation: {
    foreground: Foregrounds.Yellow,
  },
  variable: {
    foreground: Foregrounds.Neutral,
  },
  parameter: {
    foreground: Foregrounds.Neutral,
  },
  property: {
    foreground: Foregrounds.Magenta,
  },
  field: {
    foreground: Foregrounds.Magenta,
  },
};
