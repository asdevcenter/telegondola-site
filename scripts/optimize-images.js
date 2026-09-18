const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const imageExtensions = ['.jpg', '.jpeg', '.png'];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!imageExtensions.includes(ext)) return;
  
  try {
    const fileName = path.basename(filePath, ext);
    const dirName = path.dirname(filePath);
    
    console.log(`🔄 Optimizare: ${path.basename(filePath)}`);
    
    if (ext === '.png') {
      await sharp(filePath)
        .png({ 
          quality: 85, 
          compressionLevel: 9,
          palette: true 
        })
        .toFile(`${dirName}/${fileName}-optimized.png`);
      
      fs.unlinkSync(filePath);
      fs.renameSync(`${dirName}/${fileName}-optimized.png`, filePath);
      
      await sharp(filePath)
        .webp({ quality: 85 })
        .toFile(`${dirName}/${fileName}.webp`);
        
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(filePath)
        .jpeg({ 
          quality: 85, 
          progressive: true,
          mozjpeg: true 
        })
        .toFile(`${dirName}/${fileName}-optimized.jpg`);
      
      fs.unlinkSync(filePath);
      fs.renameSync(`${dirName}/${fileName}-optimized.jpg`, filePath);
      
      await sharp(filePath)
        .webp({ quality: 85 })
        .toFile(`${dirName}/${fileName}.webp`);
    }
    
    console.log(`✅ Optimizat: ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`❌ Eroare la ${filePath}:`, error.message);
  }
}

async function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await walkDirectory(filePath);
    } else {
      await optimizeImage(filePath);
    }
  }
}

console.log('🚀 Start optimizare imagini...\n');

walkDirectory(publicDir).then(() => {
  console.log('\n✅ Toate imaginile au fost optimizate!');
}).catch(err => {
  console.error('❌ Eroare:', err);
});