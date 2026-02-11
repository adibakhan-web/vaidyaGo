// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          900: '#3e2723',
        },
      },
      screens: {
        mobile: { max: '767px' },  // 767px tak chalega
        desktop: { min: '768px' }, // 768px se upar chalega
        tablet: { min: '768px', max: '1024px' }, // tablet
        custom: { min: '790px', max: '1024px' },
        midGap: { min: '768px', max: '791px' },
        smallGap: { min: '777px', max: '789px' },
        smallDevice: { min: '784px', max: '1017px' },
        smallTab: { min: '768px', max: '783px' }, 
        tinyTab: { min: '768px', max: '780px' },
        below764: { max: '763px' },
      },
    },
  },
  plugins: [],
}
// // tailwind.config.js
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brown: {
//           900: '#3e2723',
//         },
//       },
//       screens: {
//         mobile: { max: '767px' },      // mobile devices
//         tablet: { min: '768px', max: '1024px' }, // tablets
//         desktop: { min: '1025px' },    // desktops and up
//       },
//     },
//   },
//   plugins: [],
// }
