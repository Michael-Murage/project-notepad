import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // '@menu-dark-bg': '#ECC13B',
          // '@menu-dark-color': '#251E8C',
          // '@menu-dark-item-hover-bg': '#251E8C',
          // '@layout-body-background': '#fff',
          // '@layout-header-padding': '0px 40px',
          // '@menu-item-padding-horizontal': '20px',
          // '@divider-color': '#ECC13B',
          // '@tabs-card-active-color': '#000',
          // '@btn-primary-bg': '#ECC13B'
        }
      },
    },
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: "" },
    ],
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
	server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
