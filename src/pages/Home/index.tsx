import { WebPage, WebText } from "@/components";

import { Header } from "./components/Header";

export const HomePage = () => {
  return (
    <WebPage>
      <Header />
      <div>
        <WebText>Home Page</WebText>
      </div>
    </WebPage>
  );
};
