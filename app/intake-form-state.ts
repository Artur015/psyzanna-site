export type IntakeFormState = {
  status: "idle" | "success" | "error";
  message: string;
  mailtoUrl: string;
  submissionId: string;
};

export const initialIntakeFormState: IntakeFormState = {
  status: "idle",
  message: "",
  mailtoUrl: "",
  submissionId: "",
};
