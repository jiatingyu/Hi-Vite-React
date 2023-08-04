import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig((props) => {
  let { command, mode } = props;
  console.log(props, command, mode);
  // eslint-disable-next-line no-undef
  let env = loadEnv(mode, path.join(process.cwd(), "env"), "");
  console.log(env.VITE_NAME1);
  return {
    // 共享配置
    base: "./",
    css: {
      preprocessorOptions: {
        less: { javascriptEnabled: true },
      },
      modules: {
        // scopeBehaviour: "local",
        // hashPrefix: "prefix",
        localsConvention: "camelCase",
        // generateScopedName: "[name]_[local]__[hash:base64:5]",
        // generateScopedName: (name, filename, css) => {
        //   // name -> 代表的是你此刻css文件中的类名
        //   // filename -> 是你当前css文件的绝对路径
        //   // css -> 给的就是你当前样式
        //   console.log("name", name, "filename", filename, "css", css); // 这一行会输出在哪？？？ 输出在node
        //   // 配置成函数以后, 返回值就决定了他最终显示的类型
        //   return `${name}_${Math.random().toString(36).substr(3, 8)}`;
        // },
      },
    },
    define: {
      custome: JSON.stringify(`${env.VITE_NAME1}`),
      // "import.meta.env.JTY": JSON.stringify("hahah"),
    },
    // envDir: "./env",
    plugins: [react()],
    // 服务器相关
    server: {
      host: "0.0.0.0",
      port: 5173,
      proxy: {},
    },
    //构建相关
    build: {
      target: ["chrome87"],
      outDir: "build",
      // dist 下的资源文件
      assetsDir: "assets",
    },
  };
});
