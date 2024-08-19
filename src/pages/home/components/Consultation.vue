<template>
    <div class="flex">
        <div class="w-1/2 px-28 py-12 text-white bg-blue-800">
            <h1 class="text-4xl font-bold  mb-4 relative z-20 uppercase" style="line-height: 60px;">
                Получите бесплатную
                экспресс-консультацию по любым вопросам
            </h1>
            <p class="mb-4">
                Оставьте заявку! Наш специалист с опытом работы более 10 лет перезвонит Вам через 2 минуты. Это
                абсолютно
                бесплатно.
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
                    <a-button type="primary" html-type="submit" class="w-full bg-blue-300 h-12 uppercase font-semibold">
                        Оставить заявку
                    </a-button>
                </a-form-item>
            </a-form>
        </div>

        <div class="w-1/2">
            <img class="w-full h-full object-cover" src="https://buhgalter2.sboxdemo.ru/images/site/call-to-action2.jpg"
                alt="">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Form } from 'ant-design-vue';

const form = ref(Form.useForm()[0]);
const formData = ref({
    name: '',
    phone: ''
});

const rules = ref({
    name: [{ required: true, message: 'Введите имя', trigger: 'blur' }],
    phone: [
        { required: true, message: 'Введите ваш номер', trigger: 'blur' },
        { pattern: /^\+998 \d{2} \d{3} \d{2} \d{2}$/, message: 'Введите номер правильно', trigger: 'blur' }
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
    color: white !important;
    font-weight: 600;
}
</style>