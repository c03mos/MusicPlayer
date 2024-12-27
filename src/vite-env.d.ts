/// <reference types="vite/client" />
interface ImportMetaEnv {
  /** 本地开发-端口号 */
  readonly VITE_APP_BASE_API: 'https://musicapi.187088.xyz/'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
