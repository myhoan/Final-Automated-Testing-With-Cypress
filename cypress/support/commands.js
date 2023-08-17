import { validateSchema } from "./validate-schema-command";
import "cypress-downloadfile/lib/downloadFileCommand";
Cypress.Commands.add("validateSchema", validateSchema);
