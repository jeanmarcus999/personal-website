import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas:  '#FBFAF7',
        ink:     '#1A1A1A',
        muted:   '#5C5C5C',
        accent:  '#1F3A5F',
        rule:    '#E8E5DD',
      },
      fontFamily: {
        serif: ['"Source Serif 4 Variable"', '"Source Serif 4"', ...defaultTheme.fontFamily.serif],
        sans:  ['"Inter Variable"', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        reading: '68ch',
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.7' }],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body':     theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-links':    theme('colors.accent'),
            '--tw-prose-bold':     theme('colors.ink'),
            '--tw-prose-hr':       theme('colors.rule'),
            '--tw-prose-quotes':   theme('colors.muted'),
            '--tw-prose-captions': theme('colors.muted'),
            color:      theme('colors.ink'),
            fontFamily: '"Source Serif 4 Variable", Georgia, serif',
            fontSize:   '1.1rem',
            lineHeight: '1.8',
            maxWidth:   'none',
            a: {
              color: theme('colors.accent'),
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              textDecorationThickness: '1px',
              fontWeight: 'inherit',
              '&:hover': { opacity: '0.7' },
            },
            'h2': {
              fontFamily: '"Source Serif 4 Variable", Georgia, serif',
              fontSize: '1.35rem',
              fontWeight: '500',
              lineHeight: '1.35',
              marginTop: '2.5rem',
              marginBottom: '0.75rem',
            },
            'h3': {
              fontFamily: '"Source Serif 4 Variable", Georgia, serif',
              fontSize: '1.15rem',
              fontWeight: '500',
              lineHeight: '1.4',
              marginTop: '2rem',
              marginBottom: '0.5rem',
            },
            'strong': { fontWeight: '600' },
            'blockquote': {
              borderLeftColor: theme('colors.rule'),
              color: theme('colors.muted'),
              fontStyle: 'normal',
            },
            'hr': { borderColor: theme('colors.rule') },
            'code': {
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.9em',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
