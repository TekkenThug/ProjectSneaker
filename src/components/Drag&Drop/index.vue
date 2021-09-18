<template>
  <label
    class="drag"
    :class="{
      'drag--entered': entered,
    }"
    @dragenter.prevent="enterHandler(true)"
    @dragleave.prevent="enterHandler(false)"
    @dragover.prevent
  >
    <div class="drag__default">
      <icon
        class="drag__default-icon"
        :icon-data="iconData"
      />
      <h2 class="drag__default-title">
        {{ title }}
      </h2>
    </div>
    <input class="drag__input" type="file">
  </label>
</template>
<script>
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
    };
  },
  methods: {
    testDrag(event) {
      console.log(event);
    },

    dropHandler(event) {
      console.log(event);
    },

    enterHandler(value) {
      console.log(value);
      this.entered = value;
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
    }
  }
</style>
