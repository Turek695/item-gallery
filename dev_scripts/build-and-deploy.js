// filepath: /e:/Web-Dev/item-gallery/dev_scripts/build-and-deploy.js
import { execSync } from "child_process";

try {
    // Stash any uncommitted changes
    execSync("git stash --quiet");

    // Check out the latest commit
    execSync("git checkout HEAD --quiet");

    // Run the build process
    execSync("npm run build", { stdio: "inherit" });

    // Deploy the build
    execSync("npm run zip", { stdio: "inherit" });
    execSync("npm run deploy", { stdio: "inherit" });

    // Restore stashed changes
    execSync("git stash pop --quiet");
} catch (error) {
    console.error("Error during build and deploy:", error);
    // Restore stashed changes in case of error
    execSync("git stash pop --quiet");
    process.exit(1);
}
