<template>
    <div class="bg-blue-600 relative">
        <div class="main-container md:flex gap-10 py-16 mobile-bg">
            <div class="md:w-3/5 relative z-10">
                <h1 class=" text-2xl md:text-4xl text-white mb-6 font-semibold">Передайте дела команде профессионалов с
                    многолетним
                    опытом</h1>
                <h3 class="text-xl mb-4  text-white uppercase ">Как мы будем действовать: </h3>
                <ul class="actions-list">
                    <li>
                        <div>01</div>
                        <p>Возьмём в работу ваши дела. За вами закрепляется
                            персональная команда,
                            заточенная под сферу
                            услуг.
                        </p>
                    </li>

                    <li>
                        <div>02</div>
                        <p>Отныне вся рутинная работа за нами - бухгалтерия, налоги и кадры. Окажем юридическую
                            поддержку, проверим и подберем контрагентов.
                        </p>
                    </li>

                    <li>
                        <div class="h-fit">03</div>
                        <p>Вы просто ставите задачи ассистенту и присылаете фото документов в приложении.
                        </p>
                    </li>
                </ul>
            </div>
            <div class="md:w-2/5 bg-white p-10 rounded-lg relative z-10">

                <h1 class="font-semibold text-2xl">Оставить заявку </h1>
                <p class="text-gray-700 mb-4">Оставьте заявку! Наш специалист перезвонит Вам через 2 минуты и
                    проконсультирует по всем вопросам.
                </p>
                <a-form :model="formData" :rules="rules" @finish="handleSubmit" layout="vertical">
                    <a-form-item label="Ваше имя" name="name">
                        <a-input v-model:value="formData.name" class="py-3" placeholder="Имя" />
                    </a-form-item>
                    <br>
                    <a-form-item label="Телефонный номер" name="phone">
                        <a-input v-model:value="formData.phone" class="py-3" placeholder="Номер" />
                    </a-form-item>
                    <br>
                    <a-form-item>
                        <a-button type="primary" html-type="submit"
                            class="w-full bg-blue-600 h-12 uppercase font-semibold">
                            Оставить заявку
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>

        </div>
        <div class="hidden md:block absolute top-0 right-0 w-2/6 h-full ">
            <img src="@/assets/images/bg3.jpg" alt="" class="h-full w-full object-cover">
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { Form } from 'ant-design-vue';

const form = ref(Form.useForm()[0]);
const formData = ref({
    name: '',
    phone: '+998 '
});

const rules = ref({
    name: [{ required: true, message: 'Введите имя', trigger: 'blur' }],
    phone: [
        { required: true, message: 'Введите ваш номер', trigger: 'blur' },
        { pattern: /^\+998 \d{9} $/, message: 'Введите номер правильно', trigger: 'blur' }
    ]
});

const handleSubmit = () => {
    console.log('Name:', formData.value.name);
    console.log('Phone:', formData.value.phone);
};
</script>

<style scoped>
:deep(.ant-form-item-required) {
    font-size: 18px !important;
    font-weight: 600;
}

:deep(.ant-form-item) {
    margin-bottom: 0;
}

.mobile-bg {
    background-image: url('@/assets/images/bg3.jpg');
    background-repeat: no-repeat;
    background-color: #ffffff6d;

}

.mobile-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3b83f670;
    pointer-events: none;
    /* Чтобы этот слой не блокировал взаимодействие с элементами под ним */
    z-index: 1;
}

.actions-list li {
    display: flex;
    gap: 20px;
    align-items: flex-end;
    margin-bottom: 2.5rem;
    width: fit-content
}

.actions-list p {
    color: white;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 500;

    @media (max-width:620px) {
        font-size: 16px;
    }
}

.actions-list>li>div {
    line-height: 0.85;
    font-weight: 900;
    font-size: 90px;

    opacity: 0.5;
    color: rgb(24, 66, 155);

    @media (max-width:610px) {
        font-size: 50px;
        line-height: normal;
    }

}
</style>