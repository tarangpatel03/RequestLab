import { WebIcon, WebText } from "@/components";

export const Header = () => {
  return (
    <div className="flex justify-between items-center align-middle p-3">
      <div className="flex items-center align-middle gap-1">
        <WebIcon source="ic_logo" />
        <WebText className="font-semibold text-lg">RequestLab</WebText>
      </div>
    </div>
  );
};
