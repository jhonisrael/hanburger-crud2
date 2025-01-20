import { NextRequest, NextResponse } from 'next/server';
import { updateHamburger, deleteHamburger } from '@/db/hamburgers';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;

  const { name, description, price } = await req.json();

  if (!id || !name || !price) {
    return NextResponse.json({ error: 'ID, nome e preço são obrigatórios' }, { status: 400 });
  }

  try {
    updateHamburger(parseInt(id), name, description, price);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Falha ao atualizar Hamburger' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: 'ID é obrigatório' }, { status: 400 });
  }

  try {
    updateHamburger(parseInt(id), '', '', 0);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Falha ao deletar Hamburger' }, { status: 500 });
  }
}

function localUpdateHamburger(arg0: number, name: any, description: any, price: any) {
    throw new Error('Function not implemented.');
}
