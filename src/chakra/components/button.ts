export const Button = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "12pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "blue.500",
      _hover: {
        bg: "blue.400",
      },
    },
    outline: {
      color: "blue.500",
      border: "1px solid",
      borderColor: "blue.500",
    },
    oauth: {
      height: "38px",
      border: "1px solid",
      borderColor: "gray.300",
      fontSize: "11pt",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};
