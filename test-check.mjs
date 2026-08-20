import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Domain } = require('domain-check');

async function test() {
  try {
    const domain = 'google.com';
    console.log(`Checking ${domain}...`);
    const isFree = await Domain.isFree(domain);
    console.log(`Is free: ${isFree}`);
    
    const domain2 = 'this-domain-should-be-free-123456789.co.za';
    console.log(`Checking ${domain2}...`);
    const isFree2 = await Domain.isFree(domain2);
    console.log(`Is free: ${isFree2}`);
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
