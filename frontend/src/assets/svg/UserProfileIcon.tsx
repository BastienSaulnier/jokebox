import * as React from "react";

export default function UserProfileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      preserveAspectRatio="xMinYMin meet"
      {...props}
    >
      <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm1.229 16H4a2 2 0 0 1-.813-.172 5.58 5.58 0 0 1 3.347-3.758 1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 5.229 18zm9.512 0a3.658 3.658 0 0 0-2.097-2.066 1 1 0 1 1 .712-1.868 5.659 5.659 0 0 1 3.437 3.77A1.993 1.993 0 0 1 16 18h-1.26zM10 4a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2z"></path>
    </svg>
  );
}
