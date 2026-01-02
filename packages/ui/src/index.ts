// Example layout component
export function AppLayout({ children }: { children: any }) {
  return {
    render: () => ({
      header: { title: "Avas Platform" },
      main: children,
      footer: { text: "Powered by Avas" }
    })
  }
}

// Example button component
export function PrimaryButton({ children, onClick }: { children: any, onClick: () => void }) {
  return {
    type: "button",
    className: "avas-button primary",
    onClick,
    children
  }
}
