/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF", // closest: 'white'
        black: "#1C2434", // Closest: 'black'
        red: "#FB5454", // Closest: 'red-500'
        "black-2": "#010101", // Closest: 'black'
        body: "#64748B", // Closest: 'gray-500'
        bodydark: "#AEB7C0", // Closest: 'gray-400'
        bodydark1: "#DEE4EE", // Closest: 'gray-200'
        bodydark2: "#8A99AF", // Closest: 'gray-500'
        primary: "#3C50E0", // Closest: 'blue-600'
        secondary: "#80CAEE", // Closest: 'cyan-400'
        stroke: "#E2E8F0", // Closest: 'gray-200'
        gray: "#EFF4FB", // Closest: 'gray-100'
        graydark: "#333A48", // Closest: 'gray-800'
        "gray-2": "#F7F9FC", // Closest: 'gray-100'
        "gray-3": "#FAFAFA", // Closest: 'gray-50'
        whiten: "#F1F5F9", // Closest: 'gray-100'
        whiter: "#F5F7FD", // Closest: 'gray-50'
        boxdark: "#24303F", // Closest: 'gray-900'
        "boxdark-2": "#1A222C", // Closest: 'gray-900'
        strokedark: "#2E3A47", // Closest: 'gray-800'
        "form-strokedark": "#3d4d60", // Closest: 'gray-700'
        "form-input": "#1d2a39", // Closest: 'gray-900'
        "meta-1": "#DC3545", // Closest: 'red-600'
        "meta-2": "#EFF2F7", // Closest: 'gray-100'
        "meta-3": "#10B981", // Closest: 'green-600'
        "meta-4": "#313D4A", // Closest: 'gray-800'
        "meta-5": "#259AE6", // Closest: 'blue-600'
        "meta-6": "#FFBA00", // Closest: 'yellow-500'
        "meta-7": "#FF6766", // Closest: 'red-500'
        "meta-8": "#F0950C", // Closest: 'orange-500'
        "meta-9": "#E5E7EB", // Closest: 'gray-200'
        "meta-10": "#0FADCF", // Closest: 'cyan-600'
        success: "#219653", // Closest: 'green-600'
        danger: "#D34053", // Closest: 'red-600'
        warning: "#FFA70B", // Closest: 'yellow-500'
        info: "#0FADCF", // Closest: 'cyan-600'
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
      },
      minHeight: {
        ...defaultTheme.height,
      },

      fontSize: {
        //TODO: remove some of the custom font sizes specifically for titles
        "title-xxl": ["44px", "55px"],
        "title-xxl2": ["42px", "58px"],
        "title-xl": ["36px", "45px"],
        "title-xl2": ["33px", "45px"],
        "title-lg": ["28px", "35px"],
        "title-md": ["24px", "30px"],
        "title-md2": ["26px", "30px"],
        "title-sm": ["20px", "26px"],
        "title-sm2": ["22px", "28px"],
        "title-xsm": ["18px", "24px"],
      },
      //TODO: remove some of the custom spacings
      spacing: {
        ...defaultTheme.spacing,
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        9.5: "2.375rem",
        10.5: "2.625rem",
        11: "2.75rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        13: "3.25rem",
        13.5: "3.375rem",
        14: "3.5rem",
        14.5: "3.625rem",
        15: "3.75rem",
        15.5: "3.875rem",
        16: "4rem",
        16.5: "4.125rem",
        17: "4.25rem",
        17.5: "4.375rem",
        18: "4.5rem",
        18.5: "4.625rem",
        19: "4.75rem",
        19.5: "4.875rem",
        21: "5.25rem",
        21.5: "5.375rem",
        22: "5.5rem",
        22.5: "5.625rem",
        24.5: "6.125rem",
        25: "6.25rem",
        25.5: "6.375rem",
        26: "6.5rem",
        27: "6.75rem",
        27.5: "6.875rem",
        29: "7.25rem",
        29.5: "7.375rem",
        30: "7.5rem",
        31: "7.75rem",
        32.5: "8.125rem",
        33: "8.25rem",
        34: "8.5rem",
        34.5: "8.625rem",
        35: "8.75rem",
        36.5: "9.125rem",
        37.5: "9.375rem",
        39: "9.75rem",
        39.5: "9.875rem",
        40: "10rem",
        42.5: "10.625rem",
        44: "11rem",
        45: "11.25rem",
        46: "11.5rem",
        47.5: "11.875rem",
        49: "12.25rem",
        50: "12.5rem",
        52: "13rem",
        52.5: "13.125rem",
        54: "13.5rem",
        54.5: "13.625rem",
        55: "13.75rem",
        55.5: "13.875rem",
        59: "14.75rem",
        60: "15rem",
        62.5: "15.625rem",
        65: "16.25rem",
        67: "16.75rem",
        67.5: "16.875rem",
        70: "17.5rem",
        72.5: "18.125rem",
        73: "18.25rem",
        75: "18.75rem",
        90: "22.5rem",
        94: "23.5rem",
        95: "23.75rem",
        100: "25rem",
        115: "28.75rem",
        125: "31.25rem",
        132.5: "33.125rem",
        150: "37.5rem",
        171.5: "42.875rem",
        180: "45rem",
        187.5: "46.875rem",
        203: "50.75rem",
        230: "57.5rem",
        242.5: "60.625rem",
      },
      maxWidth: {
        2.5: "0.625rem",
        3: "0.75rem",
        4: "1rem",
        7: "1.75rem",
        9: "2.25rem",
        10: "2.5rem",
        10.5: "2.625rem",
        11: "2.75rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        22.5: "5.625rem",
        25: "6.25rem",
        30: "7.5rem",
        34: "8.5rem",
        35: "8.75rem",
        40: "10rem",
        42.5: "10.625rem",
        44: "11rem",
        45: "11.25rem",
        60: "15rem",
        70: "17.5rem",
        90: "22.5rem",
        94: "23.5rem",
        125: "31.25rem",
        132.5: "33.125rem",
        142.5: "35.625rem",
        150: "37.5rem",
        180: "45rem",
        203: "50.75rem",
        230: "57.5rem",
        242.5: "60.625rem",
        270: "67.5rem",
        280: "70rem",
        292.5: "73.125rem",
      },
      maxHeight: {
        35: "8.75rem",
        70: "17.5rem",
        90: "22.5rem",
        550: "34.375rem",
        300: "18.75rem",
      },
      minWidth: {
        ...defaultTheme.width,
        22.5: "5.625rem",
        42.5: "10.625rem",
        47.5: "11.875rem",
        75: "18.75rem",
      },
      zIndex: {
        999999: "999999",
        99999: "99999",
        9999: "9999",
        999: "999",
        99: "99",
        9: "9",
        1: "1",
      },
      opacity: {
        65: ".65",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "21/9": "21 / 9",
      },
      backgroundImage: {
        video: "url('../images/video/video.png')",
      },
      content: {
        "icon-copy": 'url("../images/icon/icon-copy-alt.svg")',
      },
      transitionProperty: { width: "width", stroke: "stroke" },

      boxShadow: {
        default: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
        card: "0px 1px 3px rgba(0, 0, 0, 0.12)",
        "card-2": "0px 1px 2px rgba(0, 0, 0, 0.05)",
        switcher: "0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        1: "0px 1px 3px rgba(0, 0, 0, 0.08)",
        2: "0px 1px 4px rgba(0, 0, 0, 0.12)",
        3: "0px 1px 5px rgba(0, 0, 0, 0.14)",
        4: "0px 4px 10px rgba(0, 0, 0, 0.12)",
        5: "0px 1px 1px rgba(0, 0, 0, 0.15)",
        6: "0px 3px 15px rgba(0, 0, 0, 0.1)",
        7: "-5px 0 0 #313D4A, 5px 0 0 #313D4A",
        8: "1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)",
        9: "0px 2px 3px rgba(183, 183, 183, 0.5)",
        10: "0px 1px 2px 0px rgba(0, 0, 0, 0.10)",
        11: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
        12: "0px 0.5px 3px 0px rgba(0, 0, 0, 0.18)",
        13: "0px 1px 3px 0px rgba(0, 0, 0, 0.08)",
        14: "0px 2px 3px 0px rgba(0, 0, 0, 0.10)",
      },
      dropShadow: {
        1: "0px 1px 0px #E2E8F0",
        2: "0px 1px 4px rgba(0, 0, 0, 0.12)",
        3: "0px 0px 4px rgba(0, 0, 0, 0.15)",
        4: "0px 0px 2px rgba(0, 0, 0, 0.2)",
        5: "0px 1px 5px rgba(0, 0, 0, 0.2)",
      },
      keyframes: {
        linspin: {
          "100%": { transform: "rotate(360deg)" },
        },
        easespin: {
          "12.5%": { transform: "rotate(135deg)" },
          "25%": { transform: "rotate(270deg)" },
          "37.5%": { transform: "rotate(405deg)" },
          "50%": { transform: "rotate(540deg)" },
          "62.5%": { transform: "rotate(675deg)" },
          "75%": { transform: "rotate(810deg)" },
          "87.5%": { transform: "rotate(945deg)" },
          "100%": { transform: "rotate(1080deg)" },
        },
        "left-spin": {
          "0%": { transform: "rotate(130deg)" },
          "50%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(130deg)" },
        },
        "right-spin": {
          "0%": { transform: "rotate(-130deg)" },
          "50%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(-130deg)" },
        },
        rotating: {
          "0%, 100%": { transform: "rotate(360deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        topbottom: {
          "0%, 100%": { transform: "translate3d(0, -100%, 0)" },
          "50%": { transform: "translate3d(0, 0, 0)" },
        },
        bottomtop: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -100%, 0)" },
        },
        line: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(100%)" },
        },
        "line-revert": {
          "0%, 100%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        linspin: "linspin 1568.2353ms linear infinite",
        easespin: "easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
        "left-spin": "left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
        "right-spin": "right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
        "ping-once": "ping 5s cubic-bezier(0, 0, 0.2, 1)",
        rotating: "rotating 30s linear infinite",
        topbottom: "topbottom 60s infinite alternate linear",
        bottomtop: "bottomtop 60s infinite alternate linear",
        "spin-1.5": "spin 1.5s linear infinite",
        "spin-2": "spin 2s linear infinite",
        "spin-3": "spin 3s linear infinite",
        line1: "line 10s infinite linear",
        line2: "line-revert 8s infinite linear",
        line3: "line 7s infinite linear",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
