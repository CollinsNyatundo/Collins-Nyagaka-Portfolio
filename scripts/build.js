const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting build verification...');

try {
  // Clean dist directory
  console.log('\n📦 Cleaning dist directory...');
  execSync('rm -rf dist');

  // Install dependencies
  console.log('\n📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Run build
  console.log('\n🛠 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Verify dist directory
  console.log('\n✅ Verifying build output...');
  const distPath = path.join(process.cwd(), 'dist');
  const files = execSync(`ls -la ${distPath}`).toString();
  console.log(files);

  console.log('\n✨ Build verification complete!');
} catch (error) {
  console.error('\n❌ Build verification failed:', error.message);
  process.exit(1);
}