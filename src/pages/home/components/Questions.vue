<template>
    <div class="main-container my-12">
        <h1 class="text-3xl font-bold mb-6">Почитайте ответы на часто задаваемые вопросы</h1>
        <a-collapse v-model:activeKey="activeKey" :bordered="false" expandIconPosition="end" ghost="true">
            <a-collapse-panel v-for="item in SavolJavob" :header=item.savol>
                <p>{{ item.javob }}</p>
            </a-collapse-panel>

        </a-collapse>
    </div>

</template>
<script setup>
import { ref } from 'vue';
const SavolJavob = [
    { savol: 'За мной будет закреплен личный бухгалтер? ', javob: "Закрепляем за компанией опытного бухгалтера, который будет вести учет компании и помогать в принятии сложных решений в бухгалтерских и кадровых вопросах." },
    { savol: 'За мной будет закреплен личный бухгалтер? ', javob: "Закрепляем за компанией опытного бухгалтера, который будет вести учет компании и помогать в принятии сложных решений в бухгалтерских и кадровых вопросах." },
    { savol: 'За мной будет закреплен личный бухгалтер? ', javob: "Закрепляем за компанией опытного бухгалтера, который будет вести учет компании и помогать в принятии сложных решений в бухгалтерских и кадровых вопросах." },
    { savol: 'За мной будет закреплен личный бухгалтер? ', javob: "Закрепляем за компанией опытного бухгалтера, который будет вести учет компании и помогать в принятии сложных решений в бухгалтерских и кадровых вопросах." },

]
</script>
<style scoped>
.ant-collapse-item {
    font-size: 1.2rem;
    border-bottom: 1px solid #cbd5e1;
}

.ant-collapse-item:hover {
    background: #f8fafc;
}

:deep(.ant-collapse-content-box) {
    padding: 0px 10px 20px 0 !important;
}

:deep(.ant-collapse-header) {
    padding: 1.2rem 1rem 1.2rem 0 !important;
}
:deep(.ant-collapse-header:hover) {
    color: #006878;
}


.ant-collapse-content-box>p {
    font-size: 16px;
}
</style>