import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  supabase: SupabaseClient = createClient(environment.upabase_url, environment.supabase_key);

  constructor() { }

  async singIn() {
    const { user, session, error } = await this.supabase.auth.signUp({
      email: 'example@email.com',
      password: 'example-password',
    });

    console.log("entrou")
  }
}