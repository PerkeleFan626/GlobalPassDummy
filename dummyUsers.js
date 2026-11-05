import { supabase } from "./database";

export async function createDummyUser({name, email, role, country}) {
    if (!name || !email || !role || !country) {
        console.error('All fields needs to be filled');
        return null;
    }

    const {data, error} = await supabase.rpc('create_dummy_user', {
        dummy_name: name,
        dummy_email: email,
        dummy_role: role,
        dummy_country: country
    });

    if(error) {
        console.error('Error creating dummy user:', error.message);
        return null;
    }
    return data;
}