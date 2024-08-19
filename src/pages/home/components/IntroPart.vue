<template>
    <div class="bg-blue-500 py-14">
        <div class="main-container flex gap-10">
            <div class="w-1/2 space-y-8 text-white">
                <h1 class="text-5xl font-bold">БУХГАЛТЕРСКИЙ АУТСОРСИНГ </h1>
                <p class="font-thin text-4xl">экспертного уровня с оплатой
                    только за выполненные
                    операции</p>
                <ul class="intro space-y-4">
                    <li>
                        <CheckedTarif></CheckedTarif>

                        Предоставляем финансовые гарантии качества работы по договору
                    </li>
                    <li>
                        <CheckedTarif></CheckedTarif>

                        Вернем деньги за месяц работы, если не устроит качество услуг
                    </li>
                    <li>
                        <CheckedTarif></CheckedTarif>
                        Сэкономим вам до 1,5 млн. руб. в год на налогах
                    </li>
                </ul>
                <a-button @click="showModal" class="h-14 px-8 text-white bg-blue-300 font-bold  "> Записать на
                    консултацию</a-button>
            </div>
            <div class="w-1/2 relative my-filter">
                <img class="h-full w-full object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="">
                <!-- video ga ssilka  -->
                <div class="play-btn">

                    <PlayIcon></PlayIcon>
                </div>
            </div>

        </div>
    </div>

    <a-modal v-model:open="open" :footer="false" @ok="handleOk">
        <ZayavkaForm></ZayavkaForm>
    </a-modal>

</template>

<script setup>
import CheckedTarif from '@/components/icons/CheckedTarif.vue';
import PlayIcon from '@/components/icons/PlayIcon.vue';
import ZayavkaForm from './ZayavkaForm.vue'
import { ref } from 'vue';
const open = ref(false);
const showModal = () => {
    open.value = true;
};
const handleOk = e => {
    console.log(e);
    open.value = false;
};
</script>

<style scoped>
.intro li {
    display: flex;
    gap: 10px;
    align-items: center;
}

.play-btn {
    position: absolute;
    left: calc(50% - 40px);
    top: calc(50% - 40px);
}
</style>