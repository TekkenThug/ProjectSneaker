<template>
  <label
    class="drag"
    :class="{
      'drag--entered': entered || fileInstance,
    }"
    @dragenter.prevent="entered = true"
    @dragleave.prevent="entered = false"
    @dragover.prevent
    @drop.prevent="fileHandler('drop', $event)"
  >
    <input
      @change="fileHandler('input', $event)"
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
        {{ title }}
      </b>
    </span>
  </label>
</template>
<script>
import { validateImage } from '@/services/validate';

import Icon from '@/components/UI/Icon';

export default {
  name: 'Draggable',
  components: { Icon },
  props: {
    title: {
      type: String,
      default: 'Вставьте изображение кроссовок',
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
    fileHandler(type, event) {
      if (type === 'input') {
        this.fileInstance = event.target.files[0];
      } else if (type === 'drop') {
        this.fileInstance = event.dataTransfer.files[0];
      } else {
        return;
      }

      if (validateImage(this.fileInstance.type)) {
        this.$emit('fileUpload', this.fileInstance);
      } else {
        this.$renderVue.createAlert('error', 'Ошибка при загрузке файла');
      }
    },

    clearDrop() {
      this.fileInstance = null;
    },
  },
};
</script>

<style lang="scss" scoped>
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
