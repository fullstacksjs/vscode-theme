import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const java: TokenColor[] = [
  {
    name: 'Java Annotations',
    scope: [
      'storage.type.annotation.java',
      'punctuation.definition.annotation.java',
      'meta.declaration.annotation.java',
      'constant.other.key.java',
    ],
    settings: {
      foreground: Foregrounds.Yellow,
    },
  },
  {
    name: 'Java Keywords and Reserved Words',
    scope: [
      'keyword.control.java',
      'keyword.operator.java',
      'keyword.other.java',
      'storage.modifier.java',
      'storage.type.primitive.java',
      'keyword.other.package.java',
      'keyword.other.import.java',
      'storage.modifier.package.java',
      'storage.modifier.import.java',
      'keyword.control.new.java',
      'keyword.operator.instanceof.java',
      'keyword.control.assert.java',
      'storage.modifier.extends.java',
      'storage.modifier.implements.java',
      'keyword.control.try.java',
      'keyword.control.catch.java',
      'keyword.control.throw.java',
      'keyword.control.throws.java',
      'keyword.control.finally.java',
      'variable.language.this.java',
      'variable.language.super.java',
    ],
    settings: {
      foreground: Foregrounds.Orange,
    },
  },
  {
    name: 'Java Types and Class Names',
    scope: [
      'storage.type.java',
      'storage.type.generic.java',
      'entity.name.type.java',
      'entity.name.class.java',
      'entity.name.namespace.java',
      'entity.name.type.class.java',
      'storage.type.primitive.array.java',
      'storage.type.object.array.java',
      'entity.other.inherited-class.java',
      'support.class.java',
      'support.type.java',
    ],
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Java Constants',
    scope: ['constant.other.java', 'constant.language.java'],
    settings: {
      foreground: Foregrounds.Cyan,
    },
  },
  {
    name: 'Java Enum Constants',
    scope: [
      'constant.other.enum.java',
      'variable.other.enummember.java',
      'entity.name.constant.java',
    ],
    settings: {
      foreground: Foregrounds.Magenta,
    },
  },
  {
    name: 'Java Strings',
    scope: ['string.quoted.double.java', 'string.quoted.single.java'],
    settings: {
      foreground: Foregrounds.Green,
    },
  },
  {
    name: 'Java Comments',
    scope: ['comment.line.double-slash.java', 'comment.block.java'],
    settings: {
      foreground: Foregrounds.Cyan,
    },
  },
  {
    name: 'Java Class Variables and Fields',
    scope: [
      'variable.other.field.java',
      'variable.other.property.java',
      'variable.other.definition.java',
      'meta.definition.variable.java variable.other.definition.java',
    ],
    settings: {
      foreground: Foregrounds.Magenta,
    },
  },
  {
    name: 'Java Method Parameters and Local Variables',
    scope: [
      'variable.parameter.java',
      'variable.other.local.java',
      'meta.definition.variable.local.java',
    ],
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Java Method Names',
    scope: [
      'entity.name.function.java',
      'meta.method.java entity.name.function.java',
    ],
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Java Package Names',
    scope: ['storage.modifier.package.java', 'storage.modifier.import.java'],
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
];
