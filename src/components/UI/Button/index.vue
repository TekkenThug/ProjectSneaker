<template>
  <button
    class="ui-btn"
    @click="$emit('click')"
  >
    <icon
      class="ui-btn__icon"
      v-if="Object.keys(icon).length"
      :icon-data="icon"
    />
    {{ title }}
  </button>
</template>

<script>
import Icon from '@/components/UI/Icon';

export default {
  name: 'Btn',
  components: { Icon },
  props: {
    icon: {
      default() {
        return {};
      },
      type: Object,
    },
    title: {
      default: '',
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables";
  @import "~@/styles/mixins";

  .ui-btn {
    @include trans;

    padding: 10px 15px;
    background-color: $color-4;
    border-radius: 7px;
    color: $color-1;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;

    &__icon {
      margin-right: 8px;
    }

    &:hover {
      @include shadowUI;
    }

    &:active {
      background-color: $color-4-1;
    }
  }
</style>
