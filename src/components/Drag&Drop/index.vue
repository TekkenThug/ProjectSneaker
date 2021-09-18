<template>
  <label
    class="drag"
    :class="{
      'drag--entered': entered || fileName,
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
    <span v-if="fileName">
      {{ fileName }}
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
      fileName: null,
    };
  },
  methods: {
    fileHandler(type, event) {
      let uploadFile = null;

      if (type === 'input') {
        uploadFile = event.target.files[0];
      } else if (type === 'drop') {
        uploadFile = event.dataTransfer.files[0];
      } else {
        return;
      }

      if (validateImage(uploadFile.type)) {
        this.fileName = uploadFile.name;
      } else {
        this.$renderVue.createAlert('error', 'Ошибка при загрузке файла');
      }
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
