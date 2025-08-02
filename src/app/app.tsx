import { ThemeProvider, Global, css } from "@emotion/react";
import { ConfigProvider } from "antd";

import { theme } from "@/shared/theme";

import { Router } from "./router";

import type { ThemeConfig } from "antd";

const { palette } = theme;

const styles = css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;

      font-family: 'Inter', sans-serif;
    }
`;

const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: palette.primary[500],
    colorInfo: palette.secondary[500],
    colorSuccess: palette.success[500],
    colorWarning: palette.warning[500],
    colorError: palette.error[500],

    colorBgBase: palette.neutral[100],
    colorBgContainer: palette.white,

    colorTextBase: palette.neutral[900],
    colorTextSecondary: palette.neutral[500],
    colorLink: palette.primary[600],

    colorBorder: palette.neutral[200],
    colorSplit: palette.neutral[300],

    borderRadius: 8,
    boxShadow: `0 1px 3px ${palette.shadow}`,
  },

  components: {
    Button: {
      colorPrimary: palette.primary[600],
      colorPrimaryHover: palette.primary[700],
      colorPrimaryActive: palette.primary[800],
      borderRadius: 6,
    },
    Input: {
      colorBgContainer: palette.white,
      borderRadius: 6,
    },
    Card: {
      borderRadius: 12,
      colorBorderSecondary: palette.neutral[200],
    },
    Tag: {
      colorPrimary: palette.tertiary[500],
      borderRadius: 4,
    },
    Tabs: {
      colorPrimary: palette.secondary[500],
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={antdTheme}>
        <Global styles={styles} />
        <Router/>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
