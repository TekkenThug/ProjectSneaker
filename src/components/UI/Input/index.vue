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
      /**
       * Focus on input
       * @type {boolean}
       */
      focus: false,
    };
  },

  props: {
    /**
     * Input type
     */
    type: {
      type: String,
      default: 'text',
    },

    /**
     * Name for validator
     */
    name: {
      type: String,
      default: '',
    },

    /**
     * Input value
     */
    value: {
      type: String,
      default: '',
    },

    /**
     * Input placeholder
     */
    placeholder: {
      type: String,
      default: '',
    },

    /**
     * Input icon data
     */
    icon: {
      type: Object,
      default() {
        return {};
      },
    },

    /**
     * Kit of validation rules
     */
    validationRules: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    /**
     * Process validation rules
     * @returns {string}
     */
    rules() {
      if (this.validationRules.length > 0) {
        return this.validationRules.join('|');
      }

      return '';
    },
  },

  created() {
    /** Configure and launch validator */
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
  @import "~@/styles/variables";
  @import "~@/styles/mixins";

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
      text-align: left;
    }
  }
</style>
