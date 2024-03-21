import { Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const profileData: Record<string, string> = {
  name: "Vincent Zhang",
  email: "vincent.zhang@gmail.com",
  phone: "1234567890",
  address: "123 Main St, Anytown USA",
  bio: "I am a web developer and designer with a passion for creating beautiful and functional websites.",
};

const showList = ["email", "phone", "address", "bio"];

export default function ProfilePage() {
  return (
    <div className="bg-white dark:bg-black h-full">
      <div className="w-2/3 p-4 mx-auto">
        <h2>
          <Avatar size="large" icon={<UserOutlined />} className="mr-4" />
          Vincent Zhang
        </h2>
        <ul className="flex flex-col mt-4 gap-4 pl-14">
          {showList.map(item => (
            <li key={item} className="list-none text-lg">
              <strong>{item}:</strong>{" "}
              <Typography.Text className="underline text-lg">
                {profileData[item]}
              </Typography.Text>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
