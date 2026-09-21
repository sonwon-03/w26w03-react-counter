import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/w26w03-react-counter/', // 이 부분이 핵심입니다!
})