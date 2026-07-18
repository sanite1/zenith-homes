// Mirrors the backend public contact endpoint:
// POST /api/contact/:companyId (no auth, CORS open).
// Validation rules: name 2-200 chars, email valid, message 1-5000 chars,
// phone max 50 chars, subject max 300 chars, metadata free-form primitives.

export interface SubmitContactPayload {
  name: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
  metadata?: Record<string, string | number>;
}

// Inner `.data` of the 201 envelope: the stored message id.
export interface SubmitContactData {
  id: string;
}
