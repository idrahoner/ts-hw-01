const fs = require("fs/promises");
const path = require("path");

// TODO set styles extension optional
// TODO colorize console.logs
// TODO add reexport file name from configuration to fs.writeFile

const CONFIGURATION = Object.freeze({
  reexport: "index.ts",
  componentExtension: ".tsx",
  stylesExtension: ".module.css",
});

const COMPONENTS_TYPE = Object.freeze({
  components: "components",
  pages: "pages",
});

const capitalizeName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const normalizeNames = (namesList) => {
  const normalized = namesList.map((name) => {
    const trimmedName = name.trim();
    const words = trimmedName.split("-");
    return words.map(capitalizeName).join("");
  });
  return normalized;
};

const createFiles = async (folderName, fileName) => {
  if (CONFIGURATION.reexport) {
    await fs.writeFile(
      path.join(folderName, CONFIGURATION.reexport),
      `export { default } from './${fileName}';\n`
    );
  }
  await fs.writeFile(
    path.join(folderName, fileName + CONFIGURATION.componentExtension),
    `export default function ${fileName}() {\n\treturn <h1>This is ${fileName}!</h1>;\n}`
  );
  if (CONFIGURATION.stylesExtension) {
    await fs.writeFile(
      path.join(folderName, fileName + CONFIGURATION.stylesExtension),
      ""
    );
  }
};

const createFolder = async (componentType, componentName) => {
  const componentFolderPath = path.join(
    __dirname,
    "src",
    componentType,
    componentName
  );
  await fs.mkdir(componentFolderPath, { recursive: true });
  return componentFolderPath;
};

const readCurrentDirectory = async (componentType) => {
  const rootDirectory = await fs.readdir(path.join(__dirname), {
    encoding: "utf-8",
  });
  if (!rootDirectory.includes("src")) {
    return [];
  }
  const srcDirectory = await fs.readdir(path.join(__dirname, "src"), {
    encoding: "utf-8",
  });
  if (!srcDirectory.includes(componentType)) {
    return [];
  }
  return await fs.readdir(path.join(__dirname, "src", componentType));
};

const create = async (componentType, componentsList) => {
  if (!componentsList.length) {
    console.log("You should pass component(s) name");
    return;
  }

  const correctedNames = normalizeNames(componentsList);

  const existedComponents = await readCurrentDirectory(componentType);

  return await Promise.all(
    correctedNames.map(async (componentName) => {
      if (
        existedComponents.length &&
        existedComponents.includes(componentName)
      ) {
        console.log(`${componentName} is already existed!`);
        return;
      }
      const folderPath = await createFolder(componentType, componentName);
      await createFiles(folderPath, componentName);
      console.log(`${componentName} created successfully!`);
    })
  );
};

const createStructure = async (action, components) => {
  try {
    switch (action) {
      case "--component":
      case "-c":
        return await create(COMPONENTS_TYPE.components, components);
      case "--page":
      case "-p":
        return await create(COMPONENTS_TYPE.pages, components);
      default:
        return console.log(
          "Set correct action flag: --component (-c) or --page (-p)!"
        );
    }
  } catch (error) {
    console.log(error);
  }
};

const [action, ...files] = process.argv.slice(2);

createStructure(action, files);
