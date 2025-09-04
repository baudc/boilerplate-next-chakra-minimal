import { Flex, HStack } from '@chakra-ui/react';

import type { Route } from 'next';
import Link from 'next/link';

type NavItem<T extends string = string> = {
  href: T;
  label: string;
};

export const navItems: NavItem<Route>[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export const Menu = () => {
  return (
    <nav>
      <HStack
        justify="center"
        align="center"
        mr="20px"
        border="1px solid red"
        gap={8}
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </HStack>
    </nav>
  );
};
