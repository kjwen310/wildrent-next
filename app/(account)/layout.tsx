import { redirect } from 'next/navigation';
import getCurrentUser from'@/actions/getCurrentUser'

export default async function AccountLayout({
  children
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect('/login');
  }

  return (
    <>
      {children}
    </>
  );
};
