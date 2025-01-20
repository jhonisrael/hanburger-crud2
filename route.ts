// import { db } from "./drizzle/db";
// import { hamburgers } from "./drizzle/schema";
// import { NextResponse } from "next/server";

// // GET: Lista todos os hambúrgueres
// export async function GET() {
//   const allHamburgers = await db.select().from(hamburgers).all();
//   return NextResponse.json({
//     message: "Hambúrgueres recuperados com sucesso!",
//     data: allHamburgers,
//   });
// }

// // POST: Adiciona um hambúrguer
// export async function POST(req: Request) {
//   const { name, price, description } = await req.json();
//   await db.insert(hamburgers).values({ name, price, description });
//   return NextResponse.json({ message: "Hambúrguer adicionado com sucesso!" });
// }

// // DELETE: Remove um hambúrguer por ID
// export async function DELETE(req: Request) {
//   const { id } = await req.json();
//   await db.delete(hamburgers).where(hamburgers.id.equals(id));
//   return NextResponse.json({ message: "Hambúrguer removido com sucesso!" });
// }

// // PUT: Atualiza um hambúrguer por ID
// export async function PUT(req: Request) {
//   const { id, name, price, description } = await req.json();
//   await db.update(hamburgers)
//     .set({ name, price, description })
//     .where(hamburgers.id.equals(id));
//   return NextResponse.json({ message: "Hambúrguer atualizado com sucesso!" });
// }

import { db } from "./drizzle/db";
import { hamburgers } from "./drizzle/schema";
import { eq } from "drizzle-orm";

import { NextResponse } from "next/server";
export async function GET() {
  const allHamburgers = await db.select().from(hamburgers).all();
  return NextResponse.json({
    message: "Hambúrgueres recuperados com sucesso!",
    data: allHamburgers,
  });
}

export async function POST(req: Request) {
  const { name, price, description } = await req.json();
  await db.insert(hamburgers).values({ name, price, description });
  return NextResponse.json({ message: "Hambúrguer adicionado com sucesso!" });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await db.delete(hamburgers).where(eq(hamburgers.id, id)); // Use 'eq' instead of 'equals'
  return NextResponse.json({ message: "Hambúrguer removido com sucesso!" });
}

export async function PUT(req: Request) {
  const { id, name, price, description } = await req.json();
  await db.update(hamburgers)
    .set({ name, price, description })
    .where(eq(hamburgers.id, id)); // Use 'eq' instead of 'equals'
  return NextResponse.json({ message: "Hambúrguer atualizado com sucesso!" });
}