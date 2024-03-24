import Icon from "@ant-design/icons";

export default function ComputerIcon(props: Partial<React.ComponentProps<typeof Icon>>) {
  return (
    <Icon
      component={() => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M18 16h2v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1h2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2zM4 4v9h12V4zm4 11v1h4v-1z"
          ></path>
        </svg>
      )}
      {...props}
    />
  );
}
