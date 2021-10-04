<template>
  <validation-provider
    tag="div"
    :rules="rules"
    v-slot="{ errors, classes }"
    :name="name"
  >
    <div
      class="ui-input"
      :class="{
        ...classes,
        'ui-input--focused': focus,
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
    <div class="ui-input__error">
      {{ errors[0] }}
    </div>
  </validation-provider>
</template>

<script>
import { ValidationProvider, configure } from 'vee-validate';
import initialValidate from '@/services/validate';

import Icon from '@/components/UI/Icon';

export default {
  name: 'Input',
  components: { Icon, ValidationProvider },

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
    name: {
      type: String,
      default: '',
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
    validationRules: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    rules() {
      if (this.validationRules.length > 0) {
        return this.validationRules.join('|');
      }

      return '';
    },
  },

  created() {
    configure({
      classes: {
        invalid: 'ui-input--error',
      },
    });

    initialValidate();
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
        background-color: rgba($alert_error, .15);
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

    &__error {
      font-size: 12px;
      line-height: 16px;
      color: $color-4;
      font-weight: 700;
      margin-top: 5px;
    }
  }
</style>
