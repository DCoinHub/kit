// Name: Kit Settings
// Description: Manage Kit Settings
// Keyword: kit

import { createGuideConfig } from "./main-helper.js"

let cliScript = await docs(
  kitPath("KIT.md"),
  createGuideConfig({
    name: "Kit",
    input: arg?.input || "",
    placeholder: "Kit Actions",
    preventCollapse: true,
    onNoChoices: async input => {
      setPanel(
        md(`# Expected ${input} in the Kit Menu?
Feel free to [suggest an edit](https://github.com/johnlindquist/kit/blob/main/KIT.md) to the Kit menu or open an issue on GitHub.
`)
      )
    },
  })
)
await run(kitPath(cliScript))
export {}
