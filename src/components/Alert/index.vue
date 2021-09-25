<template>
  <transition name="slide">
    <div
      class="alert"
      :class="'alert--' + msgType"
    >
      <icon
        :icon-data="getIconsData"
        :class="this.msgType"
      />
      <div class="alert__content">
        <h4 class="alert__title">
          {{ title }}
        </h4>
        <p class="alert__text">
          <slot />
        </p>
      </div>
      <span
        @click="close"
        class="alert__close"
      >
        <icon
          :icon-data="{
            width: 12,
            height: 12,
            name: 'cross'
          }"
        />
      </span>
    </div>
  </transition>
</template>

<script>
import Icon from '@/components/UI/Icon';

const ALERT_CLOSE_DELAY = 5000;

export default {
  name: 'Alert',
  components: { Icon },
  props: {
    title: {
      type: String,
      required: true,
    },
    msgType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      iconsPresets: {
        warning: 'warning',
        success: 'success',
        info: 'info',
        error: 'error',
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.close();
    }, ALERT_CLOSE_DELAY);
  },
  computed: {
    getIconsData() {
      return { width: 18, height: 18, name: this.iconsPresets[this.msgType] };
    },
  },
  methods: {
    close() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },
  },
};
</script>

<style lang="scss" scoped>
  .alert {
    padding: 10px 30px 10px 15px;
    border-radius: 5px;
    background-color: $color-1;
    border: 1px solid rgba($color-3, .8);
    display: flex;
    align-items: flex-start;
    text-align: left;
    width: 100%;
    position: relative;

    .svg-icon {
      flex-shrink: 0;
    }

    &--info {
      .alert__title,
      .svg-icon {
        color: $alert_info;
      }
    }

    &--success {
      .alert__title,
      .svg-icon {
        color: $alert_success;
      }
    }

    &--error {
      .alert__title,
      .svg-icon {
        color: $alert_error;
      }
    }

    &--warning {
      .alert__title,
      .svg-icon {
        color: $alert_warning;
      }
    }

    &__content {
      margin-left: 15px;
    }

    &__title {
      font-weight: 700;
      font-size: 18px;
      line-height: 18px;
      margin-bottom: 5px;
    }

    &__text {
      color: rgba($color-3, .9);
      font-size: 14px;
    }

    &__close {
      position: absolute;
      right: 10px;
      cursor: pointer;
      top: 10px;
    }
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter, .slide-leave-to {
    position: absolute;
    opacity: 0;
    transform: translateX(-50px);
  }
</style>
