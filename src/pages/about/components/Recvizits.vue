<template>
    <a-table :columns="columns" :dataSource="data" :pagination="false" :showHeader="false" bordered>
        <template #bodyCell="{ column, text }">
            <span v-if="column.key === 'key'" class="font-bold" v-html="text"></span>
            <span v-else class="align-top" v-html="text"></span>
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
        key: 'Адрес',
        value: 'Россия, 125040, г. Москва, ул. Большая Пироговская 18/1',
    },
    {
        key: 'E-mail',
        value: 'емаил',
    },
    {
        key: '  Банковские реквизиты',
        value: 'р/с 406 018 109 452 530 XXX XX <br>ГУ Банка России по ЦФО г. Москва 35<br>БИК 044525XXX <br>ОКТМО 46744XXX <br>  ОГРН 1177746026XXX <br>КБК 00004120000000000XXX',
    },
    {
        key: 'Коды',
        value: 'ИНН 7728358XXX <br> КПП 502401XXX <br> л/с 20860D20XXX «Название фирмы»',
    },
    {
        key: 'И.о. генерального директора',
        value: 'ФИО',
    },
    {
        key: 'E-mail',
        value: 'емаил',
    },
    {
        key: 'Главный бухгалтер',
        value: 'ФИО',
    },
    {
        key: 'E-mail',
        value: 'емаил',
    },
]);
</script>

<style scoped>
.font-bold {
    font-weight: bold;
}

.align-top {
    vertical-align: top;
}
</style>