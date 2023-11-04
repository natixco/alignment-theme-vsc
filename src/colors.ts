import { lighten, darken } from 'polished';
import { Palette } from './palette';

export const getColors = ({ blue, white, purple, red, yellow, comment, background }: Palette) => ({
  'activityBar.background': background,
  'activityBar.foreground': comment,
  'activityBarBadge.background': red,
  'activityBarBadge.foreground': white,
  'editorLineNumber.foreground': darken(0.2, comment),
  'editorLineNumber.activeForeground': white,

  'badge.background': darken(0.2, blue),
  'badge.foreground': '#fff',

  'button.background': red,
  'button.foreground': '#fff',
  'button.hoverBackground': darken(0.1, red),

  'descriptionForeground': comment,

  'dropdown.background': darken(0.025, background),
  'dropdown.listBackground': darken(0.01, background),
  'dropdown.border': darken(0.04, background),
  'dropdown.foreground': white,
  'editorWidget.background': darken(0.02, background),
  'editorWidget.border': darken(0.04, background),

  'foreground': white,
  'editor.foreground': white,
  'editor.background': background,
  'editorIndentGuide.background': lighten(0.05, background),
  'editorIndentGuide.activeBackground': lighten(0.15, background),
  'editorLink.activeForeground': blue,
  'editor.lineHighlightBackground': lighten(0.035, background),
  'editor.lineHighlightBorder': lighten(0.065, background),
  'editor.rangeHighlightBackground': lighten(0.02, background) + '80',
  'editorCodeLens.foreground': comment,
  'editorCursor.foreground': comment,

  'editorGutter.addedBackground': white,
  'editorGutter.deletedBackground': red,
  'editorGutter.modifiedBackground': blue,

  'editorGroupHeader.noTabsBackground': darken(0.01, background),
  'editorGroupHeader.tabsBackground': darken(0.01, background),
  'editorGroupHeader.tabsBorder': darken(0.0, background),

  'editorSuggestWidget.background': darken(0.03, background),
  'editorSuggestWidget.border': darken(0.05, background),
  'editorSuggestWidget.foreground': comment,
  'editorSuggestWidget.highlightForeground': blue,
  'editorSuggestWidget.selectedBackground': lighten(0.05, background),

  'editor.selectionBackground': lighten(0.2, background),
  'editor.selectionHighlightBackground': lighten(0.2, background) + '85',
  'editor.inactiveSelectionBackground': lighten(0.15, background) + '80',
  'editor.wordHighlightStrongBackground': lighten(0.2, background) + '50',
  'editor.wordHighlightBackground': lighten(0.2, background) + '50',
  'editor.findMatchBackground': blue + '80',
  'editor.findMatchHighlightBackground': lighten(0.05, blue) + '25',
  'editor.findRangeHighlightBackground': lighten(0.2, background) + '85',
  'editor.hoverHighlightBackground': lighten(0.15, background) + '70',

  'input.background': lighten(0.065, background),
  'input.border': lighten(0.1, background),
  'input.foreground': white,
  'input.placeholderForeground': comment,
  'inputOption.activeBorder': blue,
  'inputValidation.errorBackground': lighten(0.065, background),
  'inputValidation.errorBorder': red,
  'inputValidation.infoBackground': lighten(0.065, background),
  'inputValidation.infoBorder': blue,
  'inputValidation.warningBackground': lighten(0.065, background),
  'inputValidation.warningBorder': yellow,

  'list.activeSelectionBackground': lighten(0.075, background),
  'list.activeSelectionForeground': white,
  'list.dropBackground': darken(0.03, background),
  'list.focusBackground': darken(0.03, background),
  'list.focusForeground': comment,
  'list.hoverBackground': lighten(0.15, background),
  'list.hoverForeground': white,
  'list.inactiveSelectionBackground': lighten(0.075, background),
  'list.inactiveSelectionForeground': white,
  'list.highlightForeground': blue,

  'panel.background': background,
  'panelTitle.activeBorder': darken(0.04, blue),
  'panelTitle.activeForeground': white,
  'panelTitle.inactiveForeground': comment,

  'pickerGroup.border': darken(0.05, background),
  'pickerGroup.foreground': comment,

  'scrollbar.shadow': '#00000000',
  'scrollbarSlider.background': lighten(0.075, background),
  'scrollbarSlider.activeBackground': darken(0.05, background),
  'scrollbarSlider.hoverBackground': lighten(0.125, background),

  'sideBar.background': lighten(0.015, background),
  'sideBar.border': darken(0.01, background),
  'sideBar.foreground': comment,
  'sideBarTitle.foreground': comment,

  'statusBar.background': background,
  'statusBar.border': darken(0.01, background),
  'statusBar.foreground': comment,
  'statusBar.noFolderBackground': background,
  'statusBar.noFolderForeground': comment,
  'statusBarItem.hoverBackground': lighten(0.06, background),
  'statusBarItem.activeBackground': lighten(0.03, background),

  'tab.activeBackground': darken(0.04, background),
  'tab.activeForeground': white,
  'tab.border': background,
  'tab.activeBorder': darken(0.04, red),
  'tab.inactiveBackground': lighten(0.015, background),
  'tab.inactiveForeground': comment,
  'tab.unfocusedActiveForeground': comment,
  'tab.unfocusedInactiveForeground': comment,

  'terminal.ansiBlack': '#000000',
  'terminal.ansiRed': red,
  'terminal.ansiGreen': white,
  'terminal.ansiYellow': yellow,
  'terminal.ansiBlue': blue,
  'terminal.ansiMagenta': purple, // TODO: magenta
  'terminal.ansiCyan': blue, // TODO: cyan
  'terminal.ansiWhite': white,
  'terminal.ansiBrightBlack': '#000000',
  'terminal.ansiBrightRed': red,
  'terminal.ansiBrightGreen': white,
  'terminal.ansiBrightYellow': yellow,
  'terminal.ansiBrightBlue': blue,
  'terminal.ansiBrightMagenta': purple, // TODO: magenta
  'terminal.ansiBrightCyan': blue, // TODO: cyan
  'terminal.ansiBrightWhite': white,
  'terminal.background': background,
  'terminal.foreground': white,
  'terminalCursor.background': comment,
  'terminalCursor.foreground': comment,

  'titleBar.activeBackground': darken(0.01, background),

  'widget.shadow': darken(0.06, background),
});