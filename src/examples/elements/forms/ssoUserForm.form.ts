import type { IForm } from "../../../interfaces/project.interface";
import { companyId } from "./autocompletes/companyId.form-element";
import { saveButton } from "./buttons/saveButton.form-element";
import { invitationEmail } from "./inputs/email/invitationEmail.form-element";
import { personName } from "./inputs/names/personName.form-element";
import { userStatus } from "./inputs/status/userStatus.form-element";
import { username } from "./inputs/username.form-element";

const newPersonName = { ...personName, isRequired: true };
const newUsername = { ...username, isRequired: true };
const newInvitationEmail = { ...invitationEmail, isRequired: true };
const newCompanyId = { ...companyId, isRequired: true };
const newUserStatus = { ...userStatus, isRequired: true };

export const ssoUserForm: IForm = {
    id: "ssoUserForm",
    title: "Gerenciar usuário de SSO",
    guards: "isAuthenticated",
    elements: [
        newPersonName,
        newUsername,
        newInvitationEmail,
        newCompanyId,
        newUserStatus,
        saveButton
        
    ]
}