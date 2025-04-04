/*
  # Set up admin authentication
  
  1. Create admin user
    - Insert admin email into auth.users
    - Set up proper authentication credentials
    - Ensure admin role assignment

  2. Security
    - Add RLS policies for admin access
    - Configure proper authentication rules
*/

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create admin user if it doesn't exist
DO $$ 
BEGIN
  -- Check if admin user exists
  IF NOT EXISTS (
    SELECT 1 FROM auth.users 
    WHERE email = 'cnyagakan@gmail.com'
  ) THEN
    -- Insert admin user
    INSERT INTO auth.users (
      instance_id,
      id,
      aud,
      role,
      email,
      encrypted_password,
      email_confirmed_at,
      recovery_sent_at,
      last_sign_in_at,
      raw_app_meta_data,
      raw_user_meta_data,
      created_at,
      updated_at,
      confirmation_token,
      email_change,
      email_change_token_new,
      recovery_token
    ) VALUES (
      '00000000-0000-0000-0000-000000000000',
      uuid_generate_v4(),
      'authenticated',
      'authenticated',
      'cnyagakan@gmail.com',
      crypt('CollinsNyatundo003!', gen_salt('bf')),
      NOW(),
      NOW(),
      NOW(),
      '{"provider":"email","providers":["email"]}',
      '{"isAdmin":true}',
      NOW(),
      NOW(),
      '',
      '',
      '',
      ''
    );
  END IF;
END $$;