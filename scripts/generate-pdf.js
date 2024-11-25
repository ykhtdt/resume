import { chromium } from "playwright"

const main = async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto("http://localhost:4321/", { waitUntil: "networkidle" })

  await page.emulateMedia({ media: "screen" })

  await page.pdf({
    path: "public/resume.pdf",
    format: "A4",
    scale: 0.8,
    printBackground: false,
    margin: {
      top: "20px",
      bottom: "20px",
    },
  })

  return browser.close()
}

main()
