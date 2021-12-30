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
    title: {
      type: String,
      default: 'Insert the image of the sneakers',
    },
  },
  data() {
    return {
      iconData: {
        width: 32,
        height: 32,
        name: 'image-add',
      },
      entered: false,
      fileInstance: null,
    };
  },
  methods: {
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

    clearDrop() {
      this.fileInstance = null;
    },
  },
  created() {
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
