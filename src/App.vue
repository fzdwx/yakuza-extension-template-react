<template>
  <div class="body dark">
    <Command.Dialog :visible="true" theme="raycast">
      <template #header>
        <Command.Input placeholder="Type a command or search..." />
      </template>
      <template #body>
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Letters">
            <Command.Item data-value="a">a</Command.Item>
            <Command.Item data-value="b">b</Command.Item>
            <Command.Separator />
            <Command.Item data-value="c">c</Command.Item>
          </Command.Group>

          <Command.Item data-value="apple">Apple</Command.Item>
        </Command.List>
      </template>
    </Command.Dialog>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";

import {Command, exit, getClipText} from "@fzdwx/launcher-api";

window.onkeydown = (e: KeyboardEvent) => {

  if (e.code === "Escape") {
    goBack()
    return
  }
}

const text = ref('')
const inputRel = ref<HTMLInputElement>()
const inputValue = ref('')


onMounted(() => {
  inputRel.value?.focus()
})

const goBack = () => {
  exit()
}

const read = () => {
  getClipText((s) => {
    text.value = s
  })
}
</script>

<style>
</style>
