<template>
  <main style="background: #F8F9F9">

    <div>
      <div class=" main-height__blue bg-blue-400 relative">
        <div class="flex relative  text-white justify-center">
          <p class="flex main-text__shadow text-5xl px-12 text-center">
            {{ t('main-text') }}
          </p>

          <img alt="" class="left-10 absolute" src="/src/assets/Icons/Line.svg" />
          <img alt="" class="left-10 absolute" src="../assets/Icons/Line.svg" />
          <img alt="" class="left-80 top-20 absolute" src="../assets/Icons/Line.svg" />
          <img alt="" class="right-40 absolute" src="../assets/Icons/Line.svg" />
        </div>
        <div class="flex flex-col items-center justify-center ">
          <p class="text-white text-sm text-center leading-4 my-4 unique__style">
            {{$t('third-text')}}
          </p>
          <div class="flex flex-col items-center bg-blue-400 justify-center">
            <button class="bg-white flex justify-center rounded-3xl p-3" onclick="btn">
              <span class="mr-2"> {{$t('section-text')}}</span>
            </button>
            <div class="absolute left-42 top-60">
              <img alt="" src="../assets/m.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="flex flex-col justify-center mt-64 items-center text-center text-4xl " id="about">
      <div class="font-bold">{{$t('about')}}</div>
      <p class="mx-4 mt-7 text-sm " style="background: #F8F9F9">
        Компания Solutions Lab зарекомендовала себя как опытный ИТ-интегратор и надежный партнер в
        области финтех и электронной коммерции. <br />
        Предоставляя качественные услуги и решения мы способствуем развитию и укреплению экономики,
        государства в целом. Быть лучше, чем вчера и <br />
        развивать бизнес наших заказчиков — таков наш подход к работе. <br />
        Краеугольный камень в нашей стратегии это достойная оценка кадрового потенциала и постоянное
        совершенствование применяемых технологий.
      </p>
    </section>
    <div class="pt-28" ref="main">
      <div>
        <section class="flex  justify-center items-center font-bold text-4xl">{{$t('project')}}</section>
        <!--          card start-->
        <div class="flex justify-center">

          <div class="flex m-10 items-center">
            <div>
              <img alt="" class="ml-10" src="../assets/Icons/paymart.png" />

              <p class="text-2xl font-bold mt-10 mr-9">{{t('Cистема рассрочки')}}</p>
              <p class="flex mt-4">
                Онлайн-система, предоставляющая<br />
                своим пользователям возможность<br />
                приобретать товары и услуги на<br />
                условиях рассрочки.
              </p>


              <div class="rounded-full w-12 p-4 bg-slate-50 flex justify-start items-center">

                <img alt="" class="bg-sky-100" src="../assets/Icons/arrow-1.svg">
              </div>
            </div>
            <img alt="" src="../assets/Icons/macbook.png" />


          </div>

          <div class="flex m-10 items-center">
            <div>
              <img alt="" class="ml-10" src="../assets/Icons/paymart.png" />

              <p class="text-2xl font-bold mt-10 mr-9">{{t('Маркетплейс товаров')}}</p>
              <p class="flex mt-4">
                Онлайн-система, предоставляющая<br />
                своим пользователям возможность<br />
                приобретать товары и услуги на<br />
                условиях рассрочки.
              </p>

              <div class="rounded-full w-12 p-4 bg-slate-50 flex justify-start items-center">
                <img alt="" class="" src="../assets/Icons/arrow-1.svg">
              </div>
            </div>
            <img alt="" src="../assets/Icons/macbook.png" />

          </div>

        </div>


      </div>
    </div>
  </main>


  <section class="flex flex-col justify-center items-center" style="background: #F8F9F9">

    <!--  payz card start-->
    <div class="flex rounded-lg w-4/5 justify-between items-center p-10" style="background: #FFffff">
      <div class="flex-col items-start ">
        <img alt="" class="w-14" src="../assets/Pays.png">

        <h1 class="text-2xl font-bold mt-4">{{t('Платежная система')}}</h1>
        <p class="mt-4 text-sm">{{t('main-text')}}
        </p>
      </div>
      <div>
        <img alt="" class="" src="../assets/iphone-12-pro--gold.png">

      </div>
    </div>

    <!--  payz card end-->

    <div class="flex justify-center mt-8 text-4xl font-bold">
      {{$t('Partners')}}
    </div>
    <div class="flex items-center justify-center">
      <img alt="" src="../assets/arhat.png">
      <img alt="" src="../assets/kapital-bank.png">
    </div>
    <div class="flex justify-center text-4xl font-bold">
      {{$t('certificates')}}

      <!--<div class="flex items-center  mt-16  ml-38 mr-52"><h1>Халальный бизнес</h1></div>-->
    </div>

    <!--    card start-->
    <div class="flex justify-center pt-8" style="background: #F8F9F9">
      <div class="flex items-center mr-4 rounded-xl pl-8" style="background: #FFffff;">

        <div>
          <div class="font-bold text-2xl">
            <div class="whitespace-nowrap">Халальный бизнес</div>

          </div>
          <p class="text-sm w-40 mt-4">
            Schedule daily, weekly, or custom email reports that deliver on your schedule. Add recipients to
            make
            sure your team stays updated.
          </p>
        </div>
        <img alt="" src="../assets/Sertificat-1.png">

      </div>

      <div class="flex items-center rounded-xl pl-8" style="background: #FFffff;">

        <div>
          <div class="font-bold text-2xl">
            <div class="whitespace-nowrap">Халальный бизнес</div>

          </div>
          <p class="text-sm w-40 mt-4">
            Schedule daily, weekly, or custom email reports that deliver on your schedule. Add recipients to
            make
            sure your team stays updated.
          </p>
        </div>
        <img alt="" src="../assets/Sertificat-1.png">

      </div>

    </div>


    <div class="flex items-center mt-16">
      <div class="ml-16 m-20 flex-col space-y-4">
        {{$t('Карьера в Solution Lab')}}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suspendisse tincidunt non <br> diam amet
          porttitor in nam diam. Aenean eu, quam potenti amet, duis. Vel massa amet tellus tincidunt condimentum
          maecenas leo semper. <br> Tempus odio a mattis nec, suspendisse. Ultrices mauris, feugiat enim eget sapien, at
          eu varius nullam.</p>
        <div class="flex mt-6 w-40 h-14">
          <button class="bg-sky-300 text-white flex items-center px-4 py-2" style="border-radius: 42px">
            {{$t('more')}}
            <div class="bg-white ml-2 flex justify-center items-center  rounded-full w-4 p-1">
              <img alt="" src="../assets/arrow-left.svg">
            </div>
          </button>
        </div>
      </div>
      <div>
        <img alt="" src="../assets/adver.png">
      </div>
    </div>

  </section>


</template>
<script setup>
import { ref, watch, reactive } from 'vue'
import { useI18n } from 'vue-i18n'


const { t, locale } = useI18n({ useScope: 'global' })


</script>

<style>
  .main-text__shadow {
    text-shadow: 2px 2px rgba(0, 0, 0, 1);
  }

  .main-height__blue {
    height: 90vh;
  }


  .unique__style {
    width: 63%;
  }

</style>