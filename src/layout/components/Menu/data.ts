export const MenuData = [
  {
    title: '',
    children: [
      { title: '首页', icon: 'solar:home-smile-broken', router: '/home' },

    ],
  },
  {
    title: '发现',
    children: [
      {
        title: '发现',
        icon: 'ph:magnifying-glass',
        router: '/discover',
        shortcut: 'D',
      },
      { title: 'MV', icon: 'ph:film-strip', router: '/mv' },
      {
        title: '歌单',
        icon: 'streamline:song-recommendation',
        router: '/discover/disonglist',
      },
      { title: '动漫', icon: 'tdesign:film', router: '/animation' },
    ],
  },
  {
    title: '实验性测试',
    children: [
      {
        title: 'ChatGPT',
        icon: 'mdi:robot-angry-outline',
        router: '/chat',
      },
      { title: '工具', icon: 'tdesign:film', router: '/utils' },
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
        shortcut: 'Q',
      },
    ],
  },
]
