<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                </div>
                <nav class="mt-5 space-y-1 px-2">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                    <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </nav>
              </div>
              <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
                <a href="#" class="group block flex-shrink-0">
                  <div class="flex items-center">
                    <div>
                      <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div class="ml-3">
                      <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                      <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                    </div>
                  </div>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-200/90  ">
        <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div class="flex flex-shrink-0 items-center px-4">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          </div>
          <nav class="mt-5 flex-1 space-y-1 bg-gray-200/90  px-2">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-50 text-gray-800' : 'text-gray-900 hover:bg-white hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
              <component :is="item.icon" :class="[item.current ? 'text-gray-800' : 'text-gray-900 group-hover:text-gray-900', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
              {{ item.name }}
            </a>
          </nav>
        </div>
        <div class="flex flex-shrink-0 border-t border-gray-100 p-4 hidden">
          <a href="#" class="group block w-full flex-shrink-0">
            <div class="flex items-center">
              <div>
                <img class="inline-block h-9 w-9 rounded-full" src="https://www.mistopisy.cz/modules/pruvodce/media/village/5794/gallery/3/20883.jpg" alt="" />
              </div>
              <div class="ml-3 hi">
                <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col md:pl-64">
      <div class="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
        <button type="button" class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main class="flex-1">
        <div class="">
          <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div class="absolute inset-0 bg-gray-900 opacity-90 mix-blend-multiply -z-10" aria-hidden="true"></div>
            <img
              src="https://www.mistopisy.cz/modules/pruvodce/media/village/5794/gallery/3/20883.jpg"
              alt="" class="absolute inset-0 -z-20 h-full w-full object-cover object-right md:object-center" />
            <div class="mx-auto max-w-7xl px-6 lg:px-8 z-20">
              <div class="mx-auto max-w-2xl lg:mx-0 z-10">
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl z-20 block">Z??kladn?? ??kola ??ulov??</h2>
                <p class="mt-4 text-3xl leading-8 text-gray-50 z-10">??kola pro v??echny</p>
              </div>
              <div
                class="z-10 mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                <div v-for="card in cards" :key="card.name"
                  class="flex gap-x-4 rounded-xl bg-black/70 p-6 ring-1 ring-inset ring-white/10">
                  <component :is="card.icon" class="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  <div class="text-base leading-7 z-10">
                    <h3 class="font-semibold text-lg text-white z-10">{{ card.name }}</h3>
                    <p class="mt-2 text-gray-200" v-html=" card.description"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <div class="bg-gray-100 rounded-3xl shadow-xl shadow-slate-400 py-10">
                <div class="container max-w-5xl mx-auto rounded-lg shadow-sm">
                  <div class="flex items-center justify-between">
                    <span class="text-lg text-gray-800 font-semibold">14.2.2023</span>
                  </div>
                  <div class="mt-10">
                    <p  class="text-4xl font-bold underline">??koln?? rok 2022/23</p>
                    <p  class="text-3xl font-bold mt-2">Srde??n?? zveme na Den otev??en??ch dve???? 24.2.2023</p>
                    <p  class="text-3xl font-bold mt-2">Z??pis do 1. t????dy prob??hne 4.4.2023</p>
                    <!--<p class="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur.
                      Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere.
                      Loco visa to du huic at in dixi a??r.</p>-->
                      <img src="https://ff428defb4.clvaw-cdnwnd.com/7feefea11aacc7813b28cbbd151ba21c/200104735-1f5591f55c/DOD.jpeg" alt=""
                      class="w-1/2 h-1/2 block mx-auto p-5" />
                  </div>
                </div>
              </div>
            </div>
            <!-- NEXT ARTICLE -->
            <div class="py-4">
              <div class="bg-gray-100 rounded-3xl shadow-xl shadow-slate-400 py-10">
                <div class="container max-w-5xl mx-auto rounded-lg shadow-sm">
                  <div class="flex items-center justify-between">
                    <span class="text-lg text-gray-800 font-semibold">10.2.2023</span>
                  </div>
                  <div class="mt-10">
                    <p class="text-4xl font-bold underline">Exkurze do Pevnosti pozn??n?? Olomouc</p>
                    <p class="mt-5">V r??mci projektov??ho vzd??l??v??n?? jsme se rozjeli do Olomouce do Pevnosti Pozn??n??. Vybrali jsme si program
                      Fyzika v komiksech.
                    </p>
                    <p class="mt-5">
                      Po p????jezdu jsme byli rozd??leni do dvou skupin, ka??d?? skupina m??la sv??ho pr??vodce. V r??mci vybran??ho programu jsme
                      cht??li odhalit tajemstv?? jednotliv??ch superschopnost??. D??ky sv??m znalostem z fyziky a za pomoc?? anim??tor?? jsme byli
                      schopni zadan?? ??koly zvl??dnout. Tvo??ili jsme vlastn?? komiks o fyzik??ln??ch v??dc??ch. V dal???? ????sti byly pokusy jako
                      nap??. blesk, plazmov?? koule. Pak se ??lo do planet??ria,kde jsme se pod??vali na dokument o Zemi. N??sledovala prohl??dka
                      interaktivn??ch expon??t??, kde jsem m??li ??anci pochopit n??kter?? fyzik??ln?? principy.
                    </p>
                    <p class="mt-5">
                      Z Pevnosti Pozn??n?? jsme zam????ili do historick?? ????sti m??sta Olomouc. Pro??li jsme Horn?? a Doln?? n??m??st??, vyfotili se u
                      pam??tky UNESCO - sloupu Nejsv??t??j???? Trojice a u Olomouck??ho orloje.
                    </p>
                  </div>
                  <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-10">
                    <li v-for="file in files" :key="file.source" class="relative">
                      <div
                        class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img :src="file.source" alt="" class="pointer-events-none object-cover" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- NEXT ARTICLE -->
            <div class="py-4">
              <div class="bg-gray-100 rounded-3xl shadow-xl shadow-slate-400 py-10">
                <div class="container max-w-5xl mx-auto rounded-lg shadow-sm">
                  <div class="flex items-center justify-between">
                    <span class="text-lg text-gray-800 font-semibold">3.2.2023</span>
                  </div>
                  <div class="mt-10">
                    <p class="text-4xl font-bold underline">Duha Jesen??k - odl??v??n?? stop</p>
                    <p class="mt-5">Hned druh?? den po sv??m prvn??m pololetn??m vysv??d??en?? ve ??kole se prv??????ci vydali na v??let za pozn??n??m do St??ediska voln??ho ??asu DUHA v Jesen??ku.
                    </p>
                    <p class="mt-5">
                      C??lem v??letu byl v??chovn?? vzd??l??vac?? program Odl??v??n?? stop lesn?? zv????e. Pan?? H??lov?? m??la kr??sn?? p??ipraven?? program b??hem n??ho?? si d??ti prohl??dly jednotliv?? stopy, vy??e??ily n??kolik ??kol?? a p??edev????m si vyzkou??ely, jak se takov?? stopy  lesn??ch zv????at odl??vaj?? ze s??dry.
                    </p>
                    <p class="mt-5">
                      Vzhledem k tomu, ??e v??e sledovali okolo n??s v ter??ri??ch hadi, chameleoni, gekoni i krajta, nemohli jsme odolat a po????dali jsme o kr??tk?? v??klad ze ??ivota plaz??. Nejv??t????m z??????itkembyla dozajista mo??nost pohladit si ??ivou krajtu vyta??enou z ter??ria a prohl??dnout si svle??ku z krajty dlouh?? 6 metr??.
                    </p>
                    <p class="mt-5">
                      T??????me se na dal???? stejn?? p??kn?? a pou??n?? v??lety.
                    </p>
                    <p class="mt-5">
                      K. Preisov??
                    </p>
                  </div>
                  <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-10">
                    <li v-for="file in files" :key="file.source" class="relative">
                      <div
                        class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img :src="file.source" alt="" class="pointer-events-none object-cover" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from '@headlessui/vue';
