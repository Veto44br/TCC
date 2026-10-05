/*
 * ALT WEAR — integração com Supabase
 * Banco online: PostgreSQL + Supabase Auth.
 * A chave abaixo é uma Publishable Key, apropriada para uso no frontend.
 */
const SUPABASE_URL = "https://hjimtxemnkgchqrtdkzx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_L7CQYRwrJR2_RnFdtqwYCg_vkzWAibg";

const altwearSupabase = window.supabase?.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

function supabaseReady() {
    return Boolean(altwearSupabase);
}

async function supabaseSignUp({ nome, email, password }) {
    if (!supabaseReady()) throw new Error("Cliente Supabase não carregado.");

    const { data, error } = await altwearSupabase.auth.signUp({
        email,
        password,
        options: {
            data: { nome }
        }
    });

    if (error) throw error;

    if (data.user) {
        const { error: profileError } = await altwearSupabase
            .from("profiles")
            .upsert({
                id: data.user.id,
                nome,
                email
            }, { onConflict: "id" });

        if (profileError) console.warn("Perfil não foi salvo:", profileError.message);
    }

    return data;
}

async function supabaseSignIn(email, password) {
    if (!supabaseReady()) throw new Error("Cliente Supabase não carregado.");

    const { data, error } = await altwearSupabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) throw error;
    return data;
}

async function supabaseSignOut() {
    if (!supabaseReady()) return;
    const { error } = await altwearSupabase.auth.signOut();
    if (error) console.warn("Erro ao sair:", error.message);
}

async function supabaseGetUser() {
    if (!supabaseReady()) return null;
    const { data, error } = await altwearSupabase.auth.getUser();
    if (error) return null;
    return data.user || null;
}

async function supabaseGetProfile() {
    const user = await supabaseGetUser();
    if (!user) return null;

    const { data, error } = await altwearSupabase
        .from("profiles")
        .select("id,nome,email,created_at")
        .eq("id", user.id)
        .maybeSingle();

    if (error) throw error;
    return data || { id: user.id, nome: user.user_metadata?.nome || "", email: user.email };
}

async function saveOrderToDatabase(order) {
    const user = await supabaseGetUser();
    if (!user) return { ok: false, reason: "not_authenticated" };

    const { data: savedOrder, error } = await altwearSupabase
        .from("orders")
        .insert({
            user_id: user.id,
            status: order.status,
            total: order.total,
            payment_method: order.paymentMethod,
            delivery: order.delivery
        })
        .select("id")
        .single();

    if (error) throw error;

    const items = order.items.map((item) => {
        const product = typeof getProductById === "function" ? getProductById(item.productId) : null;
        return {
            order_id: savedOrder.id,
            product_id: Number(item.productId),
            quantity: Number(item.q),
            size: item.size || "M",
            color: item.color || null,
            price: Number(product?.preco || item.price || 0)
        };
    });

    if (items.length) {
        const { error: itemsError } = await altwearSupabase
            .from("order_items")
            .insert(items);
        if (itemsError) throw itemsError;
    }

    return { ok: true, id: savedOrder.id };
}

async function getOrdersFromDatabase() {
    const user = await supabaseGetUser();
    if (!user) return [];

    const { data, error } = await altwearSupabase
        .from("orders")
        .select(`
            id,
            status,
            total,
            payment_method,
            delivery,
            created_at,
            order_items (
                id,
                product_id,
                quantity,
                size,
                color,
                price
            )
        `)
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

    if (error) throw error;

    return (data || []).map((order) => ({
        id: `AW-${String(order.id).slice(0, 8).toUpperCase()}`,
        databaseId: order.id,
        date: new Date(order.created_at).toLocaleDateString("pt-BR"),
        status: order.status,
        delivery: order.delivery || "Pedido registrado.",
        total: Number(order.total),
        paymentMethod: order.payment_method,
        items: (order.order_items || []).map((item) => ({
            productId: item.product_id,
            q: item.quantity,
            size: item.size,
            color: item.color,
            price: Number(item.price)
        }))
    }));
}

async function getReviewsFromDatabase() {
    const user = await supabaseGetUser();
    if (!user) return [];

    const { data, error } = await altwearSupabase
        .from("reviews")
        .select("id,product_id,rating,comment,created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

    if (error) throw error;
    return (data || []).map((review) => ({
        productId: review.product_id,
        rating: review.rating,
        text: review.comment,
        date: new Date(review.created_at).toLocaleDateString("pt-BR")
    }));
}

async function getReturnsFromDatabase() {
    const user = await supabaseGetUser();
    if (!user) return [];

    const { data, error } = await altwearSupabase
        .from("returns")
        .select("id,order_id,status,amount,method,reason,created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

    if (error) throw error;
    return (data || []).map((item) => ({
        id: item.id,
        orderId: item.order_id,
        status: item.status,
        amount: Number(item.amount),
        method: item.method,
        reason: item.reason,
        date: new Date(item.created_at).toLocaleDateString("pt-BR")
    }));
}

async function createReturnInDatabase(returnData) {
    const user = await supabaseGetUser();
    if (!user) throw new Error("Faça login para solicitar uma devolução.");

    const { error } = await altwearSupabase
        .from("returns")
        .insert({
            user_id: user.id,
            order_id: returnData.orderId,
            status: returnData.status,
            amount: returnData.amount,
            method: returnData.method,
            reason: returnData.reason
        });

    if (error) throw error;
}

// Compatibilidade: funções antigas não são mais usadas para autenticação.
async function saveUserToDatabase() { return true; }
async function findUserInDatabase() { return null; }
