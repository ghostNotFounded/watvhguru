import { auth, signOut } from "@/auth";

const ProfilePage = async () => {
  const session = await auth();

  return (
    <form
      className="p-20"
      action={async () => {
        "use server";

        await signOut();
      }}
    >
      <button>Sign Out</button>
    </form>
  );
};

export default ProfilePage;
