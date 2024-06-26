import { createMemoryHistory, createRouter } from "vue-router";
import Task1Vue from "./Task1.vue";
import Task2Vue from "./Task2.vue";
import Task3Vue from "./Task3.vue";

const routes = [
  { path: "/", name: "task1", component: Task1Vue },
  { path: "/task2", name: "task2", component: Task2Vue },
  { path: "/task3", name: "task3", component: Task3Vue }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes
});
