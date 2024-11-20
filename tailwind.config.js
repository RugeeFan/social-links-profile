/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 修改为你的项目结构路径
    './public/index.html',
  ],
  theme: {
    screens: {
      mobile: '375px', // 移动端起始宽度
      desktop: '1440px', // 桌面端设计宽度
    },
    colors: {
      green: 'hsl(75, 94%, 57%)',
      white: 'hsl(0, 0%, 100%)',
      grey: {
        700: 'hsl(0, 0%, 20%)',
        800: 'hsl(0, 0%, 12%)',
        900: 'hsl(0, 0%, 8%)',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'], // 使用 Inter 字体
    },
    fontSize: {
      base: '14px', // 段落默认字体大小
    },
    extend: {
      // 添加其他自定义样式
    },
  },
  plugins: [],
};
