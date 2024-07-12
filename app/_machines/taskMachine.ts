import { assign, setup } from "xstate";

export type Task = {
  description: string;
};

export type TodoGroup = {
  name: string;
  data: Task[];
  color: string;
};

export type TaskContext = {
  groupTasks: Record<string, TodoGroup>;
};

export type Group = {
  name: string;
  color: string;
};

type TaskEvent = {
  type: "addTask";
  task: {
    group: Group;
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
          [group.name]: {
            name: group.name,
            color: group.color,
            data: [
              ...(context.groupTasks?.[group.name]?.data || []),
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
        name: "food",
        data: [],
        color: "#7bed9f",
      },
      errands: {
        name: "errands",
        data: [],
        color: "#70a1ff",
      },
      other: {
        name: "other",
        color: "#0000004D",
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
