import * as SecureStore from "expo-secure-store";
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'

const ExpoSecureStoreAdapter = {
    getItem: (key: string) => {
      return SecureStore.getItemAsync(key);
    },
    setItem: (key: string, value: string) => {
      SecureStore.setItemAsync(key, value);
    },
    removeItem: (key: string) => {
      SecureStore.deleteItemAsync(key);
    },
  };

const supabaseUrl = 'https://llcafmjshrwrhofbsgsz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsY2FmbWpzaHJ3cmhvZmJzZ3N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNjE0NDMsImV4cCI6MTk5NzgzNzQ0M30.__9B6v2-LUB4Ft_GAGY-bnATSFBKFZlwQ85EaqNRctU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      storage: ExpoSecureStoreAdapter as any,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })

