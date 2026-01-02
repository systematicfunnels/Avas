declare function AppLayout({ children }: {
    children: any;
}): {
    render: () => {
        header: {
            title: string;
        };
        main: any;
        footer: {
            text: string;
        };
    };
};
declare function PrimaryButton({ children, onClick }: {
    children: any;
    onClick: () => void;
}): {
    type: string;
    className: string;
    onClick: () => void;
    children: any;
};

export { AppLayout, PrimaryButton };
