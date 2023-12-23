export interface Profile  {
    user_id: number,
    name: string,
    lastname: string,
    phone_number: string,
    email: string
}

export interface UserAction {
    type: string,
    profile: Profile

}