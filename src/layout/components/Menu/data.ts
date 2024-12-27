export const MenuData = [
  {
    title: '发现',
    children: [
      {
        title: '发现',
        icon: 'ph:magnifying-glass',
        router: '/discover',
      },
      { title: 'MV', icon: 'ph:film-strip', router: '/mv' },
      {
        title: '歌单',
        icon: 'streamline:song-recommendation',
        router: '/discover/disonglist',
      },
    ],
  },
  {
    title: '工具',
    children: [
      {
        title: 'ChatGPT',
        icon: 'mdi:robot-angry-outline',
        router: '/chat',
      },
    ],
  },
  {
    title: '设置',
    children: [
      { title: '设置', icon: 'hugeicons:settings-03', router: '/setting' },
      {
        title: '主题',
        icon: 'unjs:theme-colors',
        router: '/theme',
      },
    ],
  },
]
