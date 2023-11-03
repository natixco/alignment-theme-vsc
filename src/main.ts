import { readFileSync, writeFileSync } from 'fs';
import { dark, darker } from './palette';
import { getColors } from './colors';
import { getTokenColors } from './token-colors';

export type Theme = {
  filename: string;
  theme: {
    name: string;
    colors: ReturnType<typeof getColors>;
    tokenColors: ReturnType<typeof getTokenColors>;
  }
}

const themes: Theme[] = [
  {
    filename: 'alignment',
    theme: {
      name: 'Alignment',
      colors: getColors(dark),
      tokenColors: getTokenColors(false, dark),
    }
  },
  {
    filename: 'alignment-italic',
    theme: {
      name: 'Alignment (italic)',
      colors: getColors(dark),
      tokenColors: getTokenColors(true, dark),
    }
  },
  {
    filename: 'alignment-darker',
    theme: {
      name: 'Alignment darker',
      colors: getColors(darker),
      tokenColors: getTokenColors(false, darker),
    }
  },
  {
    filename: 'alignment-darker-italic',
    theme: {
      name: 'Alignment darker (italic)',
      colors: getColors(darker),
      tokenColors: getTokenColors(true, darker),
    }
  }
];

for (let theme of themes) {
  writeFileSync(`./themes/${theme.filename}.json`, JSON.stringify(theme.theme));
}

const packageJson = readFileSync('./package.json', 'utf8');
const packageJsonParsed = JSON.parse(packageJson);
packageJsonParsed.contributes.themes = themes.map(({ filename, theme }) => ({
  label: theme.name,
  uiTheme: 'vs-dark',
  path: `./themes/${filename}.json`,
}));
writeFileSync('./package.json', JSON.stringify(packageJsonParsed, null, 2));