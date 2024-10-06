<template>
  <main style="background: #f8f9f9">
    <div class="bg-blue-400 relative blue__height flex items-center justify-between px-28">
      <h1 class="text-white text-4xl">{{ $t('Вакансии') }}</h1>
      <div class="flex">
        <p class="text-white mr-4">{{ $t('Главная') }}</p>
        <img alt="" class="mr-4" src="../assets/Icons/right-arrow.svg" />
      </div>
      <input :placeholder="$t('search_vacancy')"
             class="w-4/5 px-4 custom__input absolute h-10 bg-white border-none rounded-3xl "
             type="text" v-model="inputRef">


    </div>

    <section>
      <div class="flex justify-center mt-12 mr-5 text-4xl font-bold leading-7">
        {{ $t('Разработка') }}
      </div>

      <!--      collapse start-->
      <div :key="item.job" class="collapsed-class" v-for="(item, index) in developersData">
        <div @click="clickRowFunc(item, index)" class="flex justify-between mb-3">
          <p>{{ item.job }}</p>
          <p>{{ item.level }}</p>
          <img alt="" src="../assets/Icons/right-arrow-collapse.svg" />
        </div>
      </div>
      <!--      collapse end-->
    </section>
    <section>
      <div class="flex justify-center mt-12 mr-5 text-4xl font-bold leading-7">
        {{ $t('design') }}
      </div>

      <!--      collapse start-->
      <div :key="item" class="collapsed-class" v-for="(item, index) in developersData3">
        <div @click="clickRowFunc(item, index, index+1)" class="flex justify-between mb-3">
          <p>{{ item.job }}</p>
          <p>{{ item.level }}</p>
          <img alt="" src="../assets/Icons/right-arrow-collapse.svg" />
        </div>
      </div>

      <!--      collapse end-->
    </section>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const inputRef = ref(null)

const developersData = ref([
  {
    job: 'UX/UI designer',
    level: 'Junior',
    salary: 8000000,
    skills: 2,
    country: 'Xorazm'
  },
  {
    job: 'Front-end Vue.js',
    level: 'Senior',
    salary: 18000000,
    skills: 1,
    country: 'Namangan'
  },
  {
    job: 'Backend Node js',
    level: 'middle',
    salary: 3000000,
    skills: 5,
    country: 'Jizzax'
  },
  {
    job: 'C# Dot.net',
    level: 'FullStack',
    salary: 3000000,
    skills: 3,
    country: 'Samarkand'
  }
])
const developersData3 = ref([
  {
    job: 'UX/UI designer',
    level: 'middle/senior',
    salary: 3000000,
    skills: 4,
    country: 'Xorazm'
  },
  {
    job: 'SMM designer',
    level: 'middle/senior',
    salary: 5000000,
    skills: 6,
    country: 'Xorazm'
  }
])

const clickRowFunc = (item, index, indexNumber) => {
  localStorage.setItem('selectedItem', JSON.stringify(item))
  localStorage.setItem('selectedIndex', JSON.stringify(index))
  router.push('/single')

}


watch(inputRef, (newX) => {

  developersData.value.filter(item => {
    const temp = inputRef.value.split(' ')
    return temp.includes(inputRef.value)
  })

  console.log('developersData.value.', developersData.value)

})

</script>

<style scoped>
  .blue__height {
    height: 176px;
  }

  .custom__input {
    -webkit-appearance: none;
    outline: none;
    bottom: -20px;
  }

  .collapsed-class {
    border-bottom: 1px solid gray;
    width: 80%;
    margin: 20px auto;
  }
</style>