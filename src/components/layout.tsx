import MenuBar from './menu-bar';
import { Box, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import { isMobileSafari } from 'react-device-detect';
import './layout';

export type PageProps = {
  pageName?: string;
};

const layout =
  (WrappedComponent: React.ComponentType) =>
  (pageProps: PageProps): React.FC => {
    const LayoutComponent: React.FC = (props?: Record<string, unknown>) => {

      useEffect(() => {
        if (isMobileSafari) {
          setTimeout(() => {
            window.scrollTo(0, 1);
          }, 300);
        }
      }, [isMobileSafari]);

      return (
        <div className="layout">
          <div className="container">
            <MenuBar />
            <Box p="1rem">
              <WrappedComponent {...props} />
            </Box>
          </div>
        </div>
      );
    };

    return LayoutComponent;
  };

export default layout;