<template>
    <div class="main-container">

        <h1 class="flex items-center gap-2">Главная
            <RightOutlined style="font-size: 10px;" /> О компании
            <RightOutlined style="font-size: 10px;" />
            {{ selectedItem }}
        </h1>
        <h1 class=" text-4xl font-bold uppercase mt-16" id="tarifs"> {{ selectedItem }} </h1>
        <div class="flex  pt-8 pb-16">
            <!-- navbar -->
            <div class="w-1/3  rounded-s-xl ">
                <ul class="tarif-list  rounded-s-xl ">
                    <li class="py-3  border-b  border-t" @click="selectedItem = info"
                        :class="{ 'text-blue-600': selectedItem == 'info' }">Обшая
                        информация
                    </li>
                    <li class="py-3  border-b" @click="selectedItem = 'docs'"
                        :class="{ 'text-blue-600': selectedItem == 'docs' }">Документы </li>
                    <li class="py-3  border-b" @click="selectedItem = docs"
                        :class="{ 'text-blue-600': selectedItem == 'litsense' }">Лицензии </li>
                    <li class="py-3  border-b" @click="selectedItem = docs"
                        :class="{ 'text-blue-600': selectedItem == 'vacansy' }">Вакансии </li>
                    <li class="py-3  border-b" @click="selectedItem = docs"
                        :class="{ 'text-blue-600': selectedItem == 'rec' }">Реквизиты </li>

                </ul>
            </div>
            <!-- info part  -->
            <div class="w-3/4 pl-10 h-fit">
                <AboutUs v-if="selectedItem == 'info'"></AboutUs>
                <Docs v-if="selectedItem == 'docs'"></Docs>
            </div>
        </div>

    </div>
    <Consultation></Consultation>
</template>

<script setup>
import AboutUs from './components/AboutUs.vue'
import Docs from './components/Docs.vue'
import Consultation from '../home/components/Consultation.vue';
import { ref } from 'vue';
import { RightOutlined } from '@ant-design/icons-vue'
const selectedItem = ref('info')
</script>

<style scoped>
.tarif-list {
    position: sticky;
    top: 50px;

}

.tarif-list>li {
    cursor: pointer;

}

.tarif-list>li:hover {
    color: #2563eb;
}
</style>