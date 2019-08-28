export class CreateEventDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roles: string[];
    active: boolean;
}