// Script to convert all PNG images in public/assets to WebP
import sharp from 'sharp'
import { readdirSync, statSync, unlinkSync } from 'fs'
import { join, extname, basename } from 'path'

const ASSETS_DIR = './public/assets'

async function convertToWebP(filePath) {
  const ext = extname(filePath).toLowerCase()
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') return

  const dir = filePath.substring(0, filePath.lastIndexOf('/'))
  const base = basename(filePath, ext)
  const outputPath = join(dir, `${base}.webp`)

  const inputStat = statSync(filePath)
  await sharp(filePath)
    .webp({ quality: 82 })
    .toFile(outputPath)

  const outputStat = statSync(outputPath)
  const reduction = (((inputStat.size - outputStat.size) / inputStat.size) * 100).toFixed(1)
  console.log(`✅ ${basename(filePath)} → ${base}.webp  (${(inputStat.size/1024).toFixed(0)} KB → ${(outputStat.size/1024).toFixed(0)} KB, -${reduction}%)`)
  
  // Delete the original PNG
  unlinkSync(filePath)
  console.log(`   🗑  Deleted original ${basename(filePath)}`)
}

function walkDir(dir) {
  const entries = readdirSync(dir)
  const files = []
  for (const entry of entries) {
    const fullPath = join(dir, entry)
    if (statSync(fullPath).isDirectory()) {
      files.push(...walkDir(fullPath))
    } else {
      files.push(fullPath.replace(/\\/g, '/'))
    }
  }
  return files
}

const files = walkDir(ASSETS_DIR)
const images = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f))

console.log(`\nFound ${images.length} images to convert:\n`)
for (const img of images) {
  console.log(`  ${img}`)
}
console.log('')

for (const img of images) {
  await convertToWebP(img)
}

console.log('\n🎉 All done!')
