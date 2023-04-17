<template>
  <div class="tools">
    <div class="claim m-bot-10">
      <div class="d-flex align-items-center fw-bold" style="padding-bottom: 4px">
        <div style="width: 200px">Users file</div>
      </div>
      <div class="tools-item">
        <div class="d-flex justify-content-between">
          <div class="claim-status">
            <a-popover>
              <template slot="content"> Number of records </template>
              <i class="icon-claim m-right-5 fs-14"></i>
            </a-popover>
            <a-input
              style="width: 105px; height: 24px"
              v-model="importUser.records"
            ></a-input>
          </div>
          <div>
            <a-button
              type="primary"
              :loading="importUser.isRunning"
              @click="generateImportUser"
            >
              {{ importUser.isRunning ? "" : "Run" }}
            </a-button>
          </div>
        </div>
        <div class="note">Status: {{ importUser.status }}</div>
      </div>
    </div>
    <div class="claim m-bot-10">
      <div class="d-flex align-items-center fw-bold" style="padding-bottom: 4px">
        <div style="width: 200px">Clients file</div>
      </div>
      <div class="tools-item">
        <div class="d-flex justify-content-between">
          <div class="claim-status">
            <a-popover>
              <template slot="content"> Number of records </template>
              <i class="icon-claim m-right-5 fs-14"></i>
            </a-popover>
            <a-input
              style="width: 105px; height: 24px"
              v-model="importClient.records"
            ></a-input>
          </div>
          <div>
            <a-button
              type="primary"
              :loading="importClient.isRunning"
              @click="generateImportClient"
            >
              {{ importClient.isRunning ? "" : "Run" }}
            </a-button>
          </div>
        </div>
        <div class="note">Status: {{ importClient.status }}</div>
      </div>
    </div>
    <div class="claim m-bot-10">
      <div class="d-flex align-items-center fw-bold" style="padding-bottom: 4px">
        <div style="width: 200px">External company file</div>
      </div>
      <div class="tools-item">
        <div class="d-flex justify-content-between">
          <div class="claim-status">
            <a-popover>
              <template slot="content"> Number of records </template>
              <i class="icon-claim m-right-5 fs-14"></i>
            </a-popover>
            <a-input
              style="width: 105px; height: 24px"
              v-model="importECompany.records"
            ></a-input>
          </div>
          <div>
            <a-button
              type="primary"
              :loading="importECompany.isRunning"
              @click="generateImportEC"
            >
              {{ importECompany.isRunning ? "" : "Run" }}
            </a-button>
          </div>
        </div>
        <div class="note">Status: {{ importECompany.status }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { generatorRecords } from "../utils/generatorCSV.js";
export default {
  props: ["settings"],
  data() {
    return {
      importUser: {
        records: 0,
        isRunning: false,
        status: "",
        template: [
          { type: "username", value: "Username" },
          { type: "firstname", value: "FirstName" },
          { type: "lastname", value: "LastName" },
          { type: "email", value: "Email" },
          { type: "phone", value: "PhoneNumber" },
          { type: "ou", value: "OrganizationalUnit" },
        ],
      },
      importClient: {
        records: 0,
        isRunning: false,
        status: "",
        template: [
          { type: "username", value: "ClientUserName[Required]" },
          { type: "phone", value: "ClientMobile[Required]" },
          { type: "firstname", value: "FirstName" },
          { type: "lastname", value: "LastName" },
          { type: "job", value: "JobTitle" },
          { type: "email", value: "EmailAddress" },
          { type: "externalCompanyId", value: "ExternalCompanyID" },
          { type: "ou", value: "OrganizationalUnit" },
          { type: "language", value: "Language-ISOcode" },
          { type: "tag", value: "Tags" },
        ],
      },
      importECompany: {
        records: 0,
        isRunning: false,
        status: "",
        template: [
          { type: "username", value: "ExternalCompanyID" },
          { type: "externalCompanyName", value: "ExternalCompanyName" },
          { type: "parentCompanyName", value: "ParentExternalCompanyName" },
          { type: "description", value: "Description" },
        ],
      },
    };
  },
  watch: {
    'importUser.records': {
      handler(newVal, oldVal) {
        localStorage.setItem('importUserRecords', JSON.stringify(newVal))
      },
    },
    'importClient.records': {
      handler(newVal, oldVal) {
        localStorage.setItem('importClientRecords', JSON.stringify(newVal))
      },
    },
    'importECompany.records': {
      handler(newVal, oldVal) {
        localStorage.setItem('importECompanyRecords', JSON.stringify(newVal))
      },
    },
  },
  mounted() {
    const importUserRecords = localStorage.getItem('importUserRecords')
    const importClientRecords = localStorage.getItem('importClientRecords')
    const importECompanyRecords = localStorage.getItem('importECompanyRecords')

    if (importUserRecords) {
      this.importUser.records = JSON.parse(importUserRecords)
    } else {
      this.importUser.records = 100
      localStorage.setItem('importUserRecords', JSON.stringify(this.importUser.records))
    }
    if (importClientRecords) {
      this.importClient.records = JSON.parse(importClientRecords)
    } else {
      this.importClient.records = 100
      localStorage.setItem('importClientRecords', JSON.stringify(this.importClient.records))
    }
    if (importECompanyRecords) {
      this.importECompany.records = JSON.parse(importECompanyRecords)
    } else {
      this.importECompany.records = 100
      localStorage.setItem('importECompanyRecords', JSON.stringify(this.importECompany.records))
    }
  },
  methods: {
    async generateImportUser() {
      const { importUser } = this;
      const { emailFormat, ouList, phoneCountryCode } = this.settings;
      importUser.isRunning = true;

      await generatorRecords(importUser.template, importUser.records, {
        settings: {
          phoneCountryCode,
          usernamePrefix: "user",
          emailTemplate: emailFormat,
          ouOptions: ouList,
        },
      });

      this.importUser.isRunning = false;
      this.importUser.status = "Downloaded";

      setTimeout(() => {
        this.importUser.status = "";
      }, 2000);
    },

    async generateImportClient() {
      const { importClient } = this;
      const {
        emailFormat,
        ouList,
        phoneCountryCode,
        externalCompanyId,
        languages,
        tags,
      } = this.settings;
      importClient.isRunning = true;

      await generatorRecords(importClient.template, importClient.records, {
        settings: {
          phoneCountryCode,
          usernamePrefix: "client",
          emailTemplate: emailFormat,
          ouOptions: ouList,
          externalCompanyIdOptions: externalCompanyId,
          languageOptions: languages,
          tagOptions: tags,
        },
      });

      this.importClient.isRunning = false;
      this.importClient.status = "Downloaded";

      setTimeout(() => {
        this.importClient.status = "";
      }, 2000);
    },

    async generateImportEC() {
      const { importECompany } = this;
      const { parentCompanyNames } = this.settings;
      importECompany.isRunning = true;

      await generatorRecords(importECompany.template, importECompany.records, {
        settings: {
          usernamePrefix: "EC",
          parentCompanyNameOptions: parentCompanyNames,
        },
      });

      this.importECompany.isRunning = false;
      this.importECompany.status = "Downloaded";

      setTimeout(() => {
        this.importECompany.status = "";
      }, 2000);
    },
  },
};
</script>
