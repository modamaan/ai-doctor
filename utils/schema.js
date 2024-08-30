import { serial, text, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const MedicalInterview = pgTable('medicalInterview', {
    id: serial('id').primaryKey(),
    medicalMockResp: text('medicalMockResp').notNull(),
    medicalCategory: varchar('medicalCategory').notNull(),
    rollDesc: varchar('rollDesc').notNull(),
    medicalExperience: varchar('medicalExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
    mockId: varchar('mockId').notNull()
});
