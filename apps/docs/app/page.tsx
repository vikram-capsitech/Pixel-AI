import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { ThemeProvider } from "@repo/ui/theme/ThemeProvider";
import { ChatbotWelcome } from "@repo/ui/components/ChatbotWelcome";

export default function Home() {
  return (
    <div className={styles.page}>
      <ThemeProvider>
        <ChatbotWelcome message="Hey there! Welcome to our site ✨" />
      </ThemeProvider>
    </div>
  );
}
