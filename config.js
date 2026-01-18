/**
 * API Configuration
 * Automatically detects environment and sets correct API URL
 */

// Detect if running in Railway production or local development
const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const API_BASE_URL = isProduction 
  ? 'https://perpustakaan-deploy-production.up.railway.app/api'
  : 'http://localhost:3000/api';

console.log(`🌐 Environment: ${isProduction ? 'PRODUCTION' : 'DEVELOPMENT'}`);
console.log(`📡 API URL: ${API_BASE_URL}`);

// Make API_BASE_URL globally available
window.API_BASE_URL = API_BASE_URL;
