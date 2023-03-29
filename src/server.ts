import { app } from './app';
import { PORT, URL } from './configs/vars';

app.listen(PORT, () => {
    console.log(`Server is running on ${URL}`);
});
