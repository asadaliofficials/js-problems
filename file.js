const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const START_DATE = new Date("2025-07-20");

function formatDate(date) {
  return date.toISOString().replace("T", " ").substring(0, 19);
}

function nextDay(date) {
  const d = new Date(date);
  d.setDate(d.getDate() + 1);
  return d;
}

// get only .js files
const files = fs.readdirSync(".").filter(f => f.endsWith(".js"));

let currentDate = new Date(START_DATE);

files.forEach(file => {
  const base = path.basename(file, ".js");
  try {
    execSync(`git add "${file}"`);

    const commitDate = formatDate(currentDate);
    execSync(`git commit -m "${base}"`, {
      env: {
        ...process.env,
        GIT_AUTHOR_DATE: commitDate,
        GIT_COMMITTER_DATE: commitDate,
      },
    });

    console.log(`✅ Committed: ${base} on ${commitDate}`);
    currentDate = nextDay(currentDate);
  } catch (err) {
    console.error(`❌ Failed for ${file}:`, err.message);
  }
});

console.log("🎉 All problem files committed with spaced-out dates!");
