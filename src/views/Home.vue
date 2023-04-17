<template>
  <div class="container">
    <div class="home">
      <div class="content">
        <a-tabs default-active-key="search">
          <a-tab-pane key="search">
            <span slot="tab">
              <a-icon type="profile" />
              Generate Files
            </span>
            <Tools :settings="settings"></Tools>
          </a-tab-pane>
          <a-tab-pane key="post">
            <span slot="tab">
              <a-icon type="control" />
              Settings
            </span>
            <Settings :settings="settings"></Settings>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>
<script>

import Tools from "./Tools.vue";
import Settings from "./Settings.vue";
import Vue from 'vue'
export default {
  components: {
    Tools,
    Settings
  },
  data() {
    return {
      settings: null
    };
  },
  watch: {
    settings: {
      handler(newVal, oldVal) {
        localStorage.setItem('settingData', JSON.stringify(newVal))
      },
      deep: true,
    },
  },
  mounted() {
    const data = localStorage.getItem('settingData')
    if (data) {
      this.settings = JSON.parse(data)
    } else {
      this.settings = {
        emailFormat: 'gmail.com',
        ouList: ['OU_1', 'OU_2'],
        externalCompanyId: ['EC_1', 'EC_2'],
        languages: ['en','zh_HK','zh_CN','fr','pt_BR'],
        tags: ['Tag_1', 'Tag_2'],
        parentCompanyNames: ['Parent_Com_1', 'Parent_Com_2'],
        phoneCountryCode: 'VN',
      },
      localStorage.setItem('settingData', JSON.stringify(this.settings))
    }
  },
};
</script>
