<template>
  <svg
    :class="className"
    :width="iconData.width"
    :height="iconData.height"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title v-if="iconData.title">{{ title }}</title>
    <use
      :xlink:href="iconPath"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',

  props: {
    iconData: {
      type: Object,
      required: true,
    },
  },

  computed: {
    iconPath() {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      let icon = require(`@/assets/icons/${this.iconData.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }

      return icon.url;
    },

    className() {
      return `svg-icon svg-icon--${this.iconData.name}`;
    },
  },
};
</script>

<style>
  .svg-icon {
    fill: currentColor;
  }
</style>
