// Name: New
// Description: Create a new script
// Log: false

import {
  exists,
  kitMode,
  returnOrEnter,
  stripMetadata,
} from "../core/utils.js"
import {
  ensureTemplates,
  prependImport,
} from "./lib/utils.js"
import { generate } from "@johnlindquist/kit-internal/project-name-generator"

let examples = Array.from({ length: 3 })
  .map((_, i) => generate({ words: 2 }).dashed)
  .join(", ")

let stripName = (name: string) =>
  path.parse(name.trim().replace(/\s/g, "-").toLowerCase())
    .name

let name = await arg(
  {
    placeholder:
      arg?.placeholder || "Enter a name for your script:",
    validate: input => {
      return exists(input.replace(/\s/g, "-").toLowerCase())
    },
    shortcuts: [],
    enter: `Create script and open in editor`,
    strict: false,
  },
  [
    {
      info: "always",
      name: `Requirements: lowercase, dashed, no extension`,
      description: `Examples: ${examples}`,
    },
  ]
)

let message = await arg(
  {
    placeholder: `Type "ok" and hit enter to continue...`,
    strict: true,
    shortcuts: [
      {
        name: "Abort",
        key: "escape",
        bar: "right",
        onPress: () => process.exit(),
      },
    ],
    enter: `Install ${name}`,
  },
  md(`
## Attention: This Action Will Download a Remote Script

> Review the script first: [${arg?.url}](${arg?.url})

Running scripts from the internet carries significant risks. These scripts have the potential to:

- Erase your files
- Transfer your files to an external server
- Gain control over your computer
- Execute various harmful actions

If you are aware of and accept the risks of this script, type "ok" and press "Enter" 
to proceed with download. Any other input will cancel the installation.
  `)
)

if (message !== "ok") {
  process.exit()
}

let { dirPath: selectedKenvPath } = await selectKenv({
  placeholder: `Select Where to Create Script`,
  enter: "Create Script in Selected Kenv",
})

let command = stripName(name)

let scriptPath = path.join(
  selectedKenvPath,
  "scripts",
  `${command}.${kitMode()}`
)

let contents = [arg?.npm]
  .flatMap(x => x)
  .filter(Boolean)
  .map(npm => `let {} = await npm("${npm}")`)
  .join("\n")

let stripExtension = fileName =>
  fileName.replace(path.extname(fileName), "")

await ensureTemplates()

let ext = `.${kitMode()}`

let template =
  arg?.template ||
  (await env("KIT_TEMPLATE", {
    choices: _.uniq(
      (
        await readdir(kenvPath("templates"))
      ).map(stripExtension)
    ),
  }))

let templatePath = kenvPath(
  "templates",
  `${template}${ext}`
)

let templateExists = await pathExists(templatePath)
if (!templateExists) {
  console.log(
    `${template} template doesn't exist. Creating blank ./templates/${template}${ext}`
  )

  await copyFile(
    kitPath("templates", "scripts", `default${ext}`),
    kenvPath("templates", `${template}${ext}`)
  )
}

let templateContent = await readFile(templatePath, "utf8")

let templateCompiler = compile(templateContent)
contents += templateCompiler({
  ...env,
  ...Object.fromEntries(memoryMap),
  name: arg?.scriptName || name,
})
if (
  (arg?.scriptName || command !== name) &&
  !contents.includes(`Name:`)
) {
  contents = `// Name: ${arg?.scriptName || name || ""}
${contents.startsWith("/") ? contents : "\n" + contents}
`
}

if (arg?.url || arg?.content) {
  contents = (await get<any>(arg?.url)).data
  if (!arg?.keepMetadata) {
    contents = stripMetadata(contents, [
      "Menu",
      "Name",
      "Author",
      "Twitter",
      "Alias",
      "Description",
    ])
  }
}

if (arg?.url) {
  scriptPath = scriptPath.replace(
    /\.(js|ts)$/g,
    path.extname(arg?.url?.replace(/("|')$/g, ""))
  )
}

contents = prependImport(contents)

await ensureDir(path.dirname(scriptPath))
await writeFile(scriptPath, contents)

await cli("create-bin", "scripts", command)

global.log(
  chalk`\nCreated a {green ${name}} script using the {yellow ${template}} template`
)

await run(kitPath("cli", "edit-script.js"), scriptPath)

export { scriptPath }
