export default {
  data: function() {
    return {};
  },
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
}
