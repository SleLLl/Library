import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import compress from 'vite-plugin-compress';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [compress(), reactRefresh()],
});
