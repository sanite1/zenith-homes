import { api } from "../api";
import type { ApiResponse, ApiErrorResponse } from "../types/api.types";
import type {
  SubmitContactPayload,
  SubmitContactData,
} from "../types/contact.types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

const BASE = "/api/contact";
const COMPANY_ID = import.meta.env.VITE_CONTACT_COMPANY_ID;

// ── RAW API FUNCTIONS ──

// POST /api/contact/:companyId — public, rate-limited 5/15min/IP.
// 201 → { message: "Message received", data: { id } }
// 400 → ValidationError with fields[]; 403/404/429/500 → { error, status, message }
export const submitContactFn = (
  payload: SubmitContactPayload,
): Promise<ApiResponse<SubmitContactData>> =>
  api.post<ApiResponse<SubmitContactData>>(`${BASE}/${COMPANY_ID}`, payload);

// ── REACT QUERY: Query Keys ──
export const contactKeys = {
  all: ["contact"] as const,
} as const;

// ── Error helper ──
const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const data = error.response?.data as ApiErrorResponse | undefined;
    return data?.message || error.message;
  }
  return "An unexpected error occurred";
};

// ── REACT QUERY: Mutations ──
export const useSubmitContact = () =>
  useMutation<ApiResponse<SubmitContactData>, AxiosError, SubmitContactPayload>(
    {
      mutationFn: (payload) => submitContactFn(payload),
      onError: (error) => {
        // 400 field errors are mapped onto the inputs by the form itself;
        // everything else surfaces the backend message verbatim.
        const data = error.response?.data as ApiErrorResponse | undefined;
        if (error.response?.status === 400 && data?.fields?.length) return;
        toast.error(getErrorMessage(error));
      },
    },
  );
