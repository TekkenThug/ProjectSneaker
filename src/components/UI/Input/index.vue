<template>
  <div
    class="ui-input"
    :class="{
      'ui-input--focused': focus,
      'ui-input--error': isError,
    }"
  >
    <icon
      class="ui-input__icon"
      v-if="Object.keys(icon).length"
      :icon-data="icon"
    />
    <input
      :value="value"
      :placeholder="placeholder"
      :type="type"
      @input="$emit('input', $event.target.value)"
      @focusin="focus = true"
      @focusout="focus = false"
    >
  </div>
</template>

<script>
import Icon from '@/components/UI/Icon';

export default {
  name: 'Input',
  components: { Icon },

  data() {
    return {
      focus: false,
    };
  },

  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    icon: {
      type: Object,
      default() {
        return {};
      },
    },
    error: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isError() {
      return this.error && !this.focus;
    },
  },
};
</script>

<style lang="scss" scoped>
  .ui-input {
    @include trans;

    position: relative;
    display: flex;
    align-items: center;
    margin: 0 auto;

    &::after {
      @include trans;

      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      cursor: text;
      pointer-events: none;
      border: 3px solid $color-4;
      border-radius: 7px;
      opacity: 0;
    }

    &--focused {
      &::after {
        opacity: 1;
      }
    }

    &--error {
      &::after {
        opacity: 1;
        border-color: $alert_error;
        background-color: rgba($alert_error, .3);
      }
    }

    input {
      @include shadowUI;

      padding: 8px 15px;
      border-radius: 7px;
      background-color: transparent;
      border: 1px solid rgba($color-3, .7);
      flex-grow: 1;

      &:focus {
        outline: none;
      }

      &::placeholder {
        opacity: .5;
      }
    }

    &__icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);

      + input {
        padding-left: 35px;
      }
    }
  }
</style>
