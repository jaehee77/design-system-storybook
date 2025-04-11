import type { Preview } from '@storybook/react';
import React from 'react';
// import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
// import { addons } from '@storybook/preview-api';
import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/index.css';
import '@fontsource/noto-sans-kr/400.css'; // Specify weight
import '@fontsource/noto-sans-kr/700.css'; // Specify weight

// const ThemeDecorator = (Story, context) => {
//   const theme = context.globals.theme || 'light';

//   React.useEffect(() => {
//     document.body.classList.toggle('dark', theme === 'dark');
//   }, [theme]);

//   return <Story />;
// };

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
      ],
    },
    layout: 'fullscreen', // 또는 'padded', 'centered'

    themes: {
      default: 'light',
      list: [
        { name: 'light', class: '', color: '#ffffff' },
        { name: 'dark', class: 'dark', color: '#000000' },
      ],
    },
  },

  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
    // ThemeDecorator,
    withThemeByClassName({
      themes: {
        light: '', // light 테마일 때는 아무 클래스도 안 붙임
        dark: 'dark', // dark 테마일 때 .dark 클래스 추가
      },
      defaultTheme: 'light', // 기본 테마
    }),
  ],
};

export default preview;
