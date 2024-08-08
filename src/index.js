import express from 'express';
import authRoutes from './features/auth/routes/authRoutes.js';
import studentRoutes from './features/student/routes/studentRoutes.js';
import sequelize from './config/database.js';
import errorHandler from './middleware/errorHandler.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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


// START APP
app.listen(PORT , ()=>{
    console.log(`🚀 Server listening on port ${PORT}`);
});

