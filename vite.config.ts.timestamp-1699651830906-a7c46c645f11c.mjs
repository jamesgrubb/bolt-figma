// vite.config.ts
import { defineConfig } from "file:///C:/Users/justin/Documents/Dev/Hyper-Brew/bolt-figma/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///C:/Users/justin/Documents/Dev/Hyper-Brew/bolt-figma/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import { viteSingleFile } from "file:///C:/Users/justin/Documents/Dev/Hyper-Brew/bolt-figma/node_modules/vite-plugin-singlefile/dist/esm/index.js";
import { execSync } from "child_process";
try {
  const res = execSync("yarn tsc ./src/code.ts --outDir ./dist");
  console.log(res.toString());
} catch (e) {
}
var vite_config_default = defineConfig({
  plugins: [svelte(), viteSingleFile()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqdXN0aW5cXFxcRG9jdW1lbnRzXFxcXERldlxcXFxIeXBlci1CcmV3XFxcXGJvbHQtZmlnbWFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGp1c3RpblxcXFxEb2N1bWVudHNcXFxcRGV2XFxcXEh5cGVyLUJyZXdcXFxcYm9sdC1maWdtYVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvanVzdGluL0RvY3VtZW50cy9EZXYvSHlwZXItQnJldy9ib2x0LWZpZ21hL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHN2ZWx0ZSB9IGZyb20gXCJAc3ZlbHRlanMvdml0ZS1wbHVnaW4tc3ZlbHRlXCI7XG5pbXBvcnQgeyB2aXRlU2luZ2xlRmlsZSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zaW5nbGVmaWxlXCI7XG5pbXBvcnQgeyBleGVjU3luYyB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5cbnRyeSB7XG4gIGNvbnN0IHJlcyA9IGV4ZWNTeW5jKFwieWFybiB0c2MgLi9zcmMvY29kZS50cyAtLW91dERpciAuL2Rpc3RcIik7XG4gIGNvbnNvbGUubG9nKHJlcy50b1N0cmluZygpKTtcbn0gY2F0Y2ggKGUpIHtcbiAgLy8gY29uc29sZS5sb2coZSk7XG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbc3ZlbHRlKCksIHZpdGVTaW5nbGVGaWxlKCldLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlWLFNBQVMsb0JBQW9CO0FBQ3RYLFNBQVMsY0FBYztBQUN2QixTQUFTLHNCQUFzQjtBQUMvQixTQUFTLGdCQUFnQjtBQUV6QixJQUFJO0FBQ0YsUUFBTSxNQUFNLFNBQVMsd0NBQXdDO0FBQzdELFVBQVEsSUFBSSxJQUFJLFNBQVMsQ0FBQztBQUM1QixTQUFTLEdBQUc7QUFFWjtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO0FBQ3RDLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==