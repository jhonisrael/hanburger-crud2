import { NextRequest, NextResponse } from 'next/server';
import { getAllHamburger, createHamburger } from '@/db/hamburgers';
import { hamburgers } from '@/db/schema';

export async function GET() {
  try {
    const hamburgers = await getAllHamburger();
    return NextResponse.json(hamburgers);
  } catch (error) {
    return NextResponse.json({ error: 'Falha ao buscar hamburger.' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, description, price } = await req.json();
    if (!name || !price) {
      return NextResponse.json({ error: 'Nome e preço são obrigatórios' }, { status: 400 });
    }
    
    const hamburger = await createHamburger(name, description, price);
    return NextResponse.json({ success: true, hamburgerId: hamburger.lastInsertRowid });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar hamburger' }, { status: 500 });
  }
}