<script setup lang="ts">
import { ref } from 'vue'
import { NSpace, NInput } from 'naive-ui'
import { getNotionData, NotionApiConfig } from '../../api/notionApi'

const notionVersion = ref('2022-06-28')
const apiKey = ref('')
const databaseId = ref('')

const propertyName = ref('')
const propertyValue = ref('')

const res = ref('')

const getData = async () => {
    const query = {
        property: propertyName.value,
        value: {
            title: [
                {
                    text: {
                        content: propertyValue.value,
                    },
                },
            ],
        },
    };

    const config: NotionApiConfig = {
        apiKey: apiKey.value,
        databaseId: databaseId.value,
        notionVersion: notionVersion.value,
        query,
    };

    const data = await getNotionData(config);
    console.log(data)
    res.value = data
};

</script>

<template>
    <div class="center">
        <n-space vertical>
            <n-input v-model:value="apiKey" type="text" placeholder="notion apiKey" />
            <n-input v-model:value="notionVersion" type="text" placeholder="notion version" />
            <n-input v-model:value="databaseId" type="text" placeholder="databaseID" />
            <input v-model="propertyName" placeholder="Property Name" />
            <input v-model="propertyValue" placeholder="Property Value" />
            <button @click="getData">query</button>
            <n-input v-model:value="res" type="textarea" placeholder="respone" />
        </n-space>
    </div>
</template>

<style scoped>
.center {
    margin: 0 auto;
    width: 600px;
}
</style>
