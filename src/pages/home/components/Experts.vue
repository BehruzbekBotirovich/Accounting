<template>
    <div class="bg-gray-100">


        <div class="main-container py-10" id="experts">
            <div class="flex items-center justify-between mb-10">
                <h1 class="font-semibold text-4xl ">Наши эксперты </h1>
                <div class="flex gap-2">
                    <button @click="prevSlide" class="nav-button">
                        <LeftOutlined />
                    </button>
                    <button @click="nextSlide" class="nav-button">
                        <RightOutlined />
                    </button>
                </div>
            </div>
            <a-carousel ref="carousel" :dots="false" :slidesToShow="3" :infinite="true" :autoplay="true"
                :autoplaySpeed="4000">
                <div v-for="card in cards" :key="card.id" class="carousel-card">


                    <a-card hoverable>
                        <template #cover>
                            <img :src="card.image" />
                        </template>
                        <a-card-meta :title=card.title>
                            <template #description>{{ card.description }}</template>
                        </a-card-meta>
                    </a-card>
                </div>
            </a-carousel>
        </div>


    </div>

</template>

<script setup>
import { ref } from 'vue';
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';
const cards = ref([
    { id: 1, title: 'Giyasov Bobur Barotboyevich', image: 'https://buhgalter2.sboxdemo.ru/assets/cache_image/images/team/team2_394x394_641.jpg', description: " Руководитель экспертной поддержки. Специализация: налоговое, административное, трудовое право" },
    { id: 2, title: 'Giyasov Bobur Barotboyevich', image: 'https://buhgalter2.sboxdemo.ru/assets/cache_image/images/team/team2_394x394_641.jpg', description: " Руководитель экспертной поддержки. Специализация: налоговое, административное, трудовое право" },
    { id: 3, title: 'Giyasov Bobur Barotboyevich', image: 'https://buhgalter2.sboxdemo.ru/assets/cache_image/images/team/team2_394x394_641.jpg', description: "  трудовое право" },
    { id: 4, title: 'Giyasov Bobur Barotboyevich', image: 'https://buhgalter2.sboxdemo.ru/assets/cache_image/images/team/team2_394x394_641.jpg', description: " Руководитель экспертной поддержки. Специализация: налоговое, административное, трудовое право" },
    { id: 5, title: 'Giyasov Bobur Barotboyevich', image: 'https://buhgalter2.sboxdemo.ru/assets/cache_image/images/team/team2_394x394_641.jpg', description: " Руководитель экспертной поддержки. Специализация: налоговое, административное, трудовое право" },
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
    padding: 10px;
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