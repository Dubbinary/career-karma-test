import { css } from "styled-components";


export const deviceOrientation = {
  both: "both",
  landscape: "landscape",
  portrait: "portrait",
};

export const deviceDescriptors = {
  // iPhones pre 4, 4/4s, 5/5s, SE
  iPhoneSmall: {
    minWidth: 0,
    maxWidth: 568,
    minPixRatio: 2
  },

  // iPhones 6/6S, 7, 8
  iPhone: {
    minWidth: 375,
    maxWidth: 667,
    minPixRatio: 2
  },

  // iPhone 6/6S Plus, 7 Plus, 8 Plus
  iPhonePlus: {
    minWidth: 414,
    maxWidth: 736,
    minPixRatio: 3
  },

  // iPhone X/XS
  iPhoneX: {
    minWidth: 375,
    maxWidth: 812,
    minHeight: 635,
    maxHeight: 718,
    minPixRatio: 3
  },

  // iPhone XS Max
  iPhoneXMax: {
    minWidth: 414,
    maxWidth: 896,
    minHeight: 719,
    maxHeight: 719,
    minPixRatio: 3
  },

  // iPhone XR
  iPhoneR: {
    minWidth: 414,
    maxWidth: 896,
    minHeight: 719,
    maxHeight: 719,
    minPixRatio: 2
  },

  // iPads 1, 2, Mini, Air
  iPadSmall: {
    minWidth: 768,
    maxWidth: 1024,
    minHeight: 1024,
    maxHeight: 1024,
    minPixRatio: 1
  },

  // iPads 3, 4, Pro 9.7"
  iPad: {
    minWidth: 768,
    maxWidth: 1024,
    minHeight: 1366,
    maxHeight: 1366,
    minPixRatio: 2
  },

  // Most of the Smartphones Mobiles (Portrait)
  mobiles: {
    minWidth: 0,
    maxWidth: 480,
    minPixRatio: 1
  },
  mobilesS: {
    minWidth: 0,
    maxWidth: 375,
    minPixRatio: 1
  },
  mobilesL: {
    minWidth: 375,
    maxWidth: 480,
    minPixRatio: 1
  },

  // Low Resolution Tablets, Mobiles (Landscape)
  tabletsLow: {
    minWidth: 481,
    maxWidth: 768,
    minPixRatio: 1
  },
  tabletsLowM: {
    minWidth: 600,
    maxWidth: 768,
    minPixRatio: 1
  },

  // Tablets, Ipads (portrait)
  tabletsP: {
    minWidth: 769,
    maxWidth: 1024,
    minPixRatio: 1
  },
  tabletsPL: {
    minWidth: 900,
    maxWidth: 1024,
    minPixRatio: 1
  },

  // Laptops, Desktops
  laptops: {
    minWidth: 1025,
    maxWidth: 1280,
    minPixRatio: 1
  },
  laptopsS: {
    minWidth: 1100,
    maxWidth: 1280,
    minPixRatio: 1
  },
  laptopsSL: {
    minWidth: 1281,
    maxWidth: 1511,
    minPixRatio: 1
  },
  laptopsL: {
    minWidth: 1512,
    maxWidth: 3840,
    minPixRatio: 1
  }
};


export function applyStyles(device, styles="") {

  let heightStatm = "";
  if (device.minHeight && device.maxHeight) {
    heightStatm = `
      and (min-height: ${device.minHeight}px)
      and (max-height: ${device.maxHeight}px)
    `;
  }

  return css`
    @media only screen
      and (min-width: ${device.minWidth}px)
      and (max-width: ${device.maxWidth}px)
      ${heightStatm}
      and (-webkit-min-device-pixel-ratio: ${device.minPixRatio}) {
        ${styles}
      }
  `;
}
