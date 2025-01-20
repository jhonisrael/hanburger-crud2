import { db } from './index';
import { hamburgers} from './schema';
import { eq } from 'drizzle-orm';

export const getAllHamburger = async () => {
  return await db.select().from(hamburgers).all();
};

export const createHamburger = async (name: string, description: string, price: number) => {
  return await db.insert(hamburgers).values({ name, description, price }).run();
};

export const updateHamburger = async (id: number, name: string, description: string, price: number) => {
  return await db.update(hamburgers)
    .set({ name, description, price })
    .where(eq(hamburgers.id, id))
    .run();
};

export const deleteHamburger = async (id: number) => {
  return await db.delete(hamburgers).where(eq(hamburgers.id, id)).run();
};