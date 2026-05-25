// Slot @modal dirender di atas children — modal akan muncul overlay
// default.tsx di @modal wajib ada agar layout tidak crash saat tidak ada modal aktif
export default function ModalLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
