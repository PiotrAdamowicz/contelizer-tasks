<template>
  <div
    class="sm:w-3/4 mx-auto h-fit flex flex-col gap-2 border-2 border-black rounded p-4"
  >
    <p>
      <span class="italic">Name: </span>
      <span class="text-black text-xl">{{ props.user.name }}</span>
    </p>
    <p>
      <span class="italic">Email: </span>
      <span class="text-black text-xl">{{ props.user.email }}</span>
    </p>
    <div class="flex justify-between">
      <p class="">
        <span class="italic">Gender: </span>
        <span class="text-black text-xl">{{ props.user.gender }}</span>
      </p>
      <div class="flex gap-2">
        <button
          class="text-sm rounded-lg py-1 px-2 hover:bg-slate-500 transition-all bg-slate-300"
        >
          Edit
        </button>
        <button
          :onclick="handelRemove"
          class="text-sm rounded-lg py-1 px-2 hover:bg-slate-500 transition-all bg-slate-300"
        >
          Remove
        </button>
        <span
          class="text-black rounded-lg p-1 text-sm"
          :class="[isActive && 'bg-green-500', !isActive && 'bg-red-500']"
          >{{ props.user.status.toUpperCase() }}</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { useUsersStore } from "../stores/users";

const store = useUsersStore();

function handelRemove() {
  console.log(props.user.id);
  store.removeUser(props.user.id);
}

const props = defineProps(["user"]);
const isActive = props.user.status == "active" ? true : false;
</script>
