import * as http from 'http';
// Import tipe data untuk req dan res
import { IncomingMessage, ServerResponse } from 'http';

const PORT = 3000;

// Tambahkan tipe : IncomingMessage dan : ServerResponse pada parameter
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    
    const url = req.url || '/';
    const method = req.method || 'GET';

    console.log(`[${new Date().toLocaleTimeString()}] ${method} ${url}`);

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>🏠 Halaman Utama</h1>');
    } 
    // ... sisa kode routing Anda tetap sama ...
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>❌ 404 - Tidak Ditemukan</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});