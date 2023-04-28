import { colors } from "./colors";

const darkTheme = {
  ":root, html, body": {
    bg: colors.black[900],
    color: colors.background[200],
  },
  ".navbar": {
    bg: colors.black[700],
  },
  ".footer": {
    bg: colors.black[700],
  },
};

const lightTheme = {
  "html, body": {
    bg: colors.background[500],
    color: colors.black[500],
  },
  ".navbar": {
    bg: "white",
  },
  ".footer": {
    bg: "white",
  },
};

export const styles = {
  global: (props: { colorMode: string }) =>
    props.colorMode === "dark" ? { ...darkTheme } : { ...lightTheme },
};
