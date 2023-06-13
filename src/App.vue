<template>
  <div class="dark">
    <Command theme="raycast">
      <Command.Input placeholder="Type a command or search..." v-model="inputValue"/>
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Letters">
          <Command.Item data-value="a">a</Command.Item>
          <Command.Item data-value="b">b</Command.Item>
          <Command.Separator/>
          <Command.Item data-value="c">c</Command.Item>
        </Command.Group>

        <Command.Item data-value="apple">Apple</Command.Item>
      </Command.List>
    </Command>
  </div>
</template>
<script lang="ts" setup>
const inputValue = ref('')
import {Command, exit, getClipText} from "@fzdwx/launcher-api";

window.onkeydown = (e: KeyboardEvent) => {
  if (e.code === "Escape") {
    goBack()
    return
  }
}

import {ref} from "vue";

const text = ref('')

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
