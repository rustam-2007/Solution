<template>
  <main class="flex bg-blue-400 justify-between	 items-center text-white font-bold blue__height px-28 p-10">
    <h1 class="text-4xl">{{localeItem?.job}}</h1>
    <p class="text-base">{{localeItem?.salary}} sum</p>
  </main>
  <section class="flex justify-around mt-4" style="background: #F8F9F9 !important;">
    <div class="flex bg-white w-1/4 rounded-full p-2 items-start justify-center" style="background: #FFffff
    !important;">
      <div class="bg-blue-400 rounded-full p-3">
        <img alt="Bag" src="../assets/Icons/bag.svg" style="height: 25px">
      </div>


      <div class="ml-4">
        <h1 class="text-md font-bold">Требуемый опыт работы:</h1>
        <p class="text-base">{{localeItem?.skills}} года</p>
      </div>
    </div>
    <div class="flex bg-white w-1/4 rounded-full p-2 items-start" style="background: #FFffff !important;">


      <div class="bg-blue-400 rounded-full p-3">
        <img alt="Bag" src="../assets/Icons/bag.svg">
      </div>

      <div class="flex justify-center items-center ml-4">
        <h1 class="text-md font-bold mr-2" >Тип занятости: </h1>
        <p class="text-base">Полная занятость удаленная работа</p>
      </div>


    </div>
    <div class="flex bg-white w-1/4 rounded-full p-2 items-start" style="background: #FFffff !important;">


      <div class="bg-blue-400 rounded-full p-3">
        <img alt="Bag" src="../assets/Icons/bag.svg" style="height: 25px">
      </div>

      <div class="ml-4">
        <h1 class="text-md font-bold">Место работы:</h1>
        <p class="text-base">{{localeItem?.country}}</p>
      </div>


    </div>
  </section>

  <section class="ml-12 mt-8">
    <h1 class="font-bold">Обязанности:</h1>

    <p class="text-base">- Работа над сложными и интересными веб-интерфейсами; <br> - Создание дизайна страниц с учетом
      {{localeItem?.job}};<br> -
      Разработка и улучшение сценариев поведения пользователей; <br> - Дизайн макетов адаптивных версий.</p>


    <h1 class="font-bold">Требования:</h1>
    <p class="text-base	">- Работа над сложными и интересными веб-интерфейсами; <br> - Создание дизайна страниц с
      учетом UX и UI;<br> -
      Разработка и улучшение сценариев поведения пользователей; <br> - Дизайн макетов адаптивных версий.</p>


    <h1 class="font-bold">Условия работы:</h1>
    <p class="text-base">- Удаленная работа;
      - Бонусы за результат;<br>
      - Возможности профессионального роста;<br>
      - Оплата 1000 - 3500 евро в зависимости от вашего текущего уровня (будет расти по мере получения опыта).<br>

      Если ты считаешь, что подходишь нам, отправь копию своего резюме и портфолио (ОБЯЗАТЕЛЬНО!).<br>
      Кандидатам, которые пройдут в узкий круг отбора, будет предложено ТЗ.
    </p>

  </section>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const localeItem = ref(null)
const localeIndex = ref(null)
console.log('item')

onMounted(() => {
  localeItem.value = localStorage.getItem('selectedItem')
  localeIndex.value = localStorage.getItem('selectedIndex')

  localeItem.value = JSON.parse(localeItem.value)
  localeIndex.value = JSON.parse(localeIndex.value)

  console.log('localeItem.value', localeItem.value)

})

</script>

<style scoped>

  .blue__height {
    height: 176px;

  }
</style>