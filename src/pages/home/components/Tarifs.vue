<template>
    <h1 class="main-container text-4xl font-bold uppercase mt-16">Тарифы и входящие в них услуги </h1>
    <div class="flex main-container pt-8 pb-16">
        <!-- navbar -->
        <div class="w-1/3 bg-blue-900 text-white  rounded-s-xl ">
            <ul class="tarif-list  rounded-s-xl ">
                <li v-for="plan in plans" :key="plan.id" @click="selectPlan(plan.id)"
                    :class="['p-4 mb-2 cursor-pointer', selectedPlan === plan.id ? 'bg-blue-600' : 'bg-blue-800']">
                    <div class="flex justify-between">
                        <span>{{ plan.name }}</span>
                        <span>{{ plan.price }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <!-- info part  -->
        <div class="w-3/4 p-4 h-fit">
            <div v-if="selectedPlanDetails" class="h-fit p-4">
                <h2 class="text-xl font-bold">{{ selectedPlanDetails.name }}</h2>
                <ul class="mt-4">
                    <li v-for="feature in selectedPlanDetails.features" :key="feature" class="mb-2">
                        <div class="bg-white p-4 rounded shadow">
                            <p class="font-semibold flex items-center gap-2">
                                <CheckedTarif /> {{ feature.name }}
                            </p>
                            <ul class="list-disc">
                                <li v-for="item in   feature.description " class="ml-14 text-indigo-600"> {{ item }}
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <div class="flex gap-2">
                    <a-button type="primary" class="h-12 items-center px-8 text-lg">Оформить заявку</a-button>
                    <a-button type=""
                        class="flex gap-2 mr-4 border-blue-200 h-12 items-center px-8 font-semibold hover:bg-blue-50 hover:border-blu\">
                        <svg width="24px" height="24px" viewBox="0 0 32 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)" />
                            <path
                                d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                                fill="white" />
                            <defs>
                                <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#37BBFE" />
                                    <stop offset="1" stop-color="#007DBB" />
                                </linearGradient>
                            </defs>
                        </svg> Telegram
                    </a-button type="">

                    <a-button type=""
                        class="flex gap-2 mr-10 border-blue-200 h-12 items-center px-8 font-semibold hover:bg-blue-50 hover:border-blu\">
                        <svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M715.637 960h171.897C920.348 960 960 932.759 960 898.909V125.091C960 91.243 920.348 64 887.534 64H113.716C77.004 64 64 96.892 64 125.091v773.818C64 927.109 77.004 960 113.716 960h439.012V634.182H410.181c-11.257 0-20.363-9.106-20.363-20.363V491.637c0-11.257 9.106-20.365 20.363-20.365h142.546V328.728c0-99.354 88.056-183.272 192.261-183.272h113.193c11.257 0 20.365 9.106 20.365 20.363V288c0 11.258-9.108 20.365-20.365 20.365h-72.465c-34.444 0-70.079 19.052-70.079 50.908v112h131.17a20.27 20.27 0 0 1 16.507 8.472c3.856 5.291 4.891 12.133 2.823 18.337l-40.728 122.181a20.403 20.403 0 0 1-19.33 13.919h-90.442V960z"
                                fill="#2577FF" />
                            <path
                                d="M807.708 451.723h-92.071v19.549h112.288c-0.161-3.938-1.326-7.809-3.711-11.078a20.263 20.263 0 0 0-16.506-8.471zM513.629 940.451H75.445C83.3 951.952 95.599 960 113.716 960h439.012V634.183H513.63v306.268zM839.283 145.456c-0.451-10.855-9.231-19.549-20.198-19.549H705.89c-104.205 0-192.261 83.919-192.261 183.272v142.544H371.083c-11.257 0-20.363 9.108-20.363 20.365v122.181c0 11.258 9.107 20.364 20.363 20.364h18.899c-0.012-0.286-0.164-0.527-0.164-0.815V491.637c0-11.257 9.106-20.365 20.363-20.365h142.546V328.728c0-99.353 88.056-183.272 192.261-183.272h94.295z"
                                fill="" />
                            <path
                                d="M900.123 65.251c12.221 10.76 20.778 24.748 20.778 40.29V879.36c0 33.85-39.651 61.091-72.467 61.091H715.637V960h171.896C920.348 960 960 932.759 960 898.909V125.091c0-29.6-30.322-54.141-59.877-59.84z"
                                fill="" />
                        </svg>Facebook
                    </a-button type="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CheckedTarif from '@/components/icons/CheckedTarif.vue';

import { ref } from 'vue';

const plans = ref([
    {
        id: 1, name: 'Эконом',
        price: '8990 руб./месяц',
        features: [
            { name: 'Бухгалтерский учет', description: ['Описание'] },
            { name: 'Кадровый учет', description: ['Описание'] },
            { name: 'Подготовка и сдача отчетности', },
            { name: 'Взаимодействие с налоговой, ФСС и ПФР', description: ['подготовка к проверке', 'ответы на требования'] },
            { name: 'Консультации экспертов', description: ['бухгалтерский учет', 'кадровый учет', 'налогообложение и отчетность '] },
            { name: 'Бухгалтерский учет', description: ['Описание'] },
            { name: 'Кадровый учет', description: ['Описание'] },
            { name: 'Подготовка и сдача отчетности', },
            { name: 'Взаимодействие с налоговой, ФСС и ПФР', description: ['подготовка к проверке', 'ответы на требования'] },
            { name: 'Консультации экспертов', description: ['бухгалтерский учет', 'кадровый учет', 'налогообложение и отчетность '] }


        ]
    },
    {
        id: 2,
        name: 'Стандарт',
        price: '9990 руб./месяц',
        features: [
            { name: 'Feature 123', description: ['Описание'] },
            { name: 'Feature 2', description: ['Описание'] }
        ]
    },
    {
        id: 3,
        name: 'Эксперт',
        price: '14990 руб./месяц',
        features: [
            { name: 'Feature 1', description: ['Описание'] },
            { name: 'Feature 2', description: ['Описание'] }
        ]
    },
    {
        id: 4,
        name: 'Бизнес',
        price: '19990 руб./месяц',
        features: [{ name: 'Feature 1', description: ['Описание'] },
        { name: 'Feature 2', description: ['Описание'] }
        ]
    }
]);

const selectedPlan = ref(plans.value[0].id);
const selectedPlanDetails = ref(plans.value[0]);

const selectPlan = (id) => {
    selectedPlan.value = id;
    selectedPlanDetails.value = plans.value.find(plan => plan.id === id);
};
</script>

<style scoped>
.tarif-list {
    position: sticky;
    top: 50px;

}
</style>