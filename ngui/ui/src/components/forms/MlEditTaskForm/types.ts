import { FIELD_NAMES } from "./constants";

export type FormValues = {
  [FIELD_NAMES.NAME]: string;
  [FIELD_NAMES.DESCRIPTION]: string;
  [FIELD_NAMES.OWNER]: string;
};