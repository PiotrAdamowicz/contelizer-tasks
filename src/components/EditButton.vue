<template>
  <ButtonVue
    @handelClick="$emit('handelEdit', data)"
    v-if="editActive"
    :text="Edit"
  />
  <ButtonVue
    @handelClick="$emit('handelSave', data)"
    v-if="!editActive"
    :text="Save"
  />
</template>
<script setup>
import ButtonVue from "./ButtonVue.vue";

const props = defineProps(["editActive"]);
</script>
