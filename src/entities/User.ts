export interface ProfilePicture {
    filename: string;
    uri: string;
    url: string;
    type: string;
}

export interface User {
    _id: string;
    name: string;
    email: string;
    profilePicture: ProfilePicture;
    password: string;
    createdAt: string;
    updatedAt: string;
}