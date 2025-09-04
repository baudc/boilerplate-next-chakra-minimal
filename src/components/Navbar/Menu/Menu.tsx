import type { Route } from 'next';

import { HStack } from '@chakra-ui/react';
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
      <HStack align="center" gap={24} justify="center" mr="20px">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </HStack>
    </nav>
  );
};
