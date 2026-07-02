const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
    {
        url: 'https://toyama.com.co/wp-content/uploads/2024/10/01_Generador-Planta-electrica_TG950TX-110_204-001.webp',
        dest: 'resources/imagenes/Generadores gasolina/01_TG950TX-110.webp'
    },
    {
        url: 'https://toyama.com.co/wp-content/uploads/2024/10/02_Generador-Planta-electrica_TG950TX-110_204-001.webp',
        dest: 'resources/imagenes/Generadores gasolina/02_TG950TX-110.webp'
    },
    {
        url: 'https://toyama.com.co/wp-content/uploads/2024/10/03_Generador-Planta-electrica_TG950TX-110_204-001.webp',
        dest: 'resources/imagenes/Generadores gasolina/03_TG950TX-110.webp'
    },
    {
        url: 'https://toyama.com.co/wp-content/uploads/2024/12/Generador_TDG2500XP_251-065_01.webp',
        dest: 'resources/imagenes/Generadores diesel/01_TDG2500XP.webp'
    },
    {
        url: 'https://toyama.com.co/wp-content/uploads/2024/12/Generador_TDG2500XP_251-065_03.webp',
        dest: 'resources/imagenes/Generadores diesel/02_TDG2500XP.webp'
    },
    {
        url: 'https://toyama.com.co/wp-content/uploads/2024/12/Generador_TDG2500XP_251-065_04.webp',
        dest: 'resources/imagenes/Generadores diesel/03_TDG2500XP.webp'
    },
    {
        url: 'https://toyama.com.co/wp-content/uploads/2024/12/1a_Apisonador_TTR80ZXP-619-002.webp',
        dest: 'resources/imagenes/Apisonadores/01_TTR80-XP.webp'
    },
    {
        url: 'https://toyama.com.co/wp-content/uploads/2024/12/1_Placa-vibratoria_TPC60W-XP-613-002.webp',
        dest: 'resources/imagenes/Apisonadores/02_Placa_TPC60WXP.webp'
    },
    {
        url: 'https://toyama.com.co/wp-content/uploads/2024/12/1_Placa-vibratoria_TPC100WT-XP-613-001.webp',
        dest: 'resources/imagenes/Apisonadores/03_Placa_TPC100WTXP.webp'
    },
    {
        url: 'https://toyama.com.co/wp-content/uploads/2024/11/01-Cortadora_de_Piso_TCC450-XP_601-002.webp',
        dest: 'resources/imagenes/Cortadores/01_TCC450-XP.webp'
    },
    {
        url: 'https://toyama.com.co/wp-content/uploads/2024/12/1_Allanadora_TPT900-XP-616-001.webp',
        dest: 'resources/imagenes/Cortadores/02_Allanadora_TPT900XP.webp'
    },
    {
        url: 'https://toyama.com.co/wp-content/uploads/2024/12/1_Vibrador_TCV65-71-0251.webp',
        dest: 'resources/imagenes/Motovibradores/01_TCV65.webp'
    }
];

function download(url, destPath) {
    return new Promise((resolve, reject) => {
        const fullDest = path.join(__dirname, destPath);
        const dir = path.dirname(fullDest);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const file = fs.createWriteStream(fullDest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: HTTP ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${destPath}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(fullDest, () => {});
            reject(err);
        });
    });
}

async function run() {
    for (const img of images) {
        try {
            await download(img.url, img.dest);
        } catch (e) {
            console.error(`Error downloading ${img.url}:`, e.message);
        }
    }
    console.log('All downloads finished.');
}

run();
