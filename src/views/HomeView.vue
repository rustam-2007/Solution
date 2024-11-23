<template>
  <main style="background-color: #F8F9F9">
    <!--  NAVBAR-START-->
    <nav class="blue-400 px-28 py-6 hidden md:flex justify-between" style="background: #6DB8FF">

      <router-link :to="{name:'main', hash:'#main'}">
        <div class=" text-white ">
          SOLUTIONS LAB:

        </div>
      </router-link>


      <div class="text-white">

        <ul class="flex flex-row ">
          <li :key="item.path" class="mr-3" v-for="item in items">
            <router-link :to="{name:item.path, hash:`#${item.id}`}">{{item.name}}</router-link>
          </li>

          <li>

            <label class="text-black">

              <select v-model="selectLanguage">
                <option value="ru">
                  ru
                </option>
                <option value="en">en</option>
                <option value="uz">uz</option>
              </select>
            </label>
            <!--            {{ $t('company') }}-->


            <!--            <span>{{ greeting }}: {{selectLanguage}}</span>-->
          </li>
        </ul>


      </div>

    </nav>
    <header class="relative">
      <nav class="block md:hidden px-4 py-2 blue-400" style="background:#6DB8FF">

        <div class="flex justify-between items-center sm:px-2">
          <router-link :to="{name:'main', hash:'#main'}">
            <div class="text-white text-sm">
              SOLUTIONS LAB:

            </div>
          </router-link>
          <div @click="burgerClick">
            <img alt="Burger image" src="../assets/Icons/burger.svg">
          </div>
        </div>
      </nav>
      <div :class="{'hidden':!showHide}" class="absolute w-full" style="height: 270px; color: white; background:
      #6DB8FF; top: 45px;
    z-index: 99999;">

        <ul class="flex flex-col text-right">
          <li :key="item.path" class="mr-3" v-for="item in items">
            <router-link :to="{name:item.path, hash:`#${item.id}`}">{{item.name}}</router-link>
          </li>

          <li>

            <label class="text-black mr-3">

              <select v-model="selectLanguage">
                <option value="ru">
                  ru
                </option>
                <option value="en">en</option>
                <option value="uz">uz</option>
              </select>
            </label>
            <!--            {{ $t('company') }}-->


            <!--            <span>{{ greeting }}: {{selectLanguage}}</span>-->
          </li>
        </ul>


      </div>
    </header>
    <!--  NAVBAR-END-->
    <router-view />
    <!--  FOOTER-START-->


    <footer style="background-color: #F8F9F9">
      <div class="flex flex-col justify-between py-16 items-start ml-8 md:mx-24 lg:mx-24  md:flex-row lg:flex-row">
        <div class="mt-6 md:mt-0 lg:mt-0 flex flex-col">
          <div class="flex justify-start font-bold items-center">
            <h1>SOLUTIONS LAB</h1>
            <img alt="" src=".../assets/Icons/double-round.svg">
            <!--            icons-start-->
            <div class="flex md:hidden lg:hidden ml-4">
              <div class="rounded-full mr-2 flex justify-center items-center bg-white h-8 w-8">
                <img alt="" src="../assets/Icons/f.svg">
              </div>
              <div class="rounded-full mr-2 flex justify-center items-center bg-white h-8 w-8">
                <img alt="" src="../assets/Icons/f.svg">
              </div>
              <div class="rounded-full flex justify-center items-center bg-white h-8 w-8">
                <img alt="" src="../assets/Icons/f.svg">
              </div>

            </div>
            <!--            icons-end-->
          </div>
          <p class="flex">Open an account in minutes, <br> get full Control for much <br> longer.</p>
          <div class="flex hidden md:flex lg:flex">
            <!--            facebook-icon-start-->
            <svg fill="none" height="110" viewBox="0 0 110 110" width="110" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_10338_1509)">
                <path
                  d="M54.9941 67.7008C68.798 67.7008 79.9883 56.5749 79.9883 42.8504C79.9883 29.1259 68.798 18 54.9941 18C41.1903 18 30 29.1259 30 42.8504C30 56.5749 41.1903 67.7008 54.9941 67.7008Z"
                  fill="white" />
                <path
                  d="M54.9941 67.7008C68.798 67.7008 79.9883 56.5749 79.9883 42.8504C79.9883 29.1259 68.798 18 54.9941 18C41.1903 18 30 29.1259 30 42.8504C30 56.5749 41.1903 67.7008 54.9941 67.7008Z"
                  stroke="white" />
              </g>
              <path
                d="M53.6945 50.1975L53.674 43.9382H50.9961V41.2557H53.674V39.4673C53.674 37.0538 55.1661 35.8906 57.3155 35.8906C58.3451 35.8906 59.2299 35.9674 59.4878 36.0017V38.524L57.9971 38.5247C56.8281 38.5247 56.6018 39.0811 56.6018 39.8977V41.2557H59.9226L59.0299 43.9382H56.6018V50.1975H53.6945Z"
                fill="#1E2532" />
              <defs>
                <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="109.701"
                        id="filter0_d_10338_1509" width="109.988"
                        x="0" y="0">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix"
                                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="12" />
                  <feGaussianBlur stdDeviation="15" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10338_1509" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_10338_1509" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
            <!--            facebook-icon-end-->


            <!--            instagram-icon-start-->
            <svg fill="none" height="110" viewBox="0 0 111 110" width="111" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_10338_1512)">
                <path
                  d="M55.9746 67.7008C69.7785 67.7008 80.9688 56.5749 80.9688 42.8504C80.9688 29.1259 69.7785 18 55.9746 18C42.1707 18 30.9805 29.1259 30.9805 42.8504C30.9805 56.5749 42.1707 67.7008 55.9746 67.7008Z"
                  fill="#222831" />
                <path
                  d="M55.9746 67.7008C69.7785 67.7008 80.9688 56.5749 80.9688 42.8504C80.9688 29.1259 69.7785 18 55.9746 18C42.1707 18 30.9805 29.1259 30.9805 42.8504C30.9805 56.5749 42.1707 67.7008 55.9746 67.7008Z"
                  stroke="white" />
              </g>
              <g clip-path="url(#clip0_10338_1512)">
                <path
                  d="M59.7243 35.3984H52.2261C50.1555 35.3984 48.4769 37.0673 48.4769 39.126V46.5811C48.4769 48.6398 50.1555 50.3087 52.2261 50.3087H59.7243C61.7949 50.3087 63.4734 48.6398 63.4734 46.5811V39.126C63.4734 37.0673 61.7949 35.3984 59.7243 35.3984Z"
                  stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path
                  d="M58.9743 42.3845C59.0669 43.0049 58.9603 43.6386 58.6697 44.1953C58.3792 44.7521 57.9194 45.2036 57.3559 45.4856C56.7924 45.7676 56.1538 45.8657 55.531 45.7661C54.9081 45.6664 54.3327 45.374 53.8867 44.9305C53.4406 44.487 53.1465 43.9149 53.0463 43.2957C52.946 42.6764 53.0448 42.0415 53.3284 41.4812C53.612 40.9209 54.0661 40.4638 54.6261 40.175C55.1861 39.8861 55.8234 39.7801 56.4474 39.8721C57.084 39.966 57.6733 40.2609 58.1283 40.7133C58.5833 41.1657 58.8799 41.7516 58.9743 42.3845Z"
                  stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <ellipse cx="60.098" cy="38.7511" fill="white" rx="1.125" ry="1.11827" />
              </g>
              <defs>
                <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="109.701"
                        id="filter0_d_10338_1512" width="109.988"
                        x="0.980469" y="0">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix"
                                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="12" />
                  <feGaussianBlur stdDeviation="15" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10338_1512" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_10338_1512" mode="normal" result="shape" />
                </filter>
                <clipPath id="clip0_10338_1512">
                  <rect fill="white" height="17.8923" transform="translate(46.9769 33.9062)" width="17.9958" />
                </clipPath>
              </defs>
            </svg>

            <!--            instagram-icon-end-->

            <!--twitter-icon-start-->
            <svg fill="none" height="110" viewBox="0 0 111 110" width="111" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_10338_1521)">
                <path
                  d="M55.959 67.6969C69.7629 67.6969 80.9531 56.571 80.9531 42.8465C80.9531 29.122 69.7629 17.9961 55.959 17.9961C42.1551 17.9961 30.9648 29.122 30.9648 42.8465C30.9648 56.571 42.1551 67.6969 55.959 67.6969Z"
                  fill="white" />
                <path
                  d="M55.959 67.6969C69.7629 67.6969 80.9531 56.571 80.9531 42.8465C80.9531 29.122 69.7629 17.9961 55.959 17.9961C42.1551 17.9961 30.9648 29.122 30.9648 42.8465C30.9648 56.571 42.1551 67.6969 55.959 67.6969Z"
                  stroke="white" />
              </g>
              <path
                d="M63.2431 38.2241C62.7075 38.4923 62.1719 38.5818 61.547 38.6712C62.1719 38.3135 62.6182 37.777 62.7967 37.0616C62.2612 37.4193 61.6363 37.5982 60.9222 37.777C60.3866 37.2405 59.5832 36.8828 58.7798 36.8828C57.2623 36.8828 55.9233 38.2241 55.9233 39.8336C55.9233 40.1019 55.9233 40.2807 56.0126 40.4595C53.6025 40.3701 51.3708 39.2077 49.9426 37.4193C49.6748 37.8664 49.5855 38.3135 49.5855 38.9394C49.5855 39.923 50.1211 40.8172 50.9245 41.3537C50.4782 41.3537 50.0319 41.1749 49.5855 40.996C49.5855 42.4267 50.5675 43.5892 51.9064 43.8574C51.6386 43.9468 51.3708 43.9468 51.103 43.9468C50.9245 43.9468 50.746 43.9468 50.5675 43.8574C50.9245 45.0199 51.9957 45.914 53.3347 45.914C52.3528 46.7188 51.103 47.1659 49.6748 47.1659C49.407 47.1659 49.2285 47.1659 48.9607 47.1659C50.2997 47.9706 51.8172 48.5072 53.4239 48.5072C58.7798 48.5072 61.7256 44.0363 61.7256 40.1913C61.7256 40.1019 61.7256 39.923 61.7256 39.8336C62.3504 39.3865 62.886 38.85 63.2431 38.2241Z"
                fill="#1E2532" />
              <defs>
                <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="109.701"
                        id="filter0_d_10338_1521" width="109.988"
                        x="0.964844" y="-0.00390625">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix"
                                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="12" />
                  <feGaussianBlur stdDeviation="15" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10338_1521" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_10338_1521" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
            <!--            twitter-icon-end-->
          </div>
          <div class="flex justify-start md:flex-row lg:flex-row">
          </div>
        </div>

        <div class="mt-6 hidden md:block lg:block md:mt-0 lg:mt-0 list-none text-black">
          <h1 class="font-bold">{{ $t('company') }}</h1>
          <li class="text-lg">About</li>
          <li class="text-lg">Careers</li>
          <li class="text-lg">Mobile</li>
        </div>

        <div class="mt-6 hidden md:block lg:block md:mt-0 lg:mt-0 list-none">
          <h1 class="font-bold">Contact</h1>
          <li class="text-lg">About</li>
          <li class="text-lg">Careers</li>
          <li class="text-lg">Mobile</li>
        </div>

        <div class="mt-6 hidden md:block lg:block md:mt-0 lg:mt-0 list-none">
          <h1 class="font-bold">More</h1>
          <li class="text-lg">About</li>
          <li class="text-lg">Careers</li>
          <li class="text-lg">Mobile</li>

        </div>

        <!--        mobile footer items start-->
        <div class="flex md:hidden lg:hidden flex-row md:flex-col sm:flex-col ">
          <div class="footer_menu">
            <nav class="drop-down-menu">
              <input class="activate" id="accordion-1" name="accordion-1" type="checkbox">
              <label class=" menu-title" for="accordion-1">
                <div class="flex items-center">
                  <span>{{ $t('company') }}</span>
                  <svg class="h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M7 10l5 5l5-5H7z" fill="currentColor"></path>
                  </svg>
                </div>
              </label>
              <i class="ion-arrow-down-b"></i>
              <div class="drop-down">
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Mobile</a>
              </div>
            </nav>
          </div>
        </div>

        <div class="flex md:hidden lg:hidden flex-row md:flex-col sm:flex-col mt-4">
          <div class="footer_menu">

            <nav class="drop-down-menu">
              <input class="activate" id="accordion-2" name="accordion-2" type="checkbox">
              <label class=" menu-title" for="accordion-2">
                <div class="flex items-center">
                  <span>{{ $t('contact') }}</span>
                  <svg class="h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M7 10l5 5l5-5H7z" fill="currentColor"></path>
                  </svg>
                </div>
              </label>
              <i class="ion-arrow-down-b"></i>
              <div class="drop-down">
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Mobile</a>
              </div>
            </nav>

          </div>
        </div>

        <div class="flex md:hidden lg:hidden flex-row md:flex-col sm:flex-col mt-4 ">
          <div class="footer_menu">
            <span class="drop-down-menu">
              <input class="activate" id="accordion-3" name="accordion-3" type="checkbox">
              <label class=" menu-title" for="accordion-3">
                <div class="flex items-center">
                  <span>{{ $t('more') }}</span>
                  <svg class="h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M7 10l5 5l5-5H7z" fill="currentColor"></path>
                  </svg>
                </div>
              </label>
              <i class="ion-arrow-down-b"></i>
              <div class="drop-down">
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Mobile</a>
              </div>
            </span>
          </div>
        </div>

        <!--        mobile footer items end-->


      </div>
    </footer>
    <!--  FOTTER-END-->

  </main>

