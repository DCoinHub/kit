import { getAppDb, appDefaults } from "../core/db.js"

let copyIfNotExists = async (p: string, dest: string) => {
  if (!(await isFile(p))) await copyFile(p, dest)
}

try {
  let kenvPkgPath = kenvPath("package.json")
  let kenvPkg = await readJson(kenvPkgPath)

  await copyIfNotExists(
    kitPath(".npmrc"),
    kenvPath(".npmrc")
  )

  // add install-links=false to kenv's .npmrc if it doesn't exist
  let npmrcContent = await readFile(
    kenvPath(".npmrc"),
    "utf-8"
  )

  if (!npmrcContent.match(/^install-links=false$/gm)) {
    if (npmrcContent.split("\n").at(-1) !== "") {
      await appendFile(kenvPath(".npmrc"), "\n")
    }
    await appendFile(
      kenvPath(".npmrc"),
      `install-links=false`
    )
  }

  if (!kenvPkg?.devDependencies?.["@johnlindquist/kit"]) {
    await cli("install", kitPath())
  }

  await copyIfNotExists(
    kitPath("templates", "config", "tsconfig.json"),
    kenvPath("tsconfig.json")
  )

  await copyIfNotExists(
    kitPath("templates", "scripts", "default.js"),
    kenvPath("templates", "default.js")
  )

  await copyIfNotExists(
    kitPath("templates", "scripts", "default.ts"),
    kenvPath("templates", "default.ts")
  )

  if (kenvPkg?.devDependencies?.kit) {
    await cli("uninstall", "kit")
  }

  let kenvIgnore = kenvPath(".gitignore")
  if (await pathExists(kenvIgnore)) {
    let contents = await readFile(kenvIgnore, "utf-8")
    if (!contents.match(/^\.scripts$/gm)) {
      await appendFile(
        kenvIgnore,
        `
.scripts`
      )
    }
  }

  let appDb = await getAppDb()
  for (let [k, v] of Object.entries(appDefaults)) {
    if (appDb?.[k] === undefined) appDb[k] = v
  }
  await appDb.write()
} catch (error) {
  console.log(error)
}

export {}
