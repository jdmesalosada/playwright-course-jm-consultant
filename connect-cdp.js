const { chromium } = require("playwright");

(async () => {
  const { spawn } = require("child_process");

  const chrome = spawn(
    `"C:/Program Files/Google/Chrome/Application/chrome.exe"`,
    ["--remote-debugging-port=9222"],
    { shell: true }
  );

  await new Promise((r) => setTimeout(r, 10_000));

  //http://localhost:9222/json/protocol
  const browser = await chromium.connectOverCDP("http://localhost:9222");
  const defaultContext = browser.contexts()[0];
  const page = defaultContext.pages()[0];

  await page.goto("https://github.com/");

  await new Promise((r) => setTimeout(r, 10_000));

  page.close();
})();
