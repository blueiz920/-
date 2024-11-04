// src/custom.d.ts
declare module '*.svg' {
    const content: string;
    export default content;
  }
  

// src/custom.d.ts
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
  }
  