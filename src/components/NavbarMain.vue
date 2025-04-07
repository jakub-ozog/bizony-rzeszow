  <script setup>
  import { ref, watch, defineProps } from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from '@/components/ui/navigation-menu';

  import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Button } from "@/components/ui/button"
  import facebookIcon from '@/assets/icons/fb-icon.svg'
  import instagramIcon from '@/assets/icons/ig-icon.svg'
  import 'primeicons/primeicons.css'

  const isOpen = ref(false)
  const router = useRouter()

  watch(
    () => router.currentRoute.value.path,
    () => {
      isOpen.value = false
    },
  )


  // const toggleMenuDropdown = () => {
  //   isMenuDropdownOpen.value = !isMenuDropdownOpen.value
  // }

</script>

<template>

  <header class="p-4 lg:p-8">
    <!-- {/* Desktop Menu */} -->
    <NavigationMenu class="hidden justify-between xl:flex items-center font-urbanist">
      <NavigationMenuLink>
        <router-link to="/">
          <img src="@/assets/logo/logo-nav.svg" class="h-18" alt="Logo Bizony Rzeszów" />
        </router-link>
      </NavigationMenuLink>
      <NavigationMenuList class="flex gap-8">
        <NavigationMenuItem>
          <NavigationMenuLink>
            <router-link to="/" class="uppercase py-2 px-4">
              strona główna
            </router-link>
          </NavigationMenuLink>
        </NavigationMenuItem>



        <NavigationMenuItem>
          <NavigationMenuLink>
            <router-link to="/galeria" class="uppercase py-2 px-4">
              galeria
            </router-link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger class="font-urbanist uppercase text-md bg-transparent">Rozgrywki
          </NavigationMenuTrigger>
          <NavigationMenuContent>


            <NavigationMenuLink as-child>
              <ul class="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[500px] ">
                <li>
                  <router-link to="/rozgrywki/wyniki" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none uppercase
                  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                  focus:text-accent-foreground">
                    Wyniki
                  </router-link>
                </li>
                <li>
                  <router-link to="/rozgrywki/tabela-blb" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none uppercase
                  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                  focus:text-accent-foreground">
                    tabela blb
                  </router-link>
                </li>
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger class="font-urbanist uppercase text-md bg-transparent">Drużyna
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink as-child>
              <ul class="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[500px] ">
                <li>
                  <router-link to="/druzyna/kadra" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none uppercase
                  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                  focus:text-accent-foreground">
                    Kadra
                  </router-link>
                </li>
                <!-- <li>
                  <router-link to="/rozgrywki/tabela-blb" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none uppercase
                  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                  focus:text-accent-foreground">
                    statystyki
                  </router-link>
                </li> -->
                <li>
                  <router-link to="/o-nas" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none uppercase
                  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                  focus:text-accent-foreground">
                    O klubie
                  </router-link>
                </li>
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink>
            <router-link to="/blog" class="uppercase py-2 px-4">
              blog
            </router-link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink>
            <router-link to="/kontakt" class="uppercase py-2 px-4">
              kontakt
            </router-link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <!-- Mobile -->

    <div class="block xl:hidden">
      <div class="flex items-center justify-between">
        <router-link to="/">
          <img src="@/assets/logo/logo-nav.svg" class="w-3/4 md:w-full" alt="Logo Bizony Rzeszów" />
        </router-link>
        <Sheet :open="isOpen" @update:open="val => isOpen = val">
          <SheetTrigger>
            <Button
              class="bg-transparent text-primaryRed hover:bg-transparent  transition duration-300 ease-in-out hover:scale-75 border-solid">
              <i class="pi pi-align-justify" style="font-size: 1rem; "></i>
            </Button>
          </SheetTrigger>
          <SheetContent class="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <a href="" class="flex items-center gap-2">
                  <img src="" class="max-h-8" alt="" />
                </a>
              </SheetTitle>
            </SheetHeader>
            <div class="flex flex-col gap-8 py-8">
              <Accordion type="single" collapsible class="flex w-full flex-col gap-6">


                <AccordionItem value="item-1" class="border-none">
                  <router-link to="/" class="uppercase p-2 font-semibold text-xl text-gray-700">
                    strona główna
                  </router-link>
                </AccordionItem>


                <AccordionItem value="item-2" class="border-none">
                  <router-link to="/galeria" class="uppercase p-2 font-semibold text-xl text-gray-700">
                    galeria
                  </router-link>
                </AccordionItem>

                <AccordionItem value="item-3" class="border-none p-0">
                  <AccordionTrigger class="uppercase p-2 py-0 font-semibold text-xl text-gray-700">rozgrywki
                  </AccordionTrigger>
                  <AccordionContent class="py-4">
                    <router-link to="/rozgrywki/wyniki"
                      class="flex items-center justify-start gap-3 uppercase ml-2 p-2 text-lg font-semibold text-gray-700">
                      <i class="pi pi-circle-fill" style="color: #ddd; font-size: .5rem;"></i>
                      wyniki
                    </router-link>
                  </AccordionContent>
                  <AccordionContent>

                    <router-link to="/rozgrywki/tabela-blb"
                      class="flex items-center justify-start gap-3 uppercase ml-2 p-2 text-lg font-semibold text-gray-700">
                      <i class="pi pi-circle-fill" style="color: #ddd; font-size: .5rem;"></i>
                      tabela blb
                    </router-link>
                  </AccordionContent>
                </AccordionItem>


                <AccordionItem value="item-4" class="border-none  p-0">
                  <AccordionTrigger class=" p-2 py-0 text-xl font-semibold uppercase  text-gray-700">drużyna
                  </AccordionTrigger>
                  <AccordionContent class="py-4">

                    <router-link to="/druzyna/kadra"
                      class="flex items-center justify-start gap-3 uppercase ml-2 p-2 text-lg font-semibold text-gray-700">
                      <i class="pi pi-circle-fill" style="color: #ddd; font-size: .5rem;"></i>
                      kadra
                    </router-link>

                  </AccordionContent>
                  <!-- <AccordionContent>
                    <router-link to="/rozgrywki/tabela-blb"
                      class="flex items-center justify-start gap-3 uppercase ml-2 p-2 text-lg font-semibold text-gray-700">
                      <i class="pi pi-circle-fill" style="color: #ddd; font-size: .5rem;"></i>
                      statystyki
                    </router-link>
                  </AccordionContent> -->

                  <AccordionContent>
                    <router-link to="/o-nas"
                      class="flex items-center justify-start gap-3 uppercase ml-2 p-2 text-lg font-semibold text-gray-700">
                      <i class="pi pi-circle-fill" style="color: #ddd; font-size: .5rem;"></i>
                      o klubie
                    </router-link>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" class="border-none">
                  <router-link to="/blog" class="uppercase p-2 font-semibold text-xl text-gray-700">
                    blog
                  </router-link>
                </AccordionItem>
              </Accordion>

              <div class="flex flex-row justify-end gap-3">

                <div class="flex flex-row gap-4">
                  <a href="https://www.facebook.com/BizonyRzeszow" target="_blank">
                    <img :src="facebookIcon" alt="facebook" class="w-6" />
                  </a>
                  <a href="https://www.instagram.com/bizony__rzeszow/" target="_blank">
                    <img :src="instagramIcon" alt="instagram" class="w-7" />
                  </a>
                  <!-- <img :src="patroniteIcon" alt="patronite" /> -->
                </div>

              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>













  <!-- <header>
    <div class="flex items-center justify-between p-6 lg:px-8 select-none" aria-label="Global"> -->
  <!-- <div>
        <router-link to="/">
          <img src="@/assets/logo/logo-nav.svg" class="h-18" alt="Logo Bizony Rzeszów" />
        </router-link>
      </div> -->
  <!-- <button @click="isOpen = !isOpen" class="lg:hidden text-xl z-30 text-black">
        <i :class="isOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
      </button> -->


  <!-- ShadCn menu type -->
  <!-- <NavigationMenu class="font-urbanist flex align-center justify-between">
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <router-link to="/">
                <img src="@/assets/logo/logo-nav.svg" class="h-18" alt="Logo Bizony Rzeszów" />
              </router-link>
            </NavigationMenuLink>

          </NavigationMenuItem>



          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <RouterLink to="/" class="uppercase px-4 py-2">Strona Główna</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger class="uppercase text-md bg-transparent">Drużyna</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                <li>
                  <NavigationMenuLink as-child>
                    <router-link to="/">
                      <div href="/docs/introduction"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div class="text-sm font-medium leading-none">Kadra</div>
                        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Re-usable components built using Radix UI and Tailwind CSS.
                        </p>
                      </div>
                    </router-link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <a href="/docs/installation"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div class="text-sm font-medium leading-none">Installation</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        How to install dependencies and structure your app.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <a href="/docs/typography"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div class="text-sm font-medium leading-none">Typography</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Styles for headings, paragraphs, lists...etc
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger class="uppercase text-md bg-transparent">rozgrywki</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <li v-for="component in components" :key="component.title">
                  <NavigationMenuLink as-child>
                    <a :href="component.href"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {{ component.description }}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink class="uppercase text-md bg-transparent">
              <router-link to="/blog" class="px-4 py-2">
                BLOG
              </router-link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink class="uppercase text-md bg-transparent">
              <router-link to="/kontakt" class="px-4 py-2">
                kontakt
              </router-link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> -->





  <!-- <ul class="hidden lg:flex items-center gap-14 text-grey uppercase font-urbanist"> -->
  <!-- <li>
          <router-link to="/" class="font-urbanist block p-1">Strona główna</router-link>
        </li> -->
  <!-- <li>
          <router-link to="/o-nas" class="block p-1">O klubie</router-link>
        </li> -->
  <!-- <li>
          <router-link to="/zawodnicy">Zawodnicy</router-link>
        </li> -->
  <!-- <li>
          <router-link to="/galeria" class="block p-1">Galeria</router-link>
        </li> -->
  <!-- <li class="relative">
          <div class="text-secondaryRed cursor-pointer flex items-center gap-2 " @click="toggleMenuDropdown"
            ref="menuDropdown">
            Rozgrywki
            <i :class="['pi', 'pi-angle-down', 'transition-transform', { 'rotate-180 transition-transform': isMenuDropdownOpen }]"
              style="font-size: 1rem">
            </i>
          </div>
          <ul v-if="isMenuDropdownOpen"
            class="absolute left-0 mt-2 py-2 bg-white shadow-sm rounded-lg w-48 z-10 text-left flex flex-col gap-4">
            <li class="ml-2">
              <router-link to="/rozgrywki/wyniki" class="block p-1 w-full hover:text-primaryRed">Wyniki</router-link>
            </li>
            <li class="ml-2">
              <router-link to="/rozgrywki/tabela-blb" class="block p-1 hover:text-primaryRed">Tabela BLB</router-link>
            </li>
          </ul>


        </li> -->
  <!-- <li>
          <router-link to="/blog" class="block p-1">Blog</router-link>
        </li>
        <li>
          <router-link to="/kontakt" class="block p-1">Kontakt</router-link>
        </li> -->
  <!-- </ul> -->


  <!-- <ul :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
        class="text-xl lg:hidden fixed top-0 right-0 w-72 h-full bg-white shadow-lg text-gray-500 font-urbanist text-[1rem] transition-transform transform duration-300 ease-in-out z-40 p-6 flex flex-col gap-1 font-semibold">
        <li class="py-2 mt-12">
          <router-link to="/" class="block text-gray-800 hover:opacity-50 p-3">Strona główna</router-link>
        </li>
        <li class="py-2">
          <router-link to="/o-nas" class="block text-gray-800 transition-all duration-400 hover:opacity-50 p-3">O
            klubie</router-link>
        </li>
        <li class="py-2 relative">
          <div class="text-gray-800 p-3" @click="toggleMenuDropdown">Rozgrywki</div>
          <ul v-if="isMenuDropdownOpen" class=" left-0  w-max">
            <li>
              <router-link to="/rozgrywki/wyniki" class="text-base block p-3 ml-4 text-gray-800">Wyniki</router-link>
            </li>
            <li>
              <router-link to="/rozgrywki/tabela-blb" class=" text-base block p-3 ml-4 text-gray-800">Tabela
                BLB</router-link>
            </li>
          </ul>


        </li>
        <li class="py-2">
          <router-link to="/galeria" class="block text-gray-800 hover:opacity-50 p-3">Galeria</router-link>
        </li>
        <li class="py-2">
          <router-link to="/blog" class="block text-gray-800 hover:opacity-50 p-3">Blog</router-link>
        </li>
        <li class="py-2">
          <router-link to="/kontakt" class="block text-gray-800 hover:opacity-50 p-3">Kontakt</router-link>
        </li>
        <button @click="isOpen = !isOpen" class="lg:hidden text-xl z-50 absolute top-6 right-6">
          <i class="pi pi-times"></i>
        </button>
      </ul>

      <div v-if="isOpen" @click="isOpen = false"
        class="fixed inset-0 bg-white/10 backdrop-blur-lg backdrop-saturate-150 border border-white/20 shadow-lg p-6 rounded-xl z-30 lg:gidden">
      </div> -->
  <!-- </div>
  </header> -->



</template>
