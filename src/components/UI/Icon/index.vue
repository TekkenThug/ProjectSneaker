<template>
  <svg
    :class="className"
    :width="iconData.width"
    :height="iconData.height"
    xmlns="http://www.w3.org/2000/svg"
    class="svg-icon"
  >
    <title v-if="iconData.title">{{ title }}</title>
    <use
      :xlink:href="iconPath"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    />
  </svg>
</template>

<script>
/**
 * Data property for Icon
 *
 * @typedef {object} IconData
 * @property {string|number} width - icon width
 * @property {string|number} height - icon height
 * @property {string} name - name in assets folder
 */

export default {
  name: 'SvgIcon',

  props: {
    /**
     * Icon data
     */
    iconData: {
      type: Object,
      required: true,
    },
  },

  computed: {
    /**
     * Resolve path to the icon
     * @returns {string}
     */
    iconPath() {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      let icon = require(`@/assets/icons/${this.iconData.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }

      return icon.url;
    },

    /**
     * Returns icon classname
     * @returns {string}
     */
    className() {
      return `svg-icon--${this.iconData.name}`;
    },
  },
};
</script>

<style>
  .svg-icon {
    fill: currentColor;
  }
</style>
