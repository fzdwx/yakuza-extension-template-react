<template>
  <div class="body dark">
    <Command.Dialog :visible="true" theme="raycast">
      <template #header>
        <div class="hidden">
          <Command.Input v-model="userInputVal"/>
        </div>
      </template>
      <template #body>
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
      </template>
    </Command.Dialog>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";

import {Command, exit, getClipText, onUserInput, useCommandEvent} from "@fzdwx/launcher-api";

let commandEvent = useCommandEvent();

let userInputVal = ref('');
onUserInput('github', (s) => {
  commandEvent.emitter.emit('setInputValue', s)
})
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
