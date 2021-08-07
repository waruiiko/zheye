/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
  declare function require(string): string;
}
declare function require(string): string;
declare module "*.png" {
  const value: any;
  export = value;
}