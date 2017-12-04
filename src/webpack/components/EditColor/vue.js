import template from './template.js';

export default {
  data: function() {
    return {};
  },
  template: template,
  props: [
    'target',
    'parts',
    'color',
  ],
  methods: {
  },
  computed: {
    colorTarget: function() {
      let target = this.target;
      if (target === 'hairFront' || target === 'hairBack') {
        target = 'hair';
      }

      return target;
    },
  },
};
