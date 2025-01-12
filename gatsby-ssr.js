// gatsby-ssr.js
import React from "react";
// gatsby-ssr.js
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="theme-initializer"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = savedTheme || (prefersDark ? 'dark' : 'light');
            document.documentElement.setAttribute('data-theme', theme);
          })();
        `,
      }}
    />,
  ]);
};
