export type Palette = {
  blue: string;
  white: string;
  red: string;
  yellow: string;
  violet: string;
  comment: string;
  magenta: string;
  foreground: string;
  background: string;
}

const blue = '#3C98F5';
const white = '#EADEDA';
const red = '#ea5d36';
const yellow = '#eabf38';
const violet = '#D45CFF';
const comment = '#9197AE';
const magenta = '#FF4082';
const foreground = '#EADEDA';
const background = '#1E1E29';
const backgroundDarker = '#161622';

export const dark: Palette = {
  blue,
  white,
  red,
  yellow,
  violet,
  comment,
  magenta,
  foreground,
  background,
};

export const darker: Palette = {
  blue,
  white,
  red,
  yellow,
  violet,
  comment,
  magenta,
  foreground,
  background: backgroundDarker,
};
