<template>
  <form
    class="add-form"
    @submit.prevent="postSneakers"
  >
    <preloader
      v-if="load"
      class="add-form__load"
    />
    <h3
      v-show="title"
      class="add-form__title"
    >
      {{ title }}
    </h3>
    <p
      v-show="subtitle"
      class="add-form__subtitle"
    >
      {{ subtitle }}
    </p>
    <div class="add-form__fields">
      <inputField
        class="add-form__field"
        v-for="(field, index) in sneakerDraft"
        :key="index"
        v-bind="field"
        v-model="field.value"
        @input="field.error = false"
      />
    </div>
    <drag
      @fileUpload="setUploadedFile"
      ref="imageDrag"
    />
    <submit-btn
      class="add-form__submit"
      :title="$t('Send')"
    />
  </form>
</template>

<script>
import createFormData from '@/services/createFormData';

import inputField from '@/components/UI/Input';
import SubmitBtn from '@/components/UI/Button';
import Drag from '@/components/Drag&Drop';

export default {
  name: 'AddForm',
  components: { inputField, SubmitBtn, Drag },
  data() {
    return {
      title: this.$t('Adding sneakers'),
      subtitle: this.$t('After submission, the application for adding will be considered by the moderators'),
      load: false,
      sneakerDraft: [
        {
          placeholder: this.$t('Model'),
          name: 'model',
          value: '',
          maxLength: 256,
          error: false,
        },
        {
          placeholder: this.$t('Colorway'),
          name: 'colorway',
          value: '',
          maxLength: 256,
          required: true,
          error: false,
        },
        {
          placeholder: this.$t('Price'),
          name: 'price',
          value: '',
          maxLength: 256,
          error: false,
        },
        {
          placeholder: this.$t('Vendor code'),
          name: 'vendorCode',
          value: '',
          maxLength: 256,
          error: false,
        },
        {
          placeholder: this.$t('Release date'),
          name: 'releaseDate',
          value: '',
          type: 'date',
          error: false,
        },
      ],
      sneakerDraftImage: null,
    };
  },
  methods: {
    postSneakers() {
      const dataToSend = this.serialize();

      if (dataToSend) {
        this.load = true;

        setTimeout(() => {
          this.$api.postSneakers(dataToSend);

          this.load = false;
          this.clearForm();

          this.$renderVue.createAlert('success', this.$t('Application sent'));
        }, 2000);
      }
    },

    serialize() {
      if (!this.validate()) {
        return false;
      }

      const dataToSerialize = this.sneakerDraft.reduce((obj, { name, value }) => {
        return Object.assign(obj, { [name]: value });
      }, {});

      dataToSerialize.picture = this.sneakerDraftImage;

      return createFormData(dataToSerialize);
    },

    validate() {
      let success = true;

      this.sneakerDraft.forEach((field) => {
        if (!field.value.trim().length) {
          success = false;
          field.error = true;
        }
      });

      if (!this.sneakerDraftImage) {
        success = false;
      }

      return success;
    },

    clearForm() {
      this.sneakerDraft.forEach((item) => {
        item.value = '';
      });

      this.sneakerDraftImage = null;
      this.$refs.imageDrag.clearDrop();
    },

    setUploadedFile(file) {
      this.sneakerDraftImage = file;
    },
  },
};
</script>

<style lang="scss" scoped>
  .add-form {
    width: 100%;
    max-width: 480px;
    border-radius: 7px;
    padding: 20px;
    background-color: $color-1;
    position: relative;
    overflow: hidden;

    &__load {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      align-items: center;
      background-color: rgba($color-1, .8);
    }

    &__title {
      font-size: 24px;
      font-weight: 700;
      text-align: left;
      margin-bottom: 15px;
      padding-bottom: 5px;
      border-bottom: 1px solid $color-3;
    }

    &__subtitle {
      color: $color-3;
      text-align: left;
      font-size: 14px;
      margin: 5px 0 15px;
    }

    &__fields {
      display: flex;
      flex-wrap: wrap;
    }

    &__field {
      flex: 0 0 48%;
      margin-bottom: 10px;

      &:nth-child(2n) {
        margin-left: 10px;
      }

      &:last-child {
        flex-basis: 100%;
      }
    }

    &__submit {
      margin: 15px auto 0;
      width: 100%;
    }
  }

  @media (max-width: $mobile) {
    .add-form__field {
      flex: 0 0 100%;

      &:nth-child(2n) {
        margin-left: 0;
      }
    }
  }
</style>
