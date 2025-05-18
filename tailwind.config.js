const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xxxxs': '280px',  // juda kichik ekranlar (ba'zi eski telefonlar)
      'xxxs': '320px',   // eski telefonlar o‘lchami
      'xxs': '360px',    // kichik telefonlar
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
});