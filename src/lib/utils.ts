import { clsx, type ClassValue } from "clsx";

/**
 * Merge class names conditionally
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
