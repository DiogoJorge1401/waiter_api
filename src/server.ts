import { app } from './app';
import { PORT } from './config';
import { connect } from './database/mongo_connect';

const main = async () => {
    try {
        await connect();

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }
};

main();
