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


</template>
