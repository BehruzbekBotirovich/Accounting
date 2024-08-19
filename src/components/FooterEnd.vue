<template>
    <div class="main-container py-8">
        <div class="company-info mb-6">
            <div class="mb-8"> <img src="@/assets/images/logo.png"> </div>
            <p>{{ companyName }}</p>
            <p> {{ orgn }}</p>
            <p>INN {{ inn }}</p>
            <p>Обращаем ваше внимание, что сайт носит исключительно информационный характер и ни при каких условиях не
                является публичной офертой.</p>
        </div>

        <div class="social-links">
            <a :href=location_link> <img src="./icons/address-icon.svg" alt=""> {{ location }}</a>
            <a :href=email_link> <img src="./icons/mail-icon.svg" alt=""> {{ email }}</a>
            <a :href=number_link> <img src="./icons/phone-icon.svg" alt=""> {{ number }}</a>
            <a :href=tg_link> <img src="./icons/telegram.svg" alt="">Telegram </a>
            <div></div>
        </div>


    </div>
</template>

<script setup>
const companyName = 'ООО "НАЗВАНИЕ КОМПАНИИ'
const orgn = "ОРГН: 11733280XXXXX"
const inn = '33271XXXXX'


// socila media
const location = "Россия, 125040, г. Москва, ул. Большая Пироговская 18/1"
const email = "beha@gmail.com"
const number = "+998 90 000 12 34"

const location_link = "Россия, 125040, г. Москва, ул. Большая Пироговская 18/1"
const email_link = "beha@gmail.com"
const number_link = "+998 90 000 12 34"
const tg_link = "#" //link here
</script>

<style scoped>
.company-info>p {
    font-size: 14px;
    width: 30%;
}

.social-links {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.social-links>a {
    display: flex;
    gap: 10px;
    align-items: center;
}
</style>