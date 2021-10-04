<template>
  <validation-provider
    tag="div"
    :rules="rules"
    v-slot="{ errors, classes }"
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
import { ValidationProvider, extend, configure } from 'vee-validate';
import * as rulesDict from 'vee-validate/dist/rules';
import i18n from '@/services/translate/i18n';

import Icon from '@/components/UI/Icon';

const PASSWORD_REGEX = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);

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

    extend('password', (value) => {
      if (PASSWORD_REGEX.test(value)) {
        return true;
      }

      return i18n.t('validations.password');
    });

    if (this.validationRules.length > 0) {
      this.validationRules.forEach((rule) => {
        extend(rule, {
          ...rulesDict[rule],
          message: i18n.t(`validations.${rule}`),
        });
      });
    }
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
