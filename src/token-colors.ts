import { Palette } from "./palette";

export type TokenColor = {
  scope: string[];
  settings: {
    fontStyle?: string;
    foreground?: string;
  };
}

export const getTokenColors = (italic: boolean, {
  blue,
  white,
  red,
  yellow,
  violet,
  comment,
  foreground,
}: Palette): TokenColor[] => [
    {
      scope: [
        'comment',
        'comment.line.double-slash',
        'punctuation.definition.comment'
      ],
      settings: {
        fontStyle: italic ? 'italic' : '',
        foreground: comment,
      },
    },
    {
      scope: [
        'variable',
        'variable.other',
        'meta.definition.variable',
        'entity.name.variable'
      ],
      settings: {
        foreground: red,
      },
    },
    {
      scope: [
        'variable.other.property'
      ],
      settings: {
        foreground: yellow,
      },
    },
    {
      scope: [
        'support.type'
      ],
      settings: {
        foreground: white,
      }
    },
    {
      scope: [
        'constant.other.color',
        'meta.jsx.children.js.jsx'
      ],
      settings: {
        foreground: foreground,
      },
    },
    {
      scope: [
        'invalid',
        'invalid.illegal'
      ],
      settings: {
        foreground: red,
      },
    },
    {
      scope: [
        'invalid.deprecated'
      ],
      settings: {
        foreground: violet,
      },
    },
    {
      scope: [
        'keyword.type'
      ],
      settings: {
        foreground: violet,
      },
    },
    {
      scope: [
        'meta.preprocessor'
      ],
      settings: {
        fontStyle: getFontStyle(italic),
        foreground: comment,
      },
    },
    {
      scope: [
        'punctuation',
        'punctuation.section.embedded',
        'keyword.other.template',
        'keyword.other.substitution',
        'keyword.operator.assignment.js.jsx',
      ],
      settings: {
        foreground: red,
      },
    },
    {
      scope: [
        'meta.tag',
        'meta.tag.attributes',
        'punctuation.accessor',
        'punctuation.definition.tag',
        'punctuation.separator.inheritance.php',
        'punctuation.definition.tag.html',
        'punctuation.definition.tag.begin.html',
        'punctuation.definition.tag.end.html',
      ],
      settings: {
        foreground: comment,
      },
    },
    {
      scope: [
        'punctuation.definition.typeparameters.begin',
        'punctuation.definition.typeparameters.end'
      ],
      settings: {
        foreground: white,
      },
    },
    {
      scope: [
        'keyword.operator.assignment',
        'keyword.operator.comparison',
        'keyword.operator.arithmetic',
        'keyword.operator.logical',
        'storage.type.function.arrow',
      ],
      settings: {
        foreground: violet,
      },
    },
    {
      scope: [
        'keyword.control'
      ],
      settings: {
        fontStyle: getFontStyle(italic),
      },
    },
    {
      scope: [
        'entity.name.tag'
      ],
      settings: {
        foreground: red,
      },
    },
    {
      scope: [
        'comment.block.documentation'
      ],
      settings: {
        foreground: comment,
      }
    },
    {
      scope: [
        'entity.name.function',
        'meta.function-call',
        'variable.function',
        'support.function',
        'keyword.other.special-method',
      ],
      settings: {
        foreground: blue,
      },
    },
    {
      scope: [
        'support.other.variable',
        'string.other.link'
      ],
      settings: {
        foreground: blue,
      },
    },
    {
      scope: [
        'variable.parameter',
        'support.class.console.js'
      ],
      settings: {
        foreground: foreground,
      },
    },
    {
      scope: [
        'variable.parameter'
      ],
      settings: {
        fontStyle: getFontStyle(italic),
      },
    },
    {
      scope: [
        'string',
        'constant.other.symbol',
        'constant.other.key',
        'entity.other.inherited-class',
        'punctuation.definition.string.begin',
        'punctuation.definition.string.end',
      ],
      settings: {
        foreground: foreground,
      },
    },
    {
      scope: [
        'entity.name',
      ],
      settings: {
        foreground: blue,
      },
    },
    {
      scope: [
        'source.css support.type.property-name',
        'source.sass support.type.property-name',
        'source.scss support.type.property-name',
        'source.less support.type.property-name',
        'source.stylus support.type.property-name',
        'source.postcss support.type.property-name',
      ],
      settings: {
        foreground: blue,
      },
    },
    {
      scope: [
        'entity.name.module.js',
        'variable.import.parameter.js',
        'variable.other.class.js',
      ],
      settings: {
        foreground: red,
      },
    },
    {
      scope: [
        'variable.language'
      ],
      settings: {
        fontStyle: getFontStyle(italic),
        foreground: red,
      },
    },
    {
      scope: [
        'constant.numeric',
        'constant.language',
        'support.constant',
        'constant.character',
        'constant.escape',
        'keyword.other.unit',
        'keyword.other',
        'variable.language.this',
      ],
      settings: {
        fontStyle: 'normal',
        foreground: white,
      },
    },
    {
      scope: [
        'variable.function.constructor',
      ],
      settings: {
        foreground: blue,
      },
    },
    {
      scope: [
        'entity.other.attribute-name'
      ],
      settings: {
        foreground: yellow,
      },
    },
    {
      scope: [
        'entity.other.attribute-name.class'
      ],
      settings: {
        foreground: yellow,
      },
    },
    {
      scope: [
        'entity.other.attribute-name.id'
      ],
      settings: {
        foreground: blue,
      },
    },
    {
      scope: [
        'string.regexp'
      ],
      settings: {
        foreground: blue,
      },
    },
    {
      scope: [
        'constant.character.escape'
      ],
      settings: {
        foreground: blue,
      },
    },
    {
      scope: [
        '*url*',
        '*link*',
        '*uri*'
      ],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      scope: [
        'keyword.other.var',
        'storage.type'
      ],
      settings: {
        foreground: yellow,
      }
    },
    {
      scope: [
        'storage',
        'keyword.control',
        'storage.type.function',
        'storage.type.class',
        'storage.modifier',
        'keyword.other.class'
      ],
      settings: {
        fontStyle: getFontStyle(italic),
        foreground: yellow,
      }
    },
    {
      scope: [
        'keyword.control.import',
        'keyword.control.from',
        'keyword.control.export'
      ],
      settings: {
        foreground: yellow,
      }
    },
    {
      scope: [
        'keyword.control.conditional',
        'keyword.control.flow',
        'keyword.control.switch',
        'keyword.control.case'
      ],
      settings: {
        fontStyle: getFontStyle(italic),
        foreground: violet,
      },
    },
    {
      scope: ['meta.object'],
      settings: {
        foreground: yellow,
      }
    }
  ];

const getFontStyle = (italic: boolean) => italic ? 'italic' : 'normal';