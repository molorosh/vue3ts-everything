<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="footerbar">
    <p class="green">{{ msg }}</p>
    <pre class="isWide">@media (min-width: 1024px)</pre>
    <pre class="isNarrow">@media (max-width: 1023px)</pre>
  </div>
</template>
