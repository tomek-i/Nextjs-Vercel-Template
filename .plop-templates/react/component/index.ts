export const component = {
  description: "⚛ react component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/components/{{pascalCase name}}/index.ts",
      templateFile: "./templates/index.hbs",
    },
    {
      type: "add",
      path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
      templateFile: "./templates/component.hbs",
    },
    {
      type: "add",
      path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
      templateFile: "./templates/test.hbs",
    },
    {
      type: "add",
      path: "src/components/{{pascalCase name}}/{{pascalCase name}}.variants.ts",
      templateFile: "./templates/variants.hbs",
    },
    {
      type: "add",
      path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.ts",
      templateFile: "./templates/stories.hbs",
    },
  ],
}
