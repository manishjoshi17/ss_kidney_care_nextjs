/**
 * In-memory rate limit. 5 requests per minute per IP.
 * Resets on cold start — acceptable for a low-volume hospital site.
 * For production scale, swap with an Upstash/Redis-backed store.
 */
interface Bucket {
  count: number;
  resetAt: number;
}

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const buckets = new Map<string, Bucket>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (bucket.count >= MAX_REQUESTS) return true;
  bucket.count += 1;
  return false;
}
