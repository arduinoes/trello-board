<script setup lang="ts">
import { ref } from "vue";
import type { Column } from "../types/index";
import { nanoid } from "nanoid";
import draggable from "vuedraggable"
import { useKeyModifier } from '@vueuse/core'

const shift = useKeyModifier('Shift', { initial: false })

console.log(shift.value)

const columns = ref<Column[]>([
    {
    id: nanoid(),
    title: "Columna 1",
    tasks: [
        {
        id: nanoid(),
        title: "Tarea 1",
        createdAt: new Date()
        },
         {
        id: nanoid(),
        title: "Tarea 2",
        createdAt: new Date()
        },
         {
        id: nanoid(),
        title: "Tarea 3",
        createdAt: new Date()
        }
    ]
    },
    {
    id: nanoid(),
    title: "Columna 2",
    tasks: [
        {
        id: nanoid(),
        title: "Tarea 4",
        createdAt: new Date()
        },
         {
        id: nanoid(),
        title: "Tarea 5",
        createdAt: new Date()
        }
    ]
    },
      {
    id: nanoid(),
    title: "Columna 3",
    tasks: []
    },
])
function createColumn() {
  const column: Column = {
    id: nanoid(),
    title: "",
    tasks: [],
  };
  columns.value.push(column);
  nextTick(() => {
    (
      document.querySelector(
        ".column:last-of-type .title-input"
      ) as HTMLInputElement
    ).focus();
  });
}
const remove = (idx) => {
  console.log("Columna ID: ", idx)
  columns.value = columns.value.filter((c) => c.id !== idx);
}

</script>

<template>
<div class="flex items-start overflow-x-auto gap-4">
     <draggable
      v-model="columns"
      group="columns"
      :animation="150"
      handle=".drag-handle"
      item-key="id"
      class="flex gap-4 items-start"
    >
      <template #item="{ element: column }:  { element: Column }">
        <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
          <header class="justify-between flex font-bold mb-4 ">
            <drag-handle />
            <input
              class="title-input bg-transparent focus:bg-white rounded px-1 w-4/5"
              @keyup.enter="($event.target as HTMLInputElement).blur()"
              @keydown.backspace="
                column.title === ''
                  ? (columns = columns.filter((c) => c.id !== column.id))
                  : null
              "
              type="text"
              v-model="column.title"
            />
            <Remove @click="remove(column.id)"/>
          </header>
          <draggable
            v-model="column.tasks"
            group="tasks"
            :animation="150"
            item-key="id">
            <template #item="{ element: task }: { element: Task }">
              <TrelloBoardTask
              :task="task"
              @delete="
                column.tasks = column.tasks.filter((t) => t.id !== $event)
              " 
              />
          </template>
          </draggable>  
          <footer>
            <NewTask @add="column.tasks.push($event)" />
          </footer>
    </div>
    </template>
    </draggable>
    <button
  @click="createColumn"
        class="bg-gray-200 whitespace-nowrap p-2 rounded opacity-50"
      >
        + Nueva columna
      </button>

  </div>
  <div>
    <RawDisplayer
    :value="columns" 
    title="Lista" />
</div> 
</template>








  
