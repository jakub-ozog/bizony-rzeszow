<script setup>
import { cn } from '@/lib/utils';
import { NavigationMenuViewport, useForwardProps } from 'reka-ui';
import { computed } from 'vue';

const props = defineProps({
  forceMount: { type: Boolean, required: false },
  align: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <div class="absolute right-14 top-full flex justify-center">
    <NavigationMenuViewport v-bind="forwardedProps" :class="cn(
      'origin-top-center relative mt-1.5 h-[--reka-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--reka-navigation-menu-viewport-width]',
      props.class,
    )
      " />
  </div>
</template>
