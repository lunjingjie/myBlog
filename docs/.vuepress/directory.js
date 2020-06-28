module.exports = {
  tabList: [
    {
      text: 'VueJs',
      link: '/vuejs/vue-press-deploy/',
    },
    {
      text: 'JavaScript',
      link: '/javascript/'
    },
  ],
  directory: {
    '/vuejs/': [
      {
        title: 'vue-press',
        collapsable: false,
        children: [
          'vue-press-deploy/deploy'
        ],
      },
    ],
  },
};
