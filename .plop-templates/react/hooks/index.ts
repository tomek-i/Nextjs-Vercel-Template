export const hook = {
  description: "⚛ react hook",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "hook name",
    },
  ],
  actions: [
    {
      type: "append",
      path: "src/hooks/index.ts",
      templateFile: "./templates/hooks.hbs",
    },
    {
      type: "add",
      path: "src/hooks/use{{camelCase name}}/index.ts",
      templateFile: "./templates/index.hbs",
    },
    {
      type: "add",
      path: "src/hooks/use{{camelCase name}}/use{{camelCase name}}.ts",
      templateFile: "./templates/hook.hbs",
    },
    {
      type: "add",
      path: "src/hooks/use{{camelCase name}}/use{{camelCase name}}.test.ts",
      templateFile: "./templates/test.hbs",
    },
  ],
}
