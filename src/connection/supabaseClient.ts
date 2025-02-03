import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fftewlwdavbboejgaktd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmdGV3bHdkYXZiYm9lamdha3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1ODU3NDYsImV4cCI6MjA1NDE2MTc0Nn0.4sLouT2AJfJ9jbPPI1BMT2PxMLIsriZTDzSaqSivCbg';

export const supabase = createClient(supabaseUrl, supabaseKey);
