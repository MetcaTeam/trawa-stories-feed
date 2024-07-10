import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vamulglujgemiwsffdlx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhbXVsZ2x1amdlbWl3c2ZmZGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NTE5NDgsImV4cCI6MjAzNjAyNzk0OH0.G5zs74D-h5pwKK024Trv1hw2jkMOfGFX06s1qYiy2dQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
