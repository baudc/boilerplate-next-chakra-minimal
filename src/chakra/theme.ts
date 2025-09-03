import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { fonts } from './fonts';
import { styles } from './styles';
import { components } from './components';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({ colors, fonts, styles, components, config });
