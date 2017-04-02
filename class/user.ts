export class User {
    _id: string;
    email: string;
    username: string;
    fullName: string;
    password: string;
    created_at: Date;
    is_administrator: boolean;
    is_active: boolean;

    constructor() {
        this.is_active = true;
    }
}
