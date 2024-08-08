import express from 'express';
import authRoutes from './features/auth/routes/authRoutes.js';
import studentRoutes from './features/student/routes/studentRoutes.js';
import sequelize from './config/database.js';
import errorHandler from './middleware/errorHandler.js';
import swaggerSpec from './config/swagger.js';
import swaggerUi from 'swagger-ui-express';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// middlewares 
app.disable('x-powered-by');

// ROUTES START
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/students', studentRoutes);
// ROUTES END 

// ADD ERROR HANDLER 
app.use(errorHandler);

// SYNC DATABASE 
sequelize.sync()
        .then(() => console.log("Database synced"))
        .catch((error) => console.error(`Database sync error: ${error}`));

// SWAGGER CONFIGURATION
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// START APP
app.listen(PORT , ()=>{
    console.log(`🚀 Server listening on port ${PORT}`);
});

