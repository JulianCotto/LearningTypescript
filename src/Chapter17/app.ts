import fs from 'node:fs'
import { z } from 'zod';



const dataSchema = z.object({
    title: z.string(),
    id: z.number(),
    values: z.array(z.string()),
});

const content = fs.readFileSync('data.json');

dataSchema.parse(content);