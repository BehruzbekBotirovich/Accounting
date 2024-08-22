<template>
    <div class="main-container">

        <h1 class="flex items-center gap-2" >Главная
            <RightOutlined style="font-size: 10px;" /> О компании
            <RightOutlined style="font-size: 10px;" />
            {{ selectedItem }}
        </h1>
        <h1 class=" text-4xl font-bold uppercase mt-16" > {{ selectedItem }} </h1>
        <div class="flex  pt-8 pb-16">
            <!-- navbar -->
            <div class="w-1/4  rounded-s-xl ">
                <ul class="tarif-list  rounded-s-xl ">
                    <li class="py-3  border-b  border-t" @click="selectedItem = info"
                        :class="{ 'text-blue-600': selectedItem == 'info' }">Обшая
                        информация
                    </li>
                    <li class="py-3  border-b" @click="selectedItem = 'docs'"
                        :class="{ 'text-blue-600': selectedItem == 'docs' }">Документы </li>

                    <li class="py-3  border-b" @click="selectedItem = 'litsense'"
                        :class="{ 'text-blue-600': selectedItem == 'litsense' }">Лицензии </li>
                    <li class="py-3  border-b" @click="selectedItem = 'litsense'"
                        :class="{ 'text-blue-600': selectedItem == 'vacansy' }">Вакансии </li>
                    <li class="py-3  border-b" @click="selectedItem = 'rec'"
                        :class="{ 'text-blue-600': selectedItem == 'rec' }">Реквизиты </li>

                </ul>
            </div>
            <!-- info part  -->
            <div class="w-3/4 pl-10 h-fit">
                <transition>
                    <AboutUs v-if="selectedItem == 'info'"></AboutUs>
                </transition>
                <transition>
                    <Docs v-if="selectedItem == 'docs'"></Docs>
                </transition>
                <transition>
                    <Litsense v-if="selectedItem == 'litsense'"></Litsense>
                </transition>
                <transition v-if="selectedItem == 'rec'">
                    <Recvizits></Recvizits>
                </transition>
            </div>
        </div>

    </div>
    <Consultation></Consultation>
</template>

<script setup>
// parts 
import AboutUs from './components/AboutUs.vue'
import Docs from './components/Docs.vue'
import Litsense from './components/Litsense.vue'
import Recvizits from './components/Recvizits.vue'
//
import Consultation from '../home/components/Consultation.vue';
import { ref } from 'vue';
import { RightOutlined } from '@ant-design/icons-vue'
const selectedItem = ref('info')



</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

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