import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Auth API',
            version: '1.0.0',
            description: 'API for user authentication',
        },
        servers: [
            {
                // url: 'http://localhost:3000/',
                url: "https://studentapp-0scj.onrender.com"
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },
    apis: [
        "./src/features/auth/routes/*.js",
        "./src/features/student/routes/*.js"
    ], // Path to your route files
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;