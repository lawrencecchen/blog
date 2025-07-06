import {} from 'preact';

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}