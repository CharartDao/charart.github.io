import { Theme, useMediaQuery } from '@mui/material';

type Props = {
  isMobile: ReturnType<typeof useMediaQuery>;
  isTablet: ReturnType<typeof useMediaQuery>;
  isDesktop: ReturnType<typeof useMediaQuery>;
};

const useQueries = (): Props => {
  const isMobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery<Theme>((theme) => theme.breakpoints.up('sm'));
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));

  return { isMobile, isTablet, isDesktop };
};

export default useQueries;