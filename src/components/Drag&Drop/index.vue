<template>
  <validation-provider
    tag="div"
    rules="image"
    ref="dragUploader"
    v-slot="{ errors }"
  >
    <label
      class="drag"
      :class="{
        'drag--entered': entered || fileInstance,
      }"
      @dragenter.prevent="entered = true"
      @dragleave.prevent="entered = false"
      @dragover.prevent
      @drop.prevent="fileHandler"
    >
      <input
        @change="fileHandler"
        class="drag__input"
        type="file"
      >

      <span v-if="fileInstance">
        {{ fileInstance.name }}
      </span>

      <span
        v-else
        class="drag__default"
      >
        <icon
          class="drag__default-icon"
          :icon-data="iconData"
        />

        <b class="drag__default-title">
          {{ errors.length ? errors[0] : $t(title) }}
        </b>
      </span>
    </label>
  </validation-provider>
</template>
<script>
import { ValidationProvider, extend } from 'vee-validate';
import { image } from 'vee-validate/dist/rules';

import Icon from '@/components/UI/Icon';
import i18n from '@/services/translate/i18n';

export default {
  name: 'Draggable',

  components: { Icon, ValidationProvider },

  props: {
    /**
     * Title for drag&drop
     */
    title: {
      type: String,
      default: 'Insert the image of the sneakers',
    },
  },

  data() {
    return {
      /**
       * Data for icon component
       * @type {object}
       */
      iconData: {
        width: 32,
        height: 32,
        name: 'image-add',
      },

      /**
       * File is entered
       * @type {boolean}
       */
      entered: false,

      /**
       * Entered file object
       * @type {File}
       */
      fileInstance: null,
    };
  },
  methods: {
    /**
     * Handler for file selection
     * @param {Event} event - selection event
     * @returns {Promise<void>}
     */
    async fileHandler(event) {
      const files = Array.from(event.dataTransfer?.files || event.target.files);
      const { valid } = await this.$refs.dragUploader.validate(files);

      if (valid) {
        this.fileInstance = files[0];
        this.$emit('fileUpload', this.fileInstance);
      } else {
        this.$renderVue.createAlert('error', this.$t('Error loading file'));
      }
    },

    /**
     * Clear file instance
     * @returns {void}
     */
    clearDrop() {
      this.fileInstance = null;
    },
  },

  created() {
    /** Set validation rule for image */
    extend('image', {
      ...image,
      message: i18n.t('validations.image'),
    });
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables";
  @import "~@/styles/mixins";

  .drag {
    @include trans;

    border: 3px dashed $color-4;
    border-radius: 15px;
    padding: 15px 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    user-select: none;
    position: relative;
    cursor: pointer;

    &:hover {
      border-color: $color-5;
    }

    &__input {
      display: none;
    }

    &__default {
      display: flex;
      flex-direction: column;
      align-items: center;
      pointer-events: none;
    }

    &__default-title {
      font-weight: 700;
      margin-top: 5px;
    }

    &--entered {
      background-color: $color-4;
      color: $color-2;
      border-style: solid;

      &:hover {
        border-color: $color-4;
      }
    }
  }
</style>
