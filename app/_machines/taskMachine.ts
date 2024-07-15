import { assign, setup } from "xstate";

export type Task = {
  description: string;
  done: boolean;
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

type TaskEvent =
  | {
      type: "addTask";
      task: {
        group: Group;
        description: string;
      };
    }
  | {
      type: "toggleTask";
      value: {
        taskIndex: number;
        groupName: TodoGroup["name"];
      };
    };

const taskMachine = setup({
  types: {
    context: {} as TaskContext,
    events: {} as TaskEvent,
  },
  actions: {
    updateTask: assign({
      groupTasks: ({ context, event }) => {
        const {
          value: { groupName, taskIndex },
        } = event as {
          type: "toggleTask";
          value: {
            taskIndex: number;
            groupName: TodoGroup["name"];
          };
        };

        let mutatedGroupTasks = { ...context.groupTasks };
        mutatedGroupTasks[groupName].data[taskIndex].done =
          !mutatedGroupTasks[groupName].data[taskIndex].done;
        return mutatedGroupTasks;
      },
    }),
    createTask: assign({
      groupTasks: ({ context, event }) => {
        const {
          task: { group, description },
        } = event as {
          type: "addTask";
          task: {
            group: Group;
            description: string;
          };
        };
        return {
          ...context.groupTasks,
          [group.name]: {
            name: group.name,
            color: group.color,
            data: [
              ...(context.groupTasks?.[group.name]?.data || []),
              {
                description,
                done: false,
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
        color: "#7bed9f99",
      },
      errands: {
        name: "errands",
        data: [],
        color: "#70a1ff99",
      },
      other: {
        name: "other",
        color: "#0000001A",
        data: [{ description: "drink water", done: false }],
      },
    },
  },
  on: {
    addTask: {
      actions: "createTask",
    },
    toggleTask: {
      actions: "updateTask",
    },
  },
  states: {
    idle: {},
  },
});

export default taskMachine;
