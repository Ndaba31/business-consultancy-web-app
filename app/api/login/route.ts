// /app/api/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { db } from '@/lib/db'; // Adjust based on your setup

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Fetch user from the database
  const user = await db.query('SELECT * FROM staff WHERE company_email = $1', [email]);

  if (!user || !user.rows.length) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  // Check password
  const validPassword = await bcrypt.compare(password, user.rows[0].password);
  
  if (!validPassword) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  // Successful login
  return NextResponse.json({ message: 'Login successful', user: user.rows[0] });
}
