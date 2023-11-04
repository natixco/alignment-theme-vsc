export type Palette = {
  blue: string;
  white: string;
  red: string;
  yellow: string;
  purple: string;
  comment: string;
  background: string;
}

const blue = '#3C98F5';
const white = '#EADEDA';
const red = '#ea5d36';
const yellow = '#eabf38';
const purple = '#D45CFF';
const comment = '#9197AE';
const background = '#1E1E29';
const backgroundDarker = '#161622';

export const dark: Palette = {
  blue,
  white,
  red,
  yellow,
  purple,
  comment,
  background,
};

export const darker: Palette = {
  blue,
  white,
  red,
  yellow,
  purple,
  comment,
  background: backgroundDarker,
};
