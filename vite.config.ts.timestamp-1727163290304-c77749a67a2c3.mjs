// vite.config.ts
import { defineConfig } from "file:///D:/KADEA/Back-End/ADONIS%20JS/adonisDemo/node_modules/vite/dist/node/index.js";
import adonisjs from "file:///D:/KADEA/Back-End/ADONIS%20JS/adonisDemo/node_modules/@adonisjs/vite/build/src/client/main.js";
var vite_config_default = defineConfig({
  plugins: [
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ["resources/css/app.css", "resources/js/app.js"],
      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ["resources/views/**/*.edge"]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxLQURFQVxcXFxCYWNrLUVuZFxcXFxBRE9OSVMgSlNcXFxcYWRvbmlzRGVtb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcS0FERUFcXFxcQmFjay1FbmRcXFxcQURPTklTIEpTXFxcXGFkb25pc0RlbW9cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0tBREVBL0JhY2stRW5kL0FET05JUyUyMEpTL2Fkb25pc0RlbW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IGFkb25pc2pzIGZyb20gJ0BhZG9uaXNqcy92aXRlL2NsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIGFkb25pc2pzKHtcbiAgICAgIC8qKlxuICAgICAgICogRW50cnlwb2ludHMgb2YgeW91ciBhcHBsaWNhdGlvbi4gRWFjaCBlbnRyeXBvaW50IHdpbGxcbiAgICAgICAqIHJlc3VsdCBpbiBhIHNlcGFyYXRlIGJ1bmRsZS5cbiAgICAgICAqL1xuICAgICAgZW50cnlwb2ludHM6IFsncmVzb3VyY2VzL2Nzcy9hcHAuY3NzJywgJ3Jlc291cmNlcy9qcy9hcHAuanMnXSxcblxuICAgICAgLyoqXG4gICAgICAgKiBQYXRocyB0byB3YXRjaCBhbmQgcmVsb2FkIHRoZSBicm93c2VyIG9uIGZpbGUgY2hhbmdlXG4gICAgICAgKi9cbiAgICAgIHJlbG9hZDogWydyZXNvdXJjZXMvdmlld3MvKiovKi5lZGdlJ10sXG4gICAgfSksXG4gIF0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVCxTQUFTLG9CQUFvQjtBQUM3VSxPQUFPLGNBQWM7QUFFckIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLUCxhQUFhLENBQUMseUJBQXlCLHFCQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSzVELFFBQVEsQ0FBQywyQkFBMkI7QUFBQSxJQUN0QyxDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
