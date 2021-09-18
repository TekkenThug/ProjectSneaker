<template>
  <div class="drag">
    <div class="drag__default">
      <icon
        class="drag__default-icon"
        :icon-data="iconData"
      />
      <h2 class="drag__default-title">
        {{ title }}
      </h2>
    </div>
  </div>
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
    };
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

    &__default {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__default-title {
      font-weight: 700;
      margin-top: 5px;
    }
  }
</style>
