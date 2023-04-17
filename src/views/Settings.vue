<template>
  <div class="tools">
    <div class="claim">
      <div class="tools-item">
        <div class="d-flex m-bot-10">
            <span style="width: 200px;">Phone country: (Common)</span>
            <a-select v-model="settings.phoneCountryCode" style="flex: 1;">
              <a-select-option v-for="(item, index) in countryCodes" :key="index" :value="item.id" >
                {{ item.value }}
              </a-select-option>
            </a-select>
          </div>
        <div class="d-flex m-bot-10">
          <span style="width: 200px">Email format: (Common)</span>
          <a-input style="flex: 1; height: 30px" v-model="settings.emailFormat"></a-input>
        </div>
        <div class="d-flex m-bot-10">
          <span style="width: 200px">Organizational Unit: (Common)</span>
          <a-textarea style="flex: 1" v-model="getOUList" auto-size />
        </div>
        <div class="d-flex m-bot-10">
          <span style="width: 200px">External Company Id: (Client)</span>
          <a-textarea style="flex: 1" v-model="getExternalCompanyId" auto-size />
        </div>
        <div class="d-flex m-bot-10">
          <span style="width: 200px">Languages: (Client)</span>
          <a-textarea style="flex: 1" v-model="getLanguages" auto-size />
        </div>
        <div class="d-flex m-bot-10">
          <span style="width: 200px">Tags: (Client)</span>
          <a-textarea style="flex: 1" v-model="getTags" auto-size />
        </div>
        <div class="d-flex m-bot-10">
          <span style="width: 200px">Parent External Company Name: (EC)</span>
          <a-textarea style="flex: 1" v-model="getParentECNames" auto-size />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["settings"],
  data() {
    return {
      countryCodes: [
        { id: "VN", value: "VietNam" },
        { id: "CN", value: "China" },
        { id: "TR", value: "Turkey" },
        { id: "DE", value: "Germany" },
      ]
    }
  },
  computed: {
    getOUList: {
      get() {
        return this.settings.ouList.join("\n");
      },
      set(newValue) {
        this.settings.ouList = newValue.split("\n");
      },
    },
    getExternalCompanyId: {
      get() {
        return this.settings.externalCompanyId.join("\n");
      },
      set(newValue) {
        this.settings.externalCompanyId = newValue.split("\n");
      },
    },
    getLanguages: {
      get() {
        return this.settings.languages.join("\n");
      },
      set(newValue) {
        this.settings.languages = newValue.split("\n");
      },
    },
    getTags: {
      get() {
        return this.settings.tags.join("\n");
      },
      set(newValue) {
        this.settings.tags = newValue.split("\n");
      },
    },
    getParentECNames: {
      get() {
        return this.settings.parentCompanyNames.join("\n");
      },
      set(newValue) {
        this.settings.parentCompanyNames = newValue.split("\n");
      },
    },
  },
};
</script>
