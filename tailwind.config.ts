import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

// Generate at: https://uicolors.app
const theme = {
  primary: {
    '50': '#fff0f1',
    '100': '#ffdee1',
    '200': '#ffc3c8',
    '300': '#ff99a1',
    '400': '#ff5f6c',
    '500': '#ff2d3e',
    '600': '#f50d20',
    '700': '#d70718',
    '800': '#aa0a17',
    '900': '#8c101a',
    DEFAULT: '#d70718',
  },
  'on-primary': {
    '500': '#ffffff',
    DEFAULT: '#ffffff',
  },
  secondary: {
    '50': '#f0f7fe',
    '100': '#deecfb',
    '200': '#c4e0f9',
    '300': '#9cccf4',
    '400': '#6dafed',
    '500': '#4b90e6',
    '600': '#3674da',
    '700': '#2d60c8',
    '800': '#2a4fa3',
    '900': '#274481',
    '950': '#0f172a',
    DEFAULT: '#0f172a',
  },
  'on-secondary': {
    '500': '#ffffff',
    DEFAULT: '#ffffff',
  },
};

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '2.5rem',
        '2xl': '8rem',
      },
    },
    extend: {
      scale: {
        '97': '0.97',
        '98': '0.98',
        '99': '0.99',
      },
      opacity: {
        '12': '0.12',
        '38': '0.38',
        '87': '0.87',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '50': '12.5rem',
        '90': '22.5rem',
      },
      extendedSpacing: {
        // Fractional values
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        // Bigger values
        '100': '25rem',
        '120': '30rem',
        '128': '32rem',
        '132': '33rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '192': '48rem',
        '200': '50rem',
        '240': '60rem',
        '256': '64rem',
        '280': '70rem',
        '320': '80rem',
        '360': '90rem',
        '400': '100rem',
        '480': '120rem',
      },
      fontSize: {
        '3xl': ['1.875rem', '2.5rem'],
        '4xl': ['2.25rem', '2.75rem'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: ({ theme }) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
      }),
      minWidth: ({ theme }) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
        screen: '100vw',
      }),
      minHeight: ({ theme }) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
      }),
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text-default) !important',
            maxWidth: 'unset',

            strong: {
              fontWeight: '700',
            },

            img: {
              borderRadius: '0.5rem',
              width: 'auto',
            },

            figure: {
              display: 'flex',
              justifyContent: 'center',
            },
          },
        },
      }),
    },
  },
  daisyui: {
    styled: true,
    base: false,
    utils: true,
    logs: false,
    rtl: false,
    darkTheme: 'dark',
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: theme['primary']['DEFAULT'],
          'primary-content': theme['on-primary']['DEFAULT'],
          secondary: theme['secondary']['DEFAULT'],
          'secondary-content': theme['on-secondary']['DEFAULT'],
          accent: '#FFBC42',
          'accent-content': '#FFFFFF',
          neutral: '#D1D5DB',
          'neutral-content': '#FFFFFF',
          'info-content': '#FFFFFF',
          'warning-content': '#FFFFFF',
          'base-100': '#FFFFFF',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: theme['primary']['DEFAULT'],
          'primary-content': theme['on-primary']['DEFAULT'],
          secondary: theme['secondary']['DEFAULT'],
          'secondary-content': theme['on-secondary']['DEFAULT'],
          accent: '#FFBC42',
          'accent-content': '#FFFFFF',
          neutral: '#D1D5DB',
          'neutral-content': '#FFFFFF',
          'info-content': '#FFFFFF',
          'warning-content': '#FFFFFF',
          'base-100': '#111827',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('./tailwind/safe-area'),
    require('./tailwind/theming')({ theme }),

    plugin(({ addComponents }) => {
      addComponents({
        '.bg-card': {
          '--tw-bg-opacity': '1',
          backgroundColor: 'rgba(var(--bg-card-rgb), var(--tw-bg-opacity))',
        },
        '.bg-default': {
          '--tw-bg-opacity': '1',
          backgroundColor: 'rgba(var(--bg-default-rgb), var(--tw-bg-opacity))',
        },
        '.shadow-card': {
          '--tw-shadow': 'rgba(var(--shadow-card-rgb), 0.2) 0px 8px 24px',
          boxShadow:
            'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
        },
        '.text-default': {
          '--tw-text-opacity': '1',
          color: 'rgba(var(--text-default-rgb), var(--tw-text-opacity))',
        },
        '.text-hint': {
          '--tw-text-opacity': '1',
          color: 'rgba(var(--text-hint-rgb), var(--tw-text-opacity))',
        },
        '.text-disabled': {
          '--tw-text-opacity': '1',
          color: 'rgba(var(--text-disabled-rgb), var(--tw-text-opacity))',
        },
        '.no-scroll-bar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
} satisfies Config;
