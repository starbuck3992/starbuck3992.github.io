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
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl z-20 block">Základní škola Žulová</h2>
                <p class="mt-4 text-3xl leading-8 text-gray-50 z-10">Škola pro všechny</p>
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
                    <p  class="text-4xl font-bold underline">Školní rok 2022/23</p>
                    <p  class="text-3xl font-bold mt-2">Srdečně zveme na Den otevřených dveří 24.2.2023</p>
                    <p  class="text-3xl font-bold mt-2">Zápis do 1. třídy proběhne 4.4.2023</p>
                    <!--<p class="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur.
                      Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere.
                      Loco visa to du huic at in dixi aër.</p>-->
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
                    <p class="text-4xl font-bold underline">Exkurze do Pevnosti poznání Olomouc</p>
                    <p class="mt-5">V rámci projektového vzdělávání jsme se rozjeli do Olomouce do Pevnosti Poznání. Vybrali jsme si program
                      Fyzika v komiksech.
                    </p>
                    <p class="mt-5">
                      Po příjezdu jsme byli rozděleni do dvou skupin, každá skupina měla svého průvodce. V rámci vybraného programu jsme
                      chtěli odhalit tajemství jednotlivých superschopností. Díky svým znalostem z fyziky a za pomocí animátorů jsme byli
                      schopni zadané úkoly zvládnout. Tvořili jsme vlastní komiks o fyzikálních vědcích. V další části byly pokusy jako
                      např. blesk, plazmová koule. Pak se šlo do planetária,kde jsme se podívali na dokument o Zemi. Následovala prohlídka
                      interaktivních exponátů, kde jsem měli šanci pochopit některé fyzikální principy.
                    </p>
                    <p class="mt-5">
                      Z Pevnosti Poznání jsme zamířili do historické části města Olomouc. Prošli jsme Horní a Dolní náměstí, vyfotili se u
                      památky UNESCO - sloupu Nejsvětější Trojice a u Olomouckého orloje.
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
                    <p class="text-4xl font-bold underline">Duha Jeseník - odlévání stop</p>
                    <p class="mt-5">Hned druhý den po svém prvním pololetním vysvědčení ve škole se prvňáčci vydali na výlet za poznáním do Střediska volného času DUHA v Jeseníku.
                    </p>
                    <p class="mt-5">
                      Cílem výletu byl výchovně vzdělávací program Odlévání stop lesní zvěře. Paní Hálová měla krásně připravený program během něhož si děti prohlédly jednotlivé stopy, vyřešily několik úkolů a především si vyzkoušely, jak se takové stopy  lesních zvířat odlévají ze sádry.
                    </p>
                    <p class="mt-5">
                      Vzhledem k tomu, že vše sledovali okolo nás v teráriích hadi, chameleoni, gekoni i krajta, nemohli jsme odolat a požádali jsme o krátký výklad ze života plazů. Největším zářžitkembyla dozajista možnost pohladit si živou krajtu vytaženou z terária a prohlédnout si svlečku z krajty dlouhé 6 metrů.
                    </p>
                    <p class="mt-5">
                      Těšíme se na další stejně pěkné a poučné výlety.
                    </p>
                    <p class="mt-5">
                      K. Preisová
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
  {name: 'O škole', href: '#', icon: UsersIcon, current: false},
  {name: 'Úřední deska', href: '#', icon: FolderIcon, current: false},
  {name: 'Školní družina', href: '#', icon: CalendarIcon, current: false},
  {name: 'Dokumenty ke stažení', href: '#', icon: InboxIcon, current: false},
  {name: 'Bakaláři', href: '#', icon: ChartBarIcon, current: false},
  {name: 'Rozvrh hodin', href: '#', icon: HomeIcon, current: false},
  {name: 'Google Classroom', href: '#', icon: UsersIcon, current: false},
  {name: 'Přijmací řízení na SŠ', href: '#', icon: FolderIcon, current: false},
];

const cards = [
  {
    name: 'Telefon',
    description: '<b>Ředitel školy</b> - 584 437 031<br><b>Mobil</b> - 603 205 331<br><b>Zástupkyně řed.</b> - 584 437 407<br><b>Školní družina</b> - 737 038 544<br><b>Školní jídelna</b> - 730 825 203<br><b>Správce tělocvičny</b> - 605 931 248',
    icon: PhoneIcon,
  },
  {
    name: 'Adresa',
    description: '<b>Město</b> - Žulová<br><b>Ulice</b> - Školní 147<br><b>PSČ</b> - 790 65',
    icon: HomeIcon,
  },
  {
    name: 'Škola',
    description: 'Základní škola Žulová,<br> okres Jeseník - příspěvková organizace<br><br><b>reditel@zszulova.cz</b>',
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
