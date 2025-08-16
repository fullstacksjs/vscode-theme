import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const css: TokenColor[] = [
  {
    name: 'CSS Value',
    scope:
      'meta.property-value.css, support.constant.property-value.css, support.constant.color.current.css',
    settings: {
      foreground: Foregrounds.Blue,
    },
  },
  {
    name: 'Primitive Values',
    scope:
      'keyword.other.unit, constant.numeric.css, constant.other.color.rgb-value.hex.css',
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'CSS Function',
    scope:
      'support.function.misc.css, meta.function.misc.css, support.function.transform.css',
    settings: {
      foreground: Foregrounds.Orange,
    },
  },
  {
    name: 'CSS Variable',
    scope: 'variable.argument.css',
    settings: {
      foreground: Foregrounds.Cyan,
    },
  },
  {
    name: 'CSS Pseudo Class',
    scope: 'entity.other.attribute-name.pseudo-class.css',
    settings: {
      foreground: Foregrounds.Orange,
    },
  },
  {
    name: 'CSS Property Name',
    scope: 'meta.property-name.css, entity.name.tag.custom.css',
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'CSS Punctuation',
    scope:
      'punctuation.definition.entity.begin.bracket.square.css, punctuation.definition.entity.end.bracket.square.css, punctuation.section.function.begin.bracket.round.css, punctuation.section.function.end.bracket.round.css, punctuation.separator.list.comma.css',
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'CSS Attribute',
    scope: 'entity.other.attribute-name.css',
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'CSS Selector',
    scope:
      'entity.other.attribute-name.id.css, entity.name.tag.css, entity.other.attribute-name.class.css, entity.other.keyframe-offset.css',
    settings: {
      foreground: Foregrounds.Red,
      fontStyle: 'bold',
    },
  },
  {
    name: 'CSS Pseudo Element',
    scope: 'entity.other.attribute-name.pseudo-element.css',
    settings: {
      foreground: Foregrounds.Yellow,
      fontStyle: 'bold',
    },
  },
  {
    name: 'CSS At Rule',
    scope: 'meta.at-rule.body.css, meta.at-rule.header.css',
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'CSS At Rule',
    scope: ['keyword.control.at-rule.css', 'keyword.control.at-rule'],
    settings: {
      foreground: Foregrounds.Red,
      fontStyle: 'bold',
    },
  },
];
