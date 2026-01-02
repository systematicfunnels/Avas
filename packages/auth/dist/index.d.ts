interface UserShape {
    id: string;
    email: string;
    roles: string[];
}
interface AuthConfig {
    providers: string[];
    sessionDuration: number;
}
declare function createAuth(config: AuthConfig): {
    config: AuthConfig;
    login(email: string, password: string): Promise<{
        success: boolean;
        user: {
            id: string;
            email: string;
            roles: string[];
        };
    }>;
    logout(): Promise<{
        success: boolean;
    }>;
};
declare function useAuth(): {
    user: any;
    isLoading: boolean;
    login: () => Promise<void>;
    logout: () => Promise<void>;
};

export { type AuthConfig, type UserShape, createAuth, useAuth };
