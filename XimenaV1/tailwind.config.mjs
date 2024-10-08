/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      typography: (theme) => ({
        blue: {
          css: {
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-headings': theme('colors.blue.600'),
            '--tw-prose-lead': theme('colors.gray.500'),
            '--tw-prose-links': theme('colors.blue.600'),
            '--tw-prose-bold': theme('colors.blue.600'),
            '--tw-prose-counters': theme('colors.blue.600'),
            '--tw-prose-bullets': theme('colors.blue.600'),
            '--tw-prose-hr': theme('colors.blue.600'),
            '--tw-prose-quotes': theme('colors.blue.600'),
            '--tw-prose-quote-borders': theme('colors.blue.600'),
            '--tw-prose-captions': theme('colors.blue.600'),
            '--tw-prose-code': theme('colors.blue.600'),
            '--tw-prose-pre-code': theme('colors.blue.600'),
            '--tw-prose-pre-bg': theme('colors.blue.600'),
            '--tw-prose-th-borders': theme('colors.blue.600'),
            '--tw-prose-td-borders': theme('colors.blue.600'),
            '--tw-prose-invert-body': theme('colors.blue.600'),
            '--tw-prose-invert-headings': theme('colors.blue.600'),
            '--tw-prose-invert-lead': theme('colors.blue.600'),
            '--tw-prose-invert-links': theme('colors.blue.600'),
            '--tw-prose-invert-bold': theme('colors.blue.600'),
            '--tw-prose-invert-counters': theme('colors.blue.600'),
            '--tw-prose-invert-bullets': theme('colors.blue.600'),
            '--tw-prose-invert-hr': theme('colors.blue.600'),
            '--tw-prose-invert-quotes': theme('colors.blue.600'),
            '--tw-prose-invert-quote-borders': theme('colors.blue.600'),
            '--tw-prose-invert-captions': theme('colors.blue.600'),
            '--tw-prose-invert-code': theme('colors.blue.600'),
            '--tw-prose-invert-pre-code': theme('colors.blue.600'),
            '--tw-prose-invert-pre-bg': theme('colors.blue.600'),
            '--tw-prose-invert-th-borders': theme('colors.blue.600'),
            '--tw-prose-invert-td-borders': theme('colors.blue.600'),
          },
        },
      }),
    },
  },
	plugins: [require('@tailwindcss/typography')],
}