</template>

<script setup>

import { ref, watch, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })


const selectLanguage = ref('ru')

const greeting = ref(t('greeting'))

const showHide = ref(false)

const burgerClick = () => {
  showHide.value = !showHide.value
}

const items = ref(
  [
    {
      name: t('about'),
      path: 'main',
      id: 'about'

    },
    {
      name: t('main'),
      path: 'main',
      id: 'main'
    },
    {
      name: t('certificates'),
      path: 'certificates',
      id: 'certificates'


    },
    {
      name: t('partner'),
      path: 'partner',
      id: 'partner'

    },
    {
      name: t('vacancy'),
      path: 'vacancies',
      id: 'vacancies'
    }
  ]
)

watch(() => selectLanguage.value, first => {
  localStorage.setItem('lang', first)
  locale.value = first
  greeting.value = t('greeting')
  t('company')
  items.value[0].name = t('about')
  items.value[1].name = t('certificates')
  items.value[2].name = t('partner')
  items.value[3].name = t('vacancy')


}, {
  deep: true
})

</script>

<style>
  .footer_menu a {
    display: block;
    padding: 10px 15px;
  }

  .drop-down a {
    min-width: 90px;
  }

  .drop-down-menu {
    display: block;
  }


  .menu-title {
    display: block;
    padding: 10px 15px;
    color: #000;
    cursor: pointer;
  }

  .activate {
    display: none;

    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 40px;
    margin: 0 0 0 -15px;
    opacity: 0;
  }


  .drop-down a:hover {
    background: #eee;
  }


  .drop-down {
    max-height: 0;
    overflow: hidden;
  }

  .drop-down a {
    color: black;
    text-decoration: none;
    text-transform: Capitalize;

  }

  .activate:checked ~ .drop-down {
    max-height: 200px;
  }

  .drop-down, .footer_menu a, .drop-down-menu {
    -webkit-transform: translateZ(0);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  i.ion-arrow-down-b {
    position: absolute;
    top: 8px;
    color: #fff;
    right: 14px;
    font-size: 1.5em;
  }
</style>