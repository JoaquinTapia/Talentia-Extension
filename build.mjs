import esbuild from "esbuild";
import fs from "fs";
import path from "path";

const watch = process.argv.includes("--watch");

const copyRecursive = (src, dest) => {
    if (!fs.existsSync(src)) return;

    fs.mkdirSync(dest, { recursive: true });

    for (const file of fs.readdirSync(src)) {

        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);

        if (fs.statSync(srcPath).isDirectory()) {
            copyRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
};

const buildOptions = {
    entryPoints: [
        "src/background/background.ts",
        "src/content/linkedin/index.ts",
        "src/popup/popup.ts"
    ],

    outdir: "dist",

    bundle: true,

    format: "esm",

    target: "es2022",

    sourcemap: true,

    logLevel: "info"
};

if (watch) {

    const ctx = await esbuild.context(buildOptions);

    await ctx.watch();

    console.log("👀 Watching...");

} else {

    await esbuild.build(buildOptions);

    console.log("✅ TypeScript compilado");

}

copyRecursive("src/popup", "dist/popup");

copyRecursive("src/assets", "dist/assets");

fs.copyFileSync("manifest.json", "dist/manifest.json");

console.log("✅ Recursos copiados");