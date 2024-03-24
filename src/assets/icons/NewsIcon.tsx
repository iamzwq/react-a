import Icon from "@ant-design/icons";

export default function NewsIcon(props: Partial<React.ComponentProps<typeof Icon>>) {
  return (
    <Icon
      component={() => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2m12 5h-8m5 4h-5"></path>
            <path d="M10 6h8v4h-8z"></path>
          </g>
        </svg>
      )}
      {...props}
    />
  );
}
