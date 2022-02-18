// Enter Supabase Information
const SUPABASE_URL = 'https://gmpyleofggphhfqygglb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcHlsZW9mZ2dwaGhmcXlnZ2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NTEsImV4cCI6MTk1OTkxNzQ1MX0.aAoG-W_B2pk78Kdb54K8sM3SQbO0g1kbGUOtqvvQhXA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../authenticate');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('../post');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '/');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getPosts() {
    const resp = await client.from('posts').select('*');
    return checkError(resp);
}

export async function createPost(post) {
    const resp = await client.from('posts').insert(post);
    return checkError(resp);
}
