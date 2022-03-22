<template>
  <validation-observer ref="postSneakersForm">
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
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import { serializeToFormData } from '@/services/serialize';

import InputField from '@/components/UI/Input';
import SubmitBtn from '@/components/UI/Button';
import Drag from '@/components/Drag&Drop';

export default {
  name: 'AddForm',
  components: {
    InputField,
    SubmitBtn,
    Drag,
    ValidationObserver,
  },
  data() {
    return {
      title: this.$t('Adding sneakers'),
      subtitle: this.$t('After submission, the application for adding will be considered by the moderators'),
      load: false,
      sneakerDraft: [
        {
          placeholder: this.$t('Model'),
          validationRules: ['required'],
          name: 'model',
          value: '',
        },
        {
          placeholder: this.$t('Colorway'),
          validationRules: ['required'],
          name: 'colorway',
          value: '',
        },
        {
          placeholder: this.$t('Price'),
          validationRules: ['required', 'double'],
          name: 'price',
          value: '',
        },
        {
          placeholder: this.$t('Vendor code'),
          validationRules: ['required'],
          name: 'vendorCode',
          value: '',
        },
        {
          placeholder: this.$t('Release date'),
          validationRules: ['required'],
          name: 'releaseDate',
          value: '',
          type: 'date',
        },
      ],
      sneakerDraftImage: null,
    };
  },
  methods: {
    postSneakers() {
      this.$refs.postSneakersForm.validate()
        .then((success) => {
          if (success) {
            const dataToSend = this.serialize();

            this.load = true;

            setTimeout(() => {
              this.$api.postSneakers(dataToSend)
                .then(() => {
                  this.clearForm();
                  this.$renderVue.createAlert('success', this.$t('Application sent'));
                })
                .catch((e) => {
                  this.$renderVue.createAlert('error', e.response.data);
                }).finally(() => {
                  this.load = false;
                });
            }, 2000);
          }
        });
    },

    serialize() {
      const dataToSerialize = this.sneakerDraft.reduce((obj, { name, value }) => {
        return Object.assign(obj, { [name]: value });
      }, {});

      dataToSerialize.picture = this.sneakerDraftImage;

      return serializeToFormData(dataToSerialize);
    },

    clearForm() {
      this.sneakerDraft.forEach((item) => {
        item.value = '';
      });

      this.sneakerDraftImage = null;

      this.$nextTick(() => {
        this.$refs.imageDrag.clearDrop();
        this.$refs.postSneakersForm.reset();
      });
    },

    setUploadedFile(file) {
      this.sneakerDraftImage = file;
    },
  },
};
</script>

<style lang="scss">
  @import "~@/styles/variables";

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
      flex-basis: 100%;
      margin-bottom: 10px;
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
