<template>
    <a-table :columns="columns" :dataSource="data" :pagination="false" :showHeader="false" bordered>
        <template #bodyCell="{ column, text }">
            <span v-if="column.key === 'key'" class="font-bold" v-html="text"></span>
            <span v-else v-html="text"></span>
        </template>
    </a-table>
</template>

<script setup>
import { ref } from 'vue';

const columns = ref([
    {
        title: '',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: '',
        dataIndex: 'value',
        key: 'value',
    },
]);

const data = ref([
    {
        key: 'Название компании',
        value: 'ANS Resolution Uzbekistan',
    },
    {
        key: 'Год основания',
        value: '2024',
    },
    {
        key: 'Тип окон',
        value: 'Пластиковые окна',
    },
    {
        key: 'Особенности',
        value: 'Экологичность<br>Высокая теплоизоляция<br>Долговечность',
    },
]);
</script>

<style scoped>
.font-bold {
    font-weight: bold;
}
</style>