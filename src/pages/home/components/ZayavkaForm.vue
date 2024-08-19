<template>
    <a-form layout="vertical" :form="form" @finish="handleSubmit">
        <h2 class="form-title">Заполните форму</h2>

        <a-form-item label="Тема обращения:">
            <a-input class="py-3  bg-slate-100" v-model:value="formData.topic" />
        </a-form-item>

        <a-form-item label="Контактные данные:" name="name"
            :rules="[{ required: true, message: 'Пожалуйста, введите имя' }]">
            <a-input class="py-3  bg-slate-100" v-model:value="formData.name" placeholder="Ваше имя *" />
        </a-form-item>

        <a-form-item name="phone" :rules="[
        { required: true, message: 'Пожалуйста, введите телефон' },
        { pattern: /^\\+998 \\d{2} \\d{3} \\d{2} \\d{2}$/, message: 'Введите телефон в формате +998 yy xxx xx xx' }
    ]">
            <a-input class="py-3  bg-slate-100" v-model:value="formData.phone" placeholder="Ваш телефон *" />
        </a-form-item>

        <a-form-item>
            <a-button type="primary" html-type="submit" block class="submit-button">
                ОСТАВИТЬ ЗАЯВКУ
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script setup>
import { ref } from 'vue';
import { message } from 'ant-design-vue';

const form = ref(null);

const formData = ref({
    topic: 'Запись на консультацию',
    name: '',
    phone: '',
});

const handleSubmit = () => {
    message.success('Заявка отправлена!');
};

const validateAgreement = (rule, value) => {
    if (!value) {
        return Promise.reject('Необходимо согласие на обработку данных');
    }
    return Promise.resolve();
};
</script>

<style scoped>
.form-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
}

.a-form-item {
    margin-bottom: 16px;
}


form label{
    font-size: 20px;
}
.submit-button {
    background-color: #20c997;
    border: none;
    font-size: 16px;
    width: fit-content;
    height: 48px;
    padding: 0 20px;
    border-radius: 4px;
}

.submit-button:hover {
    background-color: #18a77d;
}
</style>