const requiredEnvVars = [
  'VITE_ADMIN_EMAIL',
  'VITE_ADMIN_PASSWORD'
];

console.log('🔍 Checking environment variables...');

const missing = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missing.length > 0) {
  console.error('\n❌ Missing required environment variables:');
  missing.forEach(envVar => console.error(`  - ${envVar}`));
  process.exit(1);
} else {
  console.log('\n✅ All required environment variables are set');
}