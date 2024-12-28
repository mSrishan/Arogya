// src/types/Doctor.ts
export interface Doctor {
  id: number; // Adjust the type based on your backend response
  name: string;
  specialization: string;
  image?: string; // Include if applicable
}
