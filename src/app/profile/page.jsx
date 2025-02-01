async function LoadData() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

const Profile = async () => {
  await LoadData();
  return <div>This is profile route</div>;
};

export default Profile;
