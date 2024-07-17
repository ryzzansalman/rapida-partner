import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const database: IFormSelect = {
  type: "select",
  dataType: "text",
  name: "database",
  label: "Database",
  options: [
    { label: "MariaDB", value: "mariadb" },
    { label: "MongoDB", value: "mongodb" },
    { label: "Oracle", value: "oracle" },
    { label: "PostgreSQL", value: "postgresql" },
  ],
};