<template>
    <h1>Лицензии</h1>
    <a-row :gutter="[24, 24]">
        <a-col :lg="6" :md="8" :xm="12" v-for="img in litsenzi">
            <a-image :src="img"></a-image>
        </a-col>
    </a-row>

</template>

<script setup>
import { ref } from 'vue'
const litsenzi = ref(['https://templates.business-in-a-box.com/imgs/1000px/license-agreement-D1180.png', 'https://templates.business-in-a-box.com/imgs/1000px/license-agreement-D1180.png', 'https://templates.business-in-a-box.com/imgs/1000px/license-agreement-D1180.png', 'https://templates.business-in-a-box.com/imgs/1000px/license-agreement-D1180.png'])
</script>

<style lang="scss" scoped></style>