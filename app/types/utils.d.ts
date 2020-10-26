declare module '*.svg';

declare module '*.jpg';

declare module '*.wav';

declare module '*.png';

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
