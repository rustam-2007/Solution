<template>
  <main style="background-color: #F8F9F9">
    <div class="" style="background: #6DB8FF">
      <div class=" main-height__blue  relative">
        <div class="flex relative text-wrap flex-wrap  text-white justify-center">
          <p class="flex main-text__shadow text-wrap font-bold text-2xl leading-9 md:text-md lg:text-5xl px-12
            text-center pt-14 ">
            {{ t('main-text') }}
          </p>

          <div class="hidden md:block lg:block">
            <img alt="" class="left-10 absolute" src="../assets/Icons/Line.svg" />
            <img alt="" class="left-10 absolute" src="../assets/Icons/Line.svg" />
            <img alt="" class="left-80 top-20 absolute" src="../assets/Icons/Line.svg" />
            <img alt="" class="right-40 absolute" src="../assets/Icons/Line.svg" />
          </div>
        </div>
        <div class="flex flex-col items-center flex-wrap justify-center">
          <p class="text-white text-sm text-wrap text-center px-4 my-4">
            {{$t('third-text')}}
          </p>
          <div class="flex flex-col items-center blue-400 justify-center">

            <button class="bg-white flex justify-center rounded-3xl p-3 items-center" onclick="btn">
              <span class="mr-2"> {{$t('section-text')}}</span>
              <img alt="" src="../assets/Icons/call.svg">
            </button>
            <div class="absolute left-42 top-80">
              <img alt="" src="../assets/m.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="flex flex-col justify-center mt-8 md:mt-64 lg:mt-64 items-center text-center text-4xl " id="about"
             tyle="background: #F8F9F9">
      <div class="font-bold pt-10 md:hidden pt-5">{{$t('about')}}</div>
      <div class="lg:mt-10 font-bold block hidden md:block">{{$t('about')}}</div>
      <p class="mx-4 mt-7 text-sm ">
        Компания Solutions Lab зарекомендовала себя как опытный ИТ-интегратор и надежный партнер в
        области финтех и электронной коммерции. <br />
        Предоставляя качественные услуги и решения мы способствуем развитию и укреплению экономики,
        государства в целом. Быть лучше, чем вчера и <br />
        развивать бизнес наших заказчиков — таков наш подход к работе. <br />
        Краеугольный камень в нашей стратегии это достойная оценка кадрового потенциала и постоянное
        совершенствование применяемых технологий.
      </p>
      <h1 class="flex font-bold items-center mt-8">Мы создали</h1>
      <!--      card-start-->
      <div class="px-4">
        <div class="flex flex-col md:flex-row lg:flex-row xl:flex-row md mt-6">
          <div class="flex flex-col bg-white p-11 mr-0 md:mr-4 rounded-md md:flex-row lg:flex-row">
            <div class="flex flex-col justify-start items-start font-bold text-4xl leading-10">
              <img alt="" src="../assets/Icons/paymart.png">
              <h1 class="font-bold text-lg mt-8 mb-2">Cистма рассрочки</h1>
              <p class="text-sm text-left " style="color:#636363">Schedule daily, weekly, or custom email <br> reports
                that
                deliver on your
                schedule. <br>
                Add
                recipients
                to
                make
                sure
                your team <br> stays updated.</p>
              <div class="flex justify-start  rouded mt-4">
                <div class="rounded-full flex justify-center items-center bg-slate-50 w-14 h-14">
                  <img src="../assets/Icons/right-blue-arrow.svg" style="width:20px">
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center mt-16">
              <img alt="" src="../assets/Icons/mobile-main%20.png">

            </div>
            <!--        second-page-->
          </div>

          <div class="flex flex-col bg-white p-11 mt-10 md:mt-0 rounded-md md:flex-row lg:flex-row">
            <div class="flex flex-col justify-start items-start font-bold text-4xl leading-10	">
              <img alt="" src="../assets/Icons/Paycart.png">
              <h1 class="font-bold text-lg mt-8 mb-2">Маркетплейс</h1>
              <p class="text-sm text-left " style="color:#636363">Schedule daily, weekly, or custom email <br> reports
                that
                deliver on your
                schedule. <br>
                Add
                recipients
                to
                make
                sure
                your team <br> stays updated.</p>
              <div class="flex justify-start  rouded mt-4">
                <div class="rounded-full flex justify-center items-center bg-slate-50 w-14 h-14">
                  <img src="../assets/Icons/right-blue-arrow.svg" style="width:20px">
                </div>

              </div>
            </div>
            <div class="flex justify-center items-center mt-16">
              <img alt="" src="../assets/Icons/mobile-main%20.png">


            </div>
          </div>
        </div>

      </div>
      <!--card-end-->
      <div>

      </div>

    </section>
    <div class="pt-4 md:pt-28 lg:mt-28">
      <div>
        <section class="justify-center items-center font-bold text-4xl hidden md:flex lg:flex">{{$t('project')
          }}
        </section>

      </div>
    </div>
  </main>


  <section class="flex flex-col justify-center items-center" style="background: #F8F9F9">

    <!--  payz card start-->

    <div class="rounded-lg w-4/5 justify-between items-center p-10 hidden md:flex lg:flex" style="background:
    #FFffff">
      <div class="flex-col items-start">
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

    <div class="flex justify-center mt-8 text-4xl font-bold ">
      {{$t('Partners')}}
    </div>
    <div class="flex items-center justify-center mt-8 flex-col md:flex-row  lg:flex-none sm:flex-row hidden ">
      <img alt="" src="../assets/arhat.png">
      <img alt="" src="../assets/kapital-bank.png">
    </div>
    <div class="flex justify-center text-4xl font-bold mt-10">
      {{$t('certificates')}}
    </div>

    <!--    card start-->
    <div class="flex justify-center pt-8 flex-col md:flex-col lg:flex-row px-4" style="background: #F8F9F9 ">

      <div class="flex flex-col md:flex-row lg:flex-row items-center rounded-xl" style="background: #FFffff;">

        <div class="flex flex-col">
          <div class="font-bold text-2xl mt-4">
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


      <!--      second cart-->
      <div class="flex flex-col md:flex-row lg:flex-row items-center rounded-xl pl-8 lg:mt-0  mt-8" style="background:
      #FFffff;">

        <div class="flex flex-col mt-4">
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


    <div class="flex items-start justify-start mt-16 flex-col md:flex-col text-left lg:flex-row">
      <div class="ml-0 md:ml-16 lg:ml-16 px-4 flex-col space-y-4 text-left">
        <h1 class="font-bold text-4xl">Карьера в Solution Lab</h1>
        <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suspendisse
          tincidunt non <br>
          diam
          amet
          porttitor in nam diam. Aenean eu, quam potenti amet, duis. Vel massa amet tellus tincidunt condimentum
          maecenas leo semper. <br> Tempus odio a mattis nec, suspendisse. Ultrices mauris, feugiat enim eget sapien, at
          eu varius nullam.</p>
        <div class="flex mt-6 w-40 h-16 left-28 sm:flex-col  md:flex-row lg:flex">
          <button class="bg-sky-300 text-white flex items-center px-4 py-2 ml-10" style="border-radius:42px">
            {{$t('more')}}
            <div class="bg-white ml-2 flex justify-center items-center  rounded-full w-4 p-1">
              <img alt="" src="../assets/arrow-left.svg">
            </div>
          </button>
        </div>
      </div>
      <div class="w-full">
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
  /*.main-text__shadow {*/
  /*  text-shadow: 2px 2px rgba(0, 0, 0, 1);*/
  /*}*/

  .main-height__blue {
    height: 90vh;
  }


  /*.unique__style {*/
  /*  width: 63%;*/
  /*}*/

</style>