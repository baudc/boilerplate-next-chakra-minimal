import { IconButton, ClientOnly, Skeleton } from '@chakra-ui/react';
import { LuSun, LuMoon } from 'react-icons/lu';
import { useTheme } from 'next-themes';

export const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleColorMode = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <ClientOnly fallback={<Skeleton boxSize="30px" />}>
      <IconButton
        bg="gray"
        height="30px"
        onClick={toggleColorMode}
        aria-label="Toggle Theme"
      >
        {isDark ? <LuSun size={16} /> : <LuMoon size={16} />}
      </IconButton>
    </ClientOnly>
  );
};
