import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-anon-public-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// assets/js/app.js
import { loadSongs } from './controller.js';

document.addEventListener('DOMContentLoaded', () => {
    loadSongs();
});
