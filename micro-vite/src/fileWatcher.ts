import chokidar from "chokidar";
import { watch } from "rollup";

export const createFileWatcher = (
  onChange: (eventName: string, path: string) => void
) => {
  const watcher = chokidar.watch("**/*", {
    ignored: ["node_modules", ".git"],
    ignoreInitial: true,
  });
  watcher.on("all", (eventName, path) => {
    onChange(eventName, path);
  });
};
