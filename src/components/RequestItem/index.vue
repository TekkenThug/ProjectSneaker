<template>
  <div class="request">
    <h3 class="request__title">
      {{ sneakerData.model }}
    </h3>
    <div class="request__info">
      <div class="request__info-fields">
        <div class="request__info-field">
          {{ $t('Colorway') }}: <span class="value">{{ sneakerData.colorway }}</span>
        </div>
        <div class="request__info-field">
          {{ $t('Price') }}: <span class="value">{{ sneakerData.price }}</span>
        </div>
        <div class="request__info-field">
          {{ $t('Vendor code') }}: <span class="value">{{ sneakerData.vendorCode }}</span>
        </div>
        <div class="request__info-field">
          {{ $t('Release date') }}: <span class="value">{{ sneakerData.releaseDate }}</span>
        </div>
      </div>
      <div class="request__info-image">
        <img
          :src="sneakerData.picture"
          alt=""
        >
      </div>
    </div>
    <div class="request__actions">
      <btn
        @click="sendResolve(true)"
        :title="$t('Approve')"
        class="request__action request__action--resolve"
      />
      <btn
        @click="sendResolve(false)"
        :title="$t('Reject')"
        class="request__action request__action--reject"
      />
    </div>
  </div>
</template>

<script>
import Btn from '@/components/UI/Button';

export default {
  name: 'RequestItem',
  components: { Btn },
  props: {
    sneakerData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    sendResolve(resolve) {
      this.$emit('resolving', resolve);
    },
  },
};
</script>

<style lang="scss" scoped>
.request {
  padding: $paddingForms;
  border: 2px solid $color-4;
  border-radius: 8px;
  width: 100%;

  &__title {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    margin: 5px 0 10px;

    @media (max-width: $mobile) {
      display: block;
    }

    &-fields {
      flex-grow: 1;
      margin-right: 10px;

      @media (max-width: $mobile) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }

    &-field {
      padding: 10px 0;
      border-bottom: 1px solid $color-4;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .value {
        margin-left: 5px;
      }

      &:first-of-type {
        padding-top: 0;
      }

      &:last-of-type {
        border-bottom: none;
      }
    }

    &-image {
      max-width: 240px;

      @media (max-width: $mobile) {
        margin: 0 auto;
      }
    }
  }

  &__action {
    font-size: 14px;
    color: $color-1;
    padding: 8px 10px;
    display: block;
    width: 100%;

    &:not(:last-of-type) {
      margin-bottom: 5px;
    }

    &--resolve {
      background-color: $alert_success;

      &:active {
        background-color: darken($alert_success, 10%);
      }
    }

    &--reject {
      background-color: $alert_error;

      &:active {
        background-color: darken($alert_error, 10%);
      }
    }
  }
}
</style>
