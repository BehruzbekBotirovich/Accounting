<template>
    <div class="bg-gray-200 py-20 "  id="about">
        <div class="main-container">
            <h1 class="text-3xl font-semibold mb-10">Популярные сервисы </h1>
            <a-row :gutter="[20, 20]">
                <a-col :xs="24" :md="8">
                    <div class="p-3 md:p-6 rounded-lg bg-white ">
                        <div class=" servise-wrap"> <img class="object-cover" src="@/assets/images/service1.svg" alt="">
                        </div>
                        <h1 class="md:text-lg font-semibold hover:text-blue-600 uppercase">Комплексное бухгалтерское
                            обслуживание
                        </h1>
                        <p> Оптимальный набор услуг для ведения бухгалтерского учета</p>
                    </div>
                </a-col>

                <a-col :xs="24" :md="8">
                    <div class="p-3 md:p-6 rounded-lg bg-white h-full">
                        <div class=" servise-wrap"> <img class="object-cover" src="@/assets/images/service2.svg" alt="">
                        </div>
                        <h1 class="md:text-lg font-semibold hover:text-blue-600 uppercase"> Регистрация ООО
                        </h1>
                        <p> Регистрация ООО с возможностью бесплатного обслуживания в течение месяца </p>
                    </div>
                </a-col>

                <a-col :xs="24" :md="8">
                    <div class="p-3 md:p-6 rounded-lg bg-white h-full">
                        <div class=" servise-wrap"> <img class="object-cover" src="@/assets/images/service3.svg" alt="">
                        </div>
                        <h1 class="md:text-lg font-semibold hover:text-blue-600 uppercase">
                            Регистрация ИП
                        </h1>
                        <p>
                            Оформление всей необходимой документации и ведение бухучета
                        </p>
                    </div>
                </a-col>

                <a-col :xs="24" :md="8">
                    <div class="p-3 md:p-6 rounded-lg bg-white h-full">
                        <div class=" servise-wrap"> <img class="object-cover" src="@/assets/images/service4.svg" alt="">
                        </div>
                        <h1 class="md:text-lg font-semibold hover:text-blue-600 uppercase"> Проверка состояния учета

                        </h1>
                        <p> Оптимальный набор услуг для ведения бухгалтерского учета</p>
                    </div>
                </a-col>

                <a-col :xs="24" :md="8">
                    <div class="p-3 md:p-6 rounded-lg bg-white h-full">
                        <div class=" servise-wrap"> <img class="object-cover" src="@/assets/images/service5.svg" alt="">
                        </div>
                        <h1 class="md:text-lg font-semibold hover:text-blue-600 uppercase">
                            Сопровождение налоговых проверок
                        </h1>
                        <p> Защита Ваших интересов при проведении налоговой проверки
                        </p>
                    </div>
                </a-col>

                <a-col :xs="24" :md="8">
                    <div class="p-3 md:p-6 rounded-lg bg-white h-full ">
                        <div class=" servise-wrap"> <img class="object-cover" src="@/assets/images/service6.svg" alt="">
                        </div>
                        <h1 class="md:text-lg font-semibold hover:text-blue-600 uppercase"> Декларация 3-НДФЛ </h1>
                        <p>
                            Консультации физлиц по налоговым вычетам и возвратам, составление деклараций 3-НДФЛ
                        </p>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>
    <!-- title text  -->
    <div class="main-container py-12 md:flex gap-8">
        <div class="md:w-3/5">
            <h1 class="text-xl font-semibold text-blue-500 uppercase mb-4">Если нужна помощь здесь и сейчас </h1>
            <p class="text-4xl font-bold  mb-6 mb-2">Наша компания всегда рядом! </p>
            <p>Вам больше не придется беспокоиться о бухгалтерии, кадровых вопросах, налогах и отчётности — мы сделаем
                это за вас. Вы сможете использовать оставшееся время и финансовые ресурсы — для развития бизнеса.
                <br> <br>
                Из всего объема бухгалтерских услуг вы выбираете только то, что вам по настоящему необходимо, и платите
                только за это. Опытные сотрудники нашей компании в кратчайшие сроки восстановят бухгалтерский учет или
                организуют качественное бухгалтерское обслуживание вашей компании.
            </p>
        </div>
        <div class="md:w-2/5">
            <a-row :gutter="[20, 20]">
                <a-col :span="12">
                    <div class="bg-blue-600 text-white p-6 rounded-xl overflow-hidden space-y-2 md:space-y-4"
                        style="height: 150px;">
                        <h3 class="md:text-lg font-bold">Доступно </h3>
                        <p class="">Консультации на понятном языке без сложных терминов </p>
                    </div>
                </a-col>

                <a-col :span="12">
                    <div class="bg-blue-600 text-white p-6 rounded-xl overflow-hidden space-y-2 md:space-y-4"
                        style="height: 150px;">
                        <h3 class="text-lg font-bold">Быстро </h3>
                        <p class="">Широкий перечень разовых услуг, оперативная помощь </p>
                    </div>
                </a-col>

                <a-col :span="12">
                    <div class="bg-blue-600 text-white p-6 rounded-xl overflow-hidden space-y-2 md:space-y-4"
                        style="height: 150px;">
                        <h3 class="text-lg font-bold">Круглосуточно </h3>
                        <p class="">Бесплатная поддержка специалистов 24/7 </p>
                    </div>
                </a-col>

                <a-col :span="12">
                    <div class="bg-blue-600 text-white p-6 rounded-xl overflow-hidden space-y-2 md:space-y-4"
                        style="height: 150px;">
                        <h3 class="text-lg font-bold">Надёжно </h3>
                        <p class="">Финансовые гарантии на 100 млн рублей </p>
                    </div>
                </a-col>
            </a-row>
        </div>

    </div>
    <!-- servises card -->

    <div class="main-container pt-12 pb-16">
        <h1 class=" text-3xl font-bold mb-12">Мы многое умеем </h1>
        <a-row :gutter="[36, 36]">
            <a-col :xs="24" :md="12" :lg="8" >
                <div class="flex gap-4 items-center card-servise">
                    <img src="@/assets/images/f1.svg" alt="">
                    <p>Помогать в решении юридических вопросов </p>
                </div>
            </a-col>

            <a-col :xs="24" :md="12" :lg="8" >
                <div class="flex gap-4 items-center card-servise">
                    <img src="@/assets/images/f2.svg" alt="">
                    <p>Рассчитывать и оплачивать налоги и взносы </p>
                </div>
            </a-col>

            <a-col :xs="24" :md="12" :lg="8" >
                <div class="flex gap-4 items-center card-servise">
                    <img src="@/assets/images/f3.svg" alt="">
                    <p>Готовить первичные документы
                    </p>
                </div>
            </a-col>
            <!-- 3 / 4 -->
            <a-col :xs="24" :md="12" :lg="8" >
                <div class="flex gap-4 items-center card-servise">
                    <img src="@/assets/images/f4.svg" alt="">
                    <p>Проверять контрагентов и подрядчиков
                    </p>
                </div>
            </a-col>

            <a-col :xs="24" :md="12" :lg="8" >
                <div class="flex gap-4 items-center card-servise">
                    <img src="@/assets/images/f5.svg" alt="">
                    <p>Готовить и сдавать отчётность
                    </p>
                </div>
            </a-col>

            <a-col :xs="24" :md="12" :lg="8" >
                <div class="flex gap-4 items-center card-servise">
                    <img src="@/assets/images/f6.svg" alt="">
                    <p>Готовить документы для налоговой
                    </p>
                </div>
            </a-col>
            <!-- 6/ 7 -->
            <a-col :xs="24" :md="12" :lg="8" >
                <div class="flex gap-4 items-center card-servise">
                    <img src="@/assets/images/f7.svg" alt="">
                    <p>Вести кадровый учёт и расчёты с сотрудниками

                    </p>
                </div>
            </a-col>

            <a-col :xs="24" :md="12" :lg="8" >
                <div class="flex gap-4 items-center card-servise">
                    <img src="@/assets/images/f8.svg" alt="">
                    <p>Легально и безопасно снижать налоги

                    </p>
                </div>
            </a-col>

            <a-col :xs="24" :md="12" :lg="8" >
                <div @click="showModal"
                    class="bg-blue-500  uppercase  w-ful h-full flex items-center text-center font-bold text-lg text-white rounded-lg justify-center hover:bg-sky-400">
                    Заказать консултацию
                </div>
            </a-col>
            <a-modal v-model:open="open" :footer="false" @ok="handleOk">
                <ZayavkaForm></ZayavkaForm>
            </a-modal>


        </a-row>
    </div>
</template>

<script setup>
import ZayavkaForm from './ZayavkaForm.vue';
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
.servise-wrap {
    padding: 1.2rem;
    width: fit-content;
    background: #155e75;
    border-radius: 6px 50% 50% 50%;
    margin-bottom: 10px;
}

.servise-wrap img {
    width: 40px;
    aspect-ratio: 1/1;

    @media (max-width:610px) {
        width: 30px;
    }
}

.card-servise p {
    font-size: 20px;
    line-height: 1.5;
}
</style>