import {
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
  PhoneIcon,
} from '@heroicons/vue/24/outline';
import {ref} from 'vue';

const navigation = [
  {name: 'Aktuality', href: '#', icon: HomeIcon, current: true},
  {name: 'O ??kole', href: '#', icon: UsersIcon, current: false},
  {name: '????edn?? deska', href: '#', icon: FolderIcon, current: false},
  {name: '??koln?? dru??ina', href: '#', icon: CalendarIcon, current: false},
  {name: 'Dokumenty ke sta??en??', href: '#', icon: InboxIcon, current: false},
  {name: 'Bakal????i', href: '#', icon: ChartBarIcon, current: false},
  {name: 'Rozvrh hodin', href: '#', icon: HomeIcon, current: false},
  {name: 'Google Classroom', href: '#', icon: UsersIcon, current: false},
  {name: 'P??ijmac?? ????zen?? na S??', href: '#', icon: FolderIcon, current: false},
];

const cards = [
  {
    name: 'Telefon',
    description: '<b>??editel ??koly</b> - 584 437 031<br><b>Mobil</b> - 603 205 331<br><b>Z??stupkyn?? ??ed.</b> - 584 437 407<br><b>??koln?? dru??ina</b> - 737 038 544<br><b>??koln?? j??delna</b> - 730 825 203<br><b>Spr??vce t??locvi??ny</b> - 605 931 248',
    icon: PhoneIcon,
  },
  {
    name: 'Adresa',
    description: '<b>M??sto</b> - ??ulov??<br><b>Ulice</b> - ??koln?? 147<br><b>PS??</b> - 790 65',
    icon: HomeIcon,
  },
  {
    name: '??kola',
    description: 'Z??kladn?? ??kola ??ulov??,<br> okres Jesen??k - p????sp??vkov?? organizace<br><br><b>reditel@zszulova.cz</b>',
    icon: UsersIcon,
  },
];

const files = [
  {
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    source:
      'https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80',
  },
  {
    source:
      'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    source:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80',
  },
  {
    source:
      'https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80',
  },
  {
    source:
      'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },


];
const sidebarOpen = ref(false);
</script>
