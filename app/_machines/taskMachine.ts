import { assign, setup } from "xstate";

export type Task = {
  description: string;
};

export type TodoGroup = {
  title: string;
  data: Task[];
  color?: string;
};

export type TaskContext = {
  groupTasks: Record<string, TodoGroup>;
};

type TaskEvent = {
  type: "addTask";
  task: {
    group: string;
    description: string;
  };
};

const taskMachine = setup({
  types: {
    context: {} as TaskContext,
    events: {} as TaskEvent,
  },
  actions: {
    createTask: assign({
      groupTasks: ({ context, event }) => {
        const { group, description } = event?.task;
        return {
          ...context.groupTasks,
          [group]: {
            ...(context.groupTasks?.[group] || {}),
            data: [
              ...(context.groupTasks?.[group]?.data || []),
              {
                description,
              },
            ],
          },
        };
      },
    }),
  },
}).createMachine({
  id: "task",
  initial: "idle",
  context: {
    groupTasks: {
      food: {
        title: "food",
        data: [],
        color: "#7bed9f",
      },
      errands: {
        title: "errands",
        data: [],
        color: "#70a1ff",
      },
      other: {
        title: "other",
        data: [{ description: "drink water" }],
      },
    },
  },
  on: {
    addTask: {
      actions: "createTask",
    },
  },
  states: {
    idle: {},
  },
});

export default taskMachine;
