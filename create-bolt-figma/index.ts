process.env.BOLT_MODULEONLY = "true";
import { BoltInitData, main } from "bolt-template/dist/index-simple";

export const globalIncludes: string[] = [
  "*",
  "src/**/*",
  "public/**/*",
  "public-zip/**/*",
  ".github/**/*",
  ".gitignore",
  ".env.example",
];
export const globalExcludes: string[] = [".env", "yarn-error.log"];

export const hybridFiles: string[] = ["public-hybrid/**/*", "scripts/**/*"];

export type Opt = {
  value: string;
  label: string;
  files: string[];
};

export const frameworkOptions: Opt[] = [
  {
    value: "svelte",
    label: "Svelte",
    files: ["src/index-svelte.ts", "src/main.svelte", "package.svelte.json"],
  },
  {
    value: "react",
    label: "React",
    files: ["src/index-react.tsx", "src/main.tsx", "package.react.json"],
  },
  {
    value: "vue",
    label: "Vue",
    files: ["src/index-vue.ts", "src/main.vue", "package.vue.json"],
  },
];
export const frameworkValues = frameworkOptions.map((f) => f.value);

export const appOptions: Opt[] = [
  { value: "figma", label: "Figma", files: ["src/api/figma.ts"] },
  { value: "figjam", label: "Figjam", files: ["src/api/figjam.ts"] },
];

export const appValues = appOptions.map((f) => f.value);

const initData: BoltInitData = {
  intro: {
    name: "create-bolt-figma",
    prettyName: "Bolt Figma",
  },
  base: {
    module: "bolt-figma",
    globalIncludes,
    globalExcludes,
  },
  argsTemplate: [
    {
      name: "folder",
      type: "folder",
      message: "Where do you want to create your project?",
      initialValue: "./",
      required: true,
      validator: (input: string) => {
        if (input.length < 3) return `Value is required!`;
      },
      describe: "Name of the folder for the new Bolt UXP plugin",
    },
    {
      name: "displayName",
      type: "string",
      message: "Choose a unique Display Name for your plugin:",
      initialValue: "Bolt Figma",
      required: true,
      validator: (input: string) => {
        if (input.length < 1) return `Value is required!`;
      },
      describe: "Panel's display name (e.g. Bolt UXP)",
      alias: "n",
    },
    {
      name: "id",
      type: "string",
      message: "Choose a unique ID for your plugin:",
      initialValue: "bolt.figma.plugin",
      required: true,
      validator: (input: string) => {
        if (input.length < 1) return `Value is required!`;
      },
      describe: "Unique ID for Figma Plugin (e.g. bolt.figma.plugin)",
      alias: "i",
    },
    {
      name: "framework",
      type: "select",
      message: "Select framework:",
      alias: "f",
      describe: "Select a Framework for your plugin:",
      options: frameworkOptions,
      required: true,
    },
    {
      name: "apps",
      type: "multiselect",
      message: "Select app:",
      alias: "a",
      describe: "Select app(s) for your plugin:",
      options: appOptions,
      required: true,
    },
    {
      name: "installDeps",
      type: "boolean",
      message: "Install dependencies?",
      initialValue: true,
      required: true,
      alias: "d",
      describe: "Install dependencies (default: false)",
    },
    {
      name: "keepSampleCode",
      type: "boolean",
      message: "Keep Sample Code Snippets?",
      initialValue: true,
      required: true,
      alias: "s",
      describe: "Keep Sample Code (default: true)",
    },
  ],
};

process.env.BOLT_MODULEONLY = "true";

main(initData, {});
