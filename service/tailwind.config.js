/** @type {import('tailwindcss').Config} */

(
  module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          // 색상 정의
          'neutral-black': '#000000',
          'neutral-white': '#FFFFFF',
          'neutral-50': '#F4F6F7',
          'neutral-100': '#E3E7EA',
          'neutral-500': '#7F878E',
          'neutral-950': '#22252A',
          'primary-blue': '#0128FF',
          'primary-purple': '#AD00FF',
          'primary-violetblue': '#8285F6',
          'primary-babyblue': '#DBEAFF',
          'primary-bluegray': '#DFE5F6',
          'primary-cobaltblue': '#C5F0FF',
          'primary-berrypurple': '#5845F3',
          'background-lightgray': '#EFF0F1',
          'background-lightblue': '#E0EAFF',
          'shadow-bluepurple': '#D4D3E3',
          'op-30-blue': 'rgba(1, 40, 255, 0.30)',
        },
        backgroundImage: {
          //그림 배경 정의
          'new-car-intro': "url('@/assets/images/newCarIntroBg.svg')",
          'join-event-main': "url('@/assets/images/joinEventMainBg.svg')",
          'miniquiz-paper': "url('@/assets/images/miniQuizBg.svg')",
          // 그라데이션 색상 정의
          'gradient-blue-purple':
            'linear-gradient(90deg, #0128FF 0%, #AD00FF 100%)',
          'gradient-cobaltblue-white':
            'linear-gradient(90deg, #C5F0FF 0%, #FFF 100%)',
          'gradient-violetblue-cobaltblue':
            'linear-gradient(90deg, #8285F6 0%, #C5F0FF 100%)',
          'gradient-lightblue-white':
            'linear-gradient(90deg, #E0EAFF 0%, #FFF 100%)',
          'gradient-cobaltblue-white-opposite':
            'linear-gradient(270deg, #C5F0FF 0%, #FFF 100%)',
          'gradient-lightblue-white-vertical':
            'linear-gradient(180deg, #E0EAFF 0%, #FFF 100%)',
          'gradient-cobaltblue-white-vertical':
            'linear-gradient(180deg, #C5F0FF 0%, #FFF 100%)',
          card1: 'linear-gradient(180deg, #C5F0FF 0%, #FFF 99.95%)',
          card2: 'linear-gradient(180deg, #E0EAFF 0%, #FFF 99.95%)',
        },
        fontFamily: { poppins: ['"Poppins"', 'sans-serif'] },
        fontSize: {
          // 폰트 크기 정의
          'heading-banner-title': [
            '88px',
            {
              lineHeight: '100px',
              fontWeight: '700',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-banner-title-2': [
            '80px',
            {
              lineHeight: '90px',
              fontWeight: '700',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-banner-title-3': [
            '72px',
            {
              lineHeight: '80px',
              fontWeight: '700',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-1-bold': [
            '48px',
            {
              lineHeight: '70px',
              fontWeight: '700',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-1-semibold': [
            '48px',
            {
              lineHeight: '70px',
              fontWeight: '600',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-1-medium': [
            '48px',
            {
              lineHeight: '70px',
              fontWeight: '500',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-1-regular': [
            '48px',
            {
              lineHeight: '70px',
              fontWeight: '400',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-2-bold': [
            '44px',
            {
              lineHeight: '70px',
              fontWeight: '700',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-2-semibold': [
            '44px',
            {
              lineHeight: '70px',
              fontWeight: '600',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-2-medium': [
            '44px',
            {
              lineHeight: '70px',
              fontWeight: '500',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-2-regular': [
            '44px',
            {
              lineHeight: '70px',
              fontWeight: '400',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-3-bold': [
            '40px',
            {
              lineHeight: '70px',
              fontWeight: '700',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-3-semibold': [
            '40px',
            {
              lineHeight: '70px',
              fontWeight: '600',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-3-medium': [
            '40px',
            {
              lineHeight: '70px',
              fontWeight: '500',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'heading-3-regular': [
            '40px',
            {
              lineHeight: '70px',
              fontWeight: '400',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'body-1-bold': [
            '36px',
            {
              lineHeight: '54px',
              fontWeight: '700',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'body-1-semibold': [
            '36px',
            { lineHeight: '54px', fontWeight: '600' },
          ],
          'body-1-medium': [
            '36px',
            {
              lineHeight: '54px',
              fontWeight: '500',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'body-1-regular': [
            '36px',
            {
              lineHeight: '54px',
              fontWeight: '400',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'body-2-bold': [
            '32px',
            {
              lineHeight: '54px',
              fontWeight: '700',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'body-2-semibold': [
            '32px',
            {
              lineHeight: '54px',
              fontWeight: '600',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'body-2-medium': [
            '32px',
            {
              lineHeight: '54px',
              fontWeight: '500',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'body-2-regular': [
            '32px',
            {
              lineHeight: '54px',
              fontWeight: '400',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'body-3-bold': [
            '28px',
            {
              lineHeight: '54px',
              fontWeight: '700',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'body-3-semibold': [
            '28px',
            {
              lineHeight: '54px',
              fontWeight: '600',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'body-3-medium': [
            '28px',
            {
              lineHeight: '54px',
              fontWeight: '500',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'body-3-regular': [
            '28px',
            {
              lineHeight: '54px',
              fontWeight: '400',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'detail-1-bold': [
            '24px',
            {
              lineHeight: '36px',
              fontWeight: '700',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'detail-1-semibold': [
            '24px',
            {
              lineHeight: '36px',
              fontWeight: '600',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'detail-1-medium': [
            '24px',
            {
              lineHeight: '36px',
              fontWeight: '500',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'detail-1-regular': [
            '24px',
            {
              lineHeight: '36px',
              fontWeight: '400',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'detail-2-bold': [
            '20px',
            {
              lineHeight: '32px',
              fontWeight: '700',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'detail-2-semibold': [
            '20px',
            {
              lineHeight: '32px',
              fontWeight: '600',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'detail-2-medium': [
            '20px',
            {
              lineHeight: '32px',
              fontWeight: '500',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'detail-2-regular': [
            '20px',
            {
              lineHeight: '32px',
              fontWeight: '400',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'detail-3-semibold': [
            '16px',
            {
              lineHeight: '20px',
              fontWeight: '600',
              fontFamily: 'Pretendard Variable',
            },
          ],
          'detail-3-regular': [
            '16px',
            {
              lineHeight: '20px',
              fontWeight: '400',
              fontFamily: 'Pretendard Variable',
            },
          ],
        },
        spacing: {
          // 여백 정의
          0: '0px',
          100: '4px',
          200: '8px',
          300: '12px',
          400: '16px',
          500: '20px',
          600: '24px',
          700: '28px',
          800: '32px',
          900: '36px',
          1000: '40px',
          1100: '44px',
          1200: '48px',
          1300: '52px',
          1400: '56px',
          1500: '60px',
          1600: '64px',
          1700: '68px',
          1800: '72px',
          1900: '76px',
          2000: '80px',
          2500: '112px',
          2900: '140px',
          3000: '180px',
          4000: '200px',
          5000: '240px',
          6000: '360px',
        },
        boxShadow: {
          '3xl': '0 30px 30px -15px rgba(0, 0, 0, 0.3) ',
        },
        keyframes: {
          'slide-down': {
            '0%': { transform: 'translateY(-100vh)' },
            '100%': { transform: 'translateY(0)' },
          },
          'slide-up': {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-100vh)' },
          },
          expandLeftToRight: {
            '0%': { width: '50%' },
            '100%': { width: '100%' },
          },
          expandRightToLeft: {
            '0%': { width: '50%' },
            '100%': { width: '100%' },
          },
          contractionLeftToRight: {
            '0%': { width: '50%' },
            '100%': { width: '0%' },
          },
          contractionRightToLeft: {
            '0%': { width: '50%' },
            '100%': { width: '0%' },
          },
        },
        animation: {
          'slide-down': 'slide-down 0.5s ease-out forwards',
          'slide-up': 'slide-up 0.5s ease-in forwards',
          'slide-left-to-right': 'expandLeftToRight 1s forwards',
          'slide-right-to-left': 'expandRightToLeft 1s forwards',
          'remove-left-to-right': 'contractionLeftToRight 1s forwards',
          'remove-right-to-left': 'contractionRightToLeft 1s forwards',
        },
      },
    },
    plugins: [
      // eslint-disable-next-line func-names
      function ({ addUtilities }) {
        addUtilities({
          '.text-gradient-blue-purple': {
            background: 'linear-gradient(90deg, #0128FF 0%, #AD00FF 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          },
          '.text-gradient-cobaltblue-white': {
            background: 'linear-gradient(90deg, #C5F0FF 0%, #FFF 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          },
          '.text-gradient-violetblue-cobaltblue': {
            background: 'linear-gradient(90deg, #8285F6 0%, #C5F0FF 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          },
          '.text-gradient-lightblue-white': {
            background: 'linear-gradient(90deg, #E0EAFF 0%, #FFF 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          },
        });
      },
    ],
  }
);
