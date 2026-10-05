/*
 * ALT WEAR — banco de dados local para a versão acadêmica do TCC.
 * Usa IndexedDB do navegador para armazenar contas e pedidos sem depender
 * de um servidor externo. Os dados também continuam sincronizados com
 * localStorage para manter compatibilidade com as páginas existentes.
 */
const ALTWEAR_DB = "altwear_database";
const ALTWEAR_DB_VERSION = 1;

function openAltWearDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(ALTWEAR_DB, ALTWEAR_DB_VERSION);

        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains("users")) {
                const users = db.createObjectStore("users", { keyPath: "email" });
                users.createIndex("email", "email", { unique: true });
            }
            if (!db.objectStoreNames.contains("orders")) {
                const orders = db.createObjectStore("orders", { keyPath: "id" });
                orders.createIndex("email", "email", { unique: false });
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function dbPut(storeName, value) {
    const db = await openAltWearDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readwrite");
        tx.objectStore(storeName).put(value);
        tx.oncomplete = () => { db.close(); resolve(value); };
        tx.onerror = () => { db.close(); reject(tx.error); };
    });
}

async function dbGet(storeName, key) {
    const db = await openAltWearDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readonly");
        const request = tx.objectStore(storeName).get(key);
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error);
        tx.oncomplete = () => db.close();
    });
}

async function dbGetAll(storeName) {
    const db = await openAltWearDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readonly");
        const request = tx.objectStore(storeName).getAll();
        request.onsuccess = () => resolve(request.result || []);
        request.onerror = () => reject(request.error);
        tx.oncomplete = () => db.close();
    });
}

async function saveUserToDatabase(user) {
    try {
        await dbPut("users", user);
        return true;
    } catch (error) {
        console.warn("Não foi possível salvar a conta no IndexedDB:", error);
        return false;
    }
}

async function findUserInDatabase(email) {
    try {
        return await dbGet("users", email.toLowerCase());
    } catch (error) {
        console.warn("Não foi possível consultar a conta no IndexedDB:", error);
        return null;
    }
}

async function saveOrderToDatabase(order) {
    try {
        await dbPut("orders", order);
        return true;
    } catch (error) {
        console.warn("Não foi possível salvar o pedido no IndexedDB:", error);
        return false;
    }
}
