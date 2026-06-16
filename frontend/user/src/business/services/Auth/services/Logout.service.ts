import connect from "../../connect";
const Logout: ({ UserID }: { UserID: string }) => Promise<boolean> = async ({ UserID }: { UserID: string }) => {
    const response: boolean = await connect.post({ endpoint: "/auth/logout", body: { UserID } }) as boolean;
    return response;
};
export default Logout;
