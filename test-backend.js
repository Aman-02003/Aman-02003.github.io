const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000';

async function testBackend() {
    console.log('🧪 Testing Portfolio Backend...\n');

    try {
        // Test health endpoint
        console.log('1. Testing health endpoint...');
        const healthResponse = await fetch(`${BASE_URL}/api/health`);
        const healthData = await healthResponse.json();
        
        if (healthResponse.ok) {
            console.log('✅ Health check passed:', healthData);
        } else {
            console.log('❌ Health check failed:', healthData);
        }

        // Test contact endpoint with valid data
        console.log('\n2. Testing contact endpoint with valid data...');
        const validContactData = {
            name: 'Test User',
            email: 'test@example.com',
            subject: 'Test Message',
            message: 'This is a test message to verify the backend is working correctly.'
        };

        const contactResponse = await fetch(`${BASE_URL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validContactData)
        });

        const contactData = await contactResponse.json();
        
        if (contactResponse.ok) {
            console.log('✅ Contact form test passed:', contactData);
        } else {
            console.log('❌ Contact form test failed:', contactData);
        }

        // Test contact endpoint with invalid data
        console.log('\n3. Testing contact endpoint with invalid data...');
        const invalidContactData = {
            name: 'T', // Too short
            email: 'invalid-email', // Invalid email
            subject: 'Hi', // Too short
            message: 'Hi' // Too short
        };

        const invalidResponse = await fetch(`${BASE_URL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invalidContactData)
        });

        const invalidData = await invalidResponse.json();
        
        if (!invalidResponse.ok) {
            console.log('✅ Validation test passed (correctly rejected invalid data):', invalidData);
        } else {
            console.log('❌ Validation test failed (should have rejected invalid data):', invalidData);
        }

        // Test rate limiting
        console.log('\n4. Testing rate limiting...');
        const rateLimitPromises = [];
        for (let i = 0; i < 6; i++) {
            rateLimitPromises.push(
                fetch(`${BASE_URL}/api/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(validContactData)
                })
            );
        }

        const rateLimitResponses = await Promise.all(rateLimitPromises);
        const rateLimited = rateLimitResponses.some(response => !response.ok);
        
        if (rateLimited) {
            console.log('✅ Rate limiting test passed (some requests were rate limited)');
        } else {
            console.log('❌ Rate limiting test failed (all requests went through)');
        }

    } catch (error) {
        console.error('❌ Test failed with error:', error.message);
        console.log('\n💡 Make sure the backend server is running on port 3000');
        console.log('   Run: npm start');
    }
}

// Run tests if this file is executed directly
if (require.main === module) {
    testBackend();
}

module.exports = { testBackend };

