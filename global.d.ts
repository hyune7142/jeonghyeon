declare module '*.svg?component' {
  import React from 'react';
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export const src: string;
  export default svg;
}

declare module '*.svg?url' {
  const url: string;
  export default url;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
