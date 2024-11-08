import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://bqnbzltopalsqvfttpor.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxbmJ6bHRvcGFsc3F2ZnR0cG9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNzcxMzcsImV4cCI6MjA0NTg1MzEzN30.elDuq5aniu5iObXQBNhlUn0p3rdvMH-gyVW694X24xo';
const supabase = createClient (SUPABASE_URL, SUPABASE_KEY);

export async function fetchRandomSongs() {
    const { data, error } = await supabase.from('songs').select('*').limit(10);
    return error ? [] : data;
}
export async function fetchtext(id) {
    const { data, error } = await supabase.from('text').select('id,content, surjestion, header').eq('id',id)
    
    return error ? [] : data;
}

export async function fetchSongs() {
    const { data, error } = await supabase.from('songs').select('*');
    return error ? [] : data;
}

export async function fetchArtists() {
    const { data, error } = await supabase.from('artists').select('*');
    return error ? [] : data;
}

export async function authenticateUser(username, password) {
    // Auth logic here
}
