export const context = {
  description: "⚛ react context",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "context name",
    },
  ],
  actions: [
    {
      type: "append",
      path: "src/context/index.ts",
      templateFile: "./templates/index.hbs",
    },
    {
      type: "add",
      path: "src/context/{{pascalCase name}}.tsx",
      templateFile: "./templates/context.hbs",
    },
    {
      type: "append",
      path: "src/hooks/index.ts",
      templateFile: "../hooks/templates/index.hbs",
    },
    {
      type: "add",
      path: "src/hooks/use{{pascalCase name}}/index.ts",
      templateFile: "../hooks/templates/index.hbs",
    },
    {
      type: "add",
      path: "src/hooks/use{{pascalCase name}}/use{{pascalCase name}}.ts",
      templateFile: "../hooks/templates/hook.hbs",
    },
    {
      type: "add",
      path: "src/hooks/use{{pascalCase name}}/use{{pascalCase name}}.test.ts",
      templateFile: "./hooks/templates/test.hbs",
    },
  ],
};
