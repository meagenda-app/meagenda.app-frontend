import { Theme } from '@material-ui/core/styles/createMuiTheme';

export interface ThemeProps {
  children: React.ReactNode;
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      leftMenu: {
        width: number;
      };
      rightMenu: {
        width: number;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      leftMenu?: {
        width?: number;
      };
      rightMenu?: {
        width?: number;
      };
    };
  }
}
