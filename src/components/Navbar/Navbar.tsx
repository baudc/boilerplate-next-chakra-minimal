import { Flex } from "@chakra-ui/react";
import { Brand } from "@/components/Navbar/Brand";
import { Menu } from "./Menu/Menu";
import { DarkModeSwitch } from "../DarkModeSwitch";

export const Navbar = () => {
  return (
    <Flex
      className="navbar"
      padding="6px 20px"
      height="48px"
      alignItems="center"
      justifyContent={{ md: "space-between" }}
    >
      <Brand />
      <Flex>
        <Menu />
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
};
