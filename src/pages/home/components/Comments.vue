<template>
    <div class="bg-gray-100">
        <div class="main-container py-10 ">
            <div class="flex items-center justify-between mb-10">
                <h1 class="font-semibold text-4xl ">Отзывы постоянных клиентов </h1>
                <div class="flex gap-2">
                    <button @click="prevSlide" class="nav-button">
                        <LeftOutlined />
                    </button>
                    <button @click="nextSlide" class="nav-button">
                        <RightOutlined />
                    </button>
                </div>
            </div>
            <a-carousel ref="carousel" :dots="false" :infinite="true" :autoplay="true" autoplaySpeed="10000">
                <div v-for="card in cards" :key="card.id" class="carousel-card ">
                    <div class="carousel-text relative">
                        <h1 class="text-3xl pb-4 mb-4 border-b font-semibold "> {{ card.title }}</h1>
                        <div class="text-base px-14"> {{ card.description }}</div>
                        <QuoteIcon class="absolute top-14 left-0 rotate-180"></QuoteIcon>
                        <QuoteIcon class="absolute bottom-0 right-0"></QuoteIcon>
                    </div>
                    <div class="carousel-img "> <a-image :src=card.image class="object-cover"></a-image> </div>

                </div>
            </a-carousel>
        </div>


    </div>

</template>

<script setup>
import { ref } from 'vue';
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';
import QuoteIcon from '@/components/icons/QuoteIcon.vue'
const cards = ref([
    { id: 1, title: 'Giyasov B.B ', image: 'https://image.slidesharecdn.com/paperdoc126/85/Paper-doc-1-320.jpg', description: " После открытия ИП была в растерянности по ведению бухгалтерии, тем более что сразу надо было сдавать отчеты за квартал.После открытия ИП была в растерянности по ведению бухгалтерии, тем более что сразу надо было сдавать отчеты за квартал.После открытия ИП была в растерянности по ведению бухгалтерии, тем более что сразу надо было сдавать отчеты за квартал." },
    { id: 2, title: 'Giyasov B.B ', image: 'https://image.slidesharecdn.com/paperdoc126/85/Paper-doc-1-320.jpg', description: " После открытия ИП была в растерянности по ведению бухгалтерии, тем более что сразу надо было сдавать отчеты за квартал.После открытия ИП была в растерянности по ведению бухгалтерии, тем более что сразу надо было сдавать отчеты за квартал.После открытия ИП была в растерянности по ведению бухгалтерии, тем более что сразу надо было сдавать отчеты за квартал." },
    { id: 3, title: 'Giyasov B.B ', image: 'https://image.slidesharecdn.com/paperdoc126/85/Paper-doc-1-320.jpg', description: "  трудовое право" },
    { id: 4, title: 'Giyasov B.B ', image: 'https://image.slidesharecdn.com/paperdoc126/85/Paper-doc-1-320.jpg', description: " После открытия ИП была в растерянности по ведению бухгалтерии, тем более что сразу надо было сдавать отчеты за квартал.После открытия ИП была в растерянности по ведению бухгалтерии, тем более что сразу надо было сдавать отчеты за квартал.После открытия ИП была в растерянности по ведению бухгалтерии, тем более что сразу надо было сдавать отчеты за квартал." },
    { id: 5, title: 'Giyasov B.B ', image: 'https://image.slidesharecdn.com/paperdoc126/85/Paper-doc-1-320.jpg', description: " После открытия ИП была в растерянности по ведению бухгалтерии, тем более что сразу надо было сдавать отчеты за квартал.После открытия ИП была в растерянности по ведению бухгалтерии, тем более что сразу надо было сдавать отчеты за квартал.Среди массы предложений данная компания заинтересовала больше всех. Устроили расценки и оперативное решение вопросов. Теперь про отчеты и документы не думаю, всё делают за меня, а я полностью могу сосредоточиться на ведении бизнеса." },
]);

const carousel = ref(null);

const prevSlide = () => {
    carousel.value.prev();
};
const nextSlide = () => {
    carousel.value.next();
};
</script>

<style scoped>
:deep(.ant-card-meta-title) {
    font-size: 20px;
}

:deep(.ant-card-cover) {
    padding: 1.5rem;
    padding-bottom: 0;
}

:deep(.ant-card-meta-description) {
    height: 4.5rem;
}

:deep(.ant-card) {}

.carousel-card {
    display: flex !important;
    padding: 2rem;
    justify-content: space-between;
    border-radius: 10px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

}

.carousel-text {
    width: calc(100% - 290px);
}

.carousel-img {
    width: 249px;
    height: 321px;
    border: 2px solid #1d4ed8;
}

.carousel-img img {
    height: 100%;
    object-fit: cover;
}

.nav-button {
    font-size: 20px;
    color: white;
    padding: 10px;
    background: #1d4ed8;
    border-radius: 6px;
    display: flex;
    transition: all 0.3;
}

.nav-button:hover {
    opacity: 0.8;
}
</style>