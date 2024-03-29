import Icon from "@ant-design/icons";

export default function AlertTriangleIcon(
  props: Partial<React.ComponentProps<typeof Icon>>
) {
  return (
    <Icon
      component={() => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m10.24 3.957l-8.422 14.06A1.989 1.989 0 0 0 3.518 21h16.845a1.989 1.989 0 0 0 1.7-2.983L13.64 3.957a1.989 1.989 0 0 0-3.4 0zM12 9v4m0 4h.01"
          ></path>
        </svg>
      )}
      {...props}
    />
  );
}
