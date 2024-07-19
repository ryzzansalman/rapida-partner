import type { IForm } from "../../../interfaces/project.interface";
import { invitationEmail } from "./inputs/email/invitationEmail.form-element";
import { personName } from "./inputs/names/personName.form-element";
import { userStatus } from "./inputs/status/userStatus.form-element";
import { username } from "./inputs/username.form-element";

const newPersonName = { ...personName, isRequired: true };
const newUsername = { ...username, isRequired: true };
const newInvitationEmail = { ...invitationEmail, isRequired: true };
const newUserStatus = { ...userStatus, isRequired: true };

export const ssoUserForm: IForm = {
    id: "ssoUserForm",
    title: "Gerenciar usuário de SSO",
    guards: "isAuthenticated",
    elements: [
        newPersonName,
        newUsername,
        newInvitationEmail,
        newUserStatus
    ]
}