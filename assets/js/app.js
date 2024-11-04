import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://bqnbzltopalsqvfttpor.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxbmJ6bHRvcGFsc3F2ZnR0cG9yIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDI3NzEzNywiZXhwIjoyMDQ1ODUzMTM3fQ.Ci8VZzZ5aN_ACLhiWdh0h-av4EZ_kzQs1SX0W1POF2w'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
