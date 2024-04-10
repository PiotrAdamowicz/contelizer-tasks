<template>
  <div
    class="sm:w-3/4 mx-auto h-fit flex flex-col gap-2 border-2 border-black rounded p-4"
  >
    <UserCardRow
      v-model="formState.name"
      :id="props.user.id"
      label="Name"
      :data="props.user.name"
      :editActive="editActive"
    />
    <UserCardRow
      v-model="formState.email"
      :id="props.user.id"
      label="Email"
      :data="props.user.email"
      :editActive="editActive"
    />
    <div class="flex justify-between">
      <p>
        <UserCardRow
          :id="props.user.id"
          label="Gender"
          :editActive="editActive"
          v-model="formState.gender"
        />
      </p>
      <div class="flex gap-2">
        <ButtonVue @handelClick="handelEdit" v-if="!editActive" text="Edit" />
        <ButtonVue @handelClick="handelSave" v-if="editActive" text="Save" />
        <ButtonVue @handelClick="handelRemove" text="Remove" />
        <ActivityBadge :isActive="isActive" :status="props.user.status" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useUsersStore } from "../stores/users";
import UserCardRow from "./UserCardRow.vue";
import ActivityBadge from "./ActivityBadge.vue";
import ButtonVue from "./ButtonVue.vue";

const store = useUsersStore();
const props = defineProps(["user"]);
const isActive = props.user.status == "active" ? true : false;
const editActive = ref(false);
const formState = reactive({
  name: props.user.name,
  email: props.user.email,
  gender: props.user.gender
});

function handelRemove() {
  store.removeUser(props.user.id);
}
function handelEdit() {
  editActive.value = true;
}
function handelSave() {
  store.updateUser(props.user.id, formState);
  editActive.value = false;
}
</script>
