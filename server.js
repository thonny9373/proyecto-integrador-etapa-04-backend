import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config';
import routerProductos from './routers/productos.router.js';
import getConnection from './utils/get-connection.js';
import routerCarritos from './routers/carrito.router.js';
import multer from 'multer';

const app = express();
const PORT = process.env.PORT || 2222;
const uri_remota = process.env.URI_MONGO;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = uuidv4();
        const extension = file.mimetype.split('/');
        cb(null, uniqueSuffix + '.' + extension[1]);
    }
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());

app.use('/api/v1/productos', routerProductos);
app.use('/api/v1/carritos', routerCarritos);

app.post('/upload', upload.single('foto'), (req, res) => {
    res.send('Imagen Recibida');
});

app.get('/', (req, res) => {
    res.redirect('/api/v1/productos');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el servidor', err);
    console.log(`Servidor funcionando en: http://localhost:${PORT}`);
    getConnection(uri_remota)
        .then(() => console.log('Conexión a la base de datos exitosa'))
        .catch(err => console.error('Error al conectar a la base de datos', err));
});