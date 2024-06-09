interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <main className="pt-[110px] grow">{children}</main>;
};
