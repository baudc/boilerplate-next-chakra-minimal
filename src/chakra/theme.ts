import { createSystem, defaultConfig } from '@chakra-ui/react';

import { colors } from './colors';
import { fonts } from './fonts';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        ...Object.fromEntries(
          Object.entries(colors).map(([key, value]) => [
            key,
            typeof value === 'object'
              ? Object.fromEntries(
                  Object.entries(value).map(([subKey, subValue]) => [
                    subKey,
                    { value: subValue },
                  ]),
                )
              : { value },
          ]),
        ),
      },
      fonts: {
        ...Object.fromEntries(
          Object.entries(fonts).map(([key, value]) => [key, { value }]),
        ),
      },
    },
  },
});
