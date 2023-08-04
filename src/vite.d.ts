declare module "*.jpg" {
  // type ctx = { [key: string]: string };
  type ctx = string;
  let url: ctx;
  export default url;
}

declare module "*.svg";
declare module "*.less";
declare module "*.css" {
  type ctx1 = { [key: string]: string };
  let css: ctx1;
  export default css;
}
