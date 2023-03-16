<script setup lang="ts">
import { ref } from 'vue'
import { NSpace, NInput } from 'naive-ui'

const value = ref(null)

</script>

<template>
    <n-space vertical>
        <n-input v-model:value="value" type="text" placeholder="基本的 Input" />
        <n-input v-model:value="value" type="textarea" placeholder="基本的 Textarea" />
    </n-space>
</template>

<style scoped></style>
