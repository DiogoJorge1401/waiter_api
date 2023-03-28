import { app } from './app';
import { PORT, URL } from './configs/vars';
import { connect } from './connections/mongo_connect';

const main = async () => {
    try {
        await connect();

        app.listen(PORT, () => {
            console.log(`Server is running on ${URL}`);
        });
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }
};

main();